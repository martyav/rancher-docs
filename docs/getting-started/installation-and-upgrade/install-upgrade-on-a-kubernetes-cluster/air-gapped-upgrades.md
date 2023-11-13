---
title: Upgrading in an Air-Gapped Environment
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/air-gapped-upgrades"/>
</head>

:::note

Before you begin, follow the steps described on the [Upgrades](upgrades.md) page, including all prerequisites, up until [step 3 (upgrade Rancher)](upgrades.md#3-upgrade-rancher).

:::

### Rancher Helm Upgrade Options

To upgrade Rancher with Helm, apply the same options as when you first installed Rancher. Use the reference table below and replace each placeholder with the appropiate value. 

Rancher needs to be configured to use the private registry in order to provision any Rancher-launched Kubernetes clusters or Rancher tools.

Based on the choices you made during installation, complete one of the procedures below.

Placeholder | Description
------------|-------------
`<VERSION>` | The version number of the output tarball.
`<RANCHER.YOURDOMAIN.COM>` | The DNS name you pointed at your load balancer.
`<REGISTRY.YOURDOMAIN.COM:PORT>` | The DNS name for your private registry.
`<CERTMANAGER_VERSION>` | Cert-manager version running on k8s cluster.


### Option A: Default Self-signed Certificate

```
helm upgrade rancher ./rancher-<VERSION>.tgz \
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set certmanager.version=<CERTMANAGER_VERSION> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

### Option B: Certificates from Files using Kubernetes Secrets

```plain
helm upgrade rancher ./rancher-<VERSION>.tgz \
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set ingress.tls.source=secret \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

If you are using a Private CA signed cert, add `--set privateCA=true` following `--set ingress.tls.source=secret`:

```plain
helm upgrade rancher ./rancher-<VERSION>.tgz \
	--namespace cattle-system \
	--set hostname=<RANCHER.YOURDOMAIN.COM> \
	--set rancherImage=<REGISTRY.YOURDOMAIN.COM:PORT>/rancher/rancher \
	--set ingress.tls.source=secret \
	--set privateCA=true \
	--set systemDefaultRegistry=<REGISTRY.YOURDOMAIN.COM:PORT> \ # Set a default private registry to be used in Rancher
	--set useBundledSystemChart=true # Use the packaged Rancher system charts
```

## Verify the Upgrade

Log into Rancher to confirm that the upgrade succeeded.

:::tip

If you have network issues following the upgrade, see [Restoring Cluster Networking](/versioned_docs/version-2.0-2.4/getting-started/installation-and-upgrade/install-upgrade-on-a-kubernetes-cluster/upgrades/namespace-migration.md).

:::

## Known Upgrade Issues

A list of known issues for each Rancher version can be found in the release notes on [GitHub](https://github.com/rancher/rancher/releases) and on the [Rancher forums](https://forums.rancher.com/c/announcements/12).
