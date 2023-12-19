---
title: Monitoring Best Practices
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/best-practices/rancher-managed-clusters/monitoring-best-practices"/>
</head>

Configuring sensible monitoring and alerting rules is vital for running any production workloads. Monitoring and alerts aide you in the goals of security and reliability. Fortunately, Rancher's integrated monitoring and alerting makes adding monitoring and alerts easy.

The [Rancher monitoring documentation](../../../pages-for-subheaders/monitoring-and-alerting.md) describes how to set up a complete Prometheus and Grafana stack. This will scrape monitoring data from all system and Kubernetes components in your cluster, and provide sensible dashboards and alerts. However, you should also adapt Prometheus and Grafana to your specific needs.

## What to Monitor

Kubernetes and the applications running inside of it form a distributed system of components. Google's free [Site Reliability Engineering book](https://sre.google/sre-book/table-of-contents/) is a great resource on how to ensure the performance, availability, reliability and scalability of both the system as a whole, and each distinct component. The chapter about [monitoring distributed systems](https://sre.google/sre-book/monitoring-distributed-systems/) is especially pertient.

## Configuring Prometheus Resource Usage

When you install the integrated monitoring stack, Rancher configures several settings that are dependent on the size of your cluster and the workloads running within it.

### Storage and Data Retention

There is a direct correlation between Prometheus storage needs, and both the number of time series and labels stored, and the data retention time set. Data retention time should only be a couple of days, not weeks or months. This is because Prometheus doesn't perform any aggregation on its stored metrics. While this helps prevent data from becoming diluted, storage needs will grow linearly without retention.

#### Calculate How Much Storage Prometheus Needs 

The following formulas provide a rough idea of your Prometheus storage needs.

1. Find the average storage chunk size in Prometheus:

```
rate(prometheus_tsdb_compaction_chunk_size_bytes_sum[1h]) / rate(prometheus_tsdb_compaction_chunk_samples_sum[1h])
```

2. Find your data ingestion rate per second:

```
rate(prometheus_tsdb_head_samples_appended_total[1h])
```

3. Multiply the average chunk size with the data ingestion rate and the retention time, including a few extra percent of bytes as a buffer:

``` 
average chunk size in bytes * ingestion rate per second * retention time in seconds * 1.1 = necessary storage in bytes
```

You can find more information about how to calculate Prometheus storage in this [blog post](https://www.robustperception.io/how-much-disk-space-do-prometheus-blocks-use). Learn more about how Prometheus storage works in the [official documentation](https://prometheus.io/docs/prometheus/latest/storage).

### CPU and Memory Requests and Limits

In larger Kubernetes clusters, Prometheus can consume quite a bit of memory. There is a direct correlation between memory consumption, and both the number of time series and labels stored, and the time interval set for data scraping.

There is also a direct correlation between the number of CPUs Prometheus needs, and how many queries you perform.

You can find more information about how to calculate how much memory Prometheus needs in the blog post, [How much RAM does Prometheus 2.x need for cardinality and ingestion?](https://www.robustperception.io/how-much-ram-does-prometheus-2-x-need-for-cardinality-and-ingestion).

### Federation and Long-term Storage

Prometheus is intended for short-term storage.

To store metrics for the long-term, use Prometheus' [remote read/write](https://prometheus.io/docs/prometheus/latest/storage/#remote-storage-integrations) capabilities to connect to storage systems such as [Thanos](https://thanos.io/), [InfluxDB](https://www.influxdata.com/), [M3DB](https://www.m3db.io/), or others. You can find an example setup in this [blog post](https://rancher.com/blog/2020/prometheus-metric-federation).

## Scraping Custom Workloads

Rancher Monitoring scrapes system metrics from a cluster's nodes and system components. You should also scrape data from the custom workloads that you deploy on Kubernetes. To do so, configure Prometheus to do an HTTP request to an endpoint of your applications at a certain interval. These endpoints should return their metrics in a Prometheus format.

Often, you will realize that you need data for alerts or debugging only when an incident occurs. It's better if that data is already scraped and stored. Since Prometheus is only intended for short-term metrics storage, scraping and keeping lots of data is usually not that expensive. Therefore, you should scrape data from all the workloads running in your cluster. If you are using a long-term storage solution with Prometheus, you can decide which data to keep.

### About Prometheus Exporters

Many third party workloads, such as databases, queues, and web-servers, already support exposing metrics in a Prometheus format, or offer exporters that translate between the tool's metrics and a format that Prometheus understands. You can usually add these exporters as additional sidecar containers to the workload's Pods. Many Helm charts include options to deploy the correct exporter. You can find a curated list of exports by SysDig on [promcat.io](https://promcat.io/) and on [ExporterHub](https://exporterhub.io/).

### Prometheus support in Programming Languages and Frameworks

To get your own custom application metrics into Prometheus, you must collect and expose these metrics directly from your application's code. There are libraries and integrations available to help with this for most popular programming languages and frameworks. For example, the Spring Framework [supports Prometheus](https://docs.spring.io/spring-metrics/docs/current/public/prometheus).

### ServiceMonitors and PodMonitors

Once all of your workloads expose metrics in a Prometheus format, you must configure Prometheus to scrape them. Under the hood, Rancher uses the [prometheus-operator](https://github.com/prometheus-operator/prometheus-operator). This makes it easy to add scraping targets with ServiceMonitors and PodMonitors. Many Helm charts already include an option to create these monitors directly. You can also find more information in the Rancher documentation.

### Prometheus Push Gateway

Prometheus has difficulty scraping certain kinds of workloads. Some examples include short-lived workloads such as Jobs and CronJobs, or applications that don't allow sharing data between individually handled incoming requests, such as PHP applications.

To get metrics from these kinds of workloads, set up [prometheus-pushgateways](https://github.com/prometheus/pushgateway). The CronJob or PHP application pushes metric updates to the pushgateway, which aggregates and exposes them through an HTTP endpoint that Prometheus can scrape.

### Prometheus Blackbox Monitor

Sometimes it's useful to monitor workloads from the outside. The [Prometheus blackbox-exporter](https://github.com/prometheus/blackbox_exporter) allows you to probe any kind of endpoint over HTTP, HTTPS, DNS, TCP and ICMP.

## Monitoring in a (Micro)Service Architecture

If you have a (micro)service architecture with frequent communication between workloads in the same cluster, you need detailed metrics and traces about this network traffic. This information will help you locate problems or bottlenecks.

It's possible to monitor all the internal traffic in all your workloads and expose these metrics to Prometheus. However, this can quickly become burdensome. Service Meshes such as Istio, which can be installed with [a click](../../../pages-for-subheaders/istio.md) in Rancher, can do this internal monitoring automatically, and provide rich telemetry about the traffic between all services.

## Real User Monitoring

To run stable, reliable and fast applications, it's vitally important to monitor the availability and performance of all of your internal workloads. However, the metrics you get from your workloads only provide a part of the complete picture. Use [Real user monitoring solutions](https://en.wikipedia.org/wiki/Real_user_monitoring) to understand how your end users see your applications.

## Security Monitoring

The cluster and the workloads running into it should be monitored for potential security problems. A good starting point is to frequently run and alert on [CIS Scans](../../../pages-for-subheaders/cis-scan-guides.md), which check if the cluster follows security best practices.

For workloads, consider Kubernetes and container security solutions such as [NeuVector](https://www.suse.com/products/neuvector/), [Falco](https://falco.org/), [Aqua Kubernetes Security](https://www.aquasec.com/solutions/kubernetes-container-security/), or [SysDig](https://sysdig.com/).

## Setting up Alerts

Rancher monitoring provides a sensible set of alerts that make sense in any Kubernetes cluster. You should also add alerts to cover your specific workloads and use cases.

When you set up alerts, configure them for all your critical workloads. Also, make sure that the alerts aren't too noisy. Every alert you receive should be in response to a problem that needs to be fixed. If you have alerts that are constantly firing but are not that critical, there is a danger that you will start to ignore alerts altogether and then miss the truly important ones. Less may be more here. Focus on the really important metrics first, such as if your application goes offline. Fix all the problems that start to pop up and then start to create more detailed alerts.

If an alert starts firing, but there is nothing you can do about it at the moment, it's also fine to silence the alert for a certain amount of time, so that you can look at it later.

You can find more information on how to set up alerts and notification channels in the Rancher Documentation on [monitoring and alerting](../../../pages-for-subheaders/monitoring-and-alerting.md).
