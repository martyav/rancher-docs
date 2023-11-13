---
title: Vagrant Quick Start
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"/>
</head>

The following steps quickly deploy a Rancher server with a single-node downstream Kubernetes cluster attached.

:::caution

These instructions describe how to quickly launch a sandbox to evaluate Rancher. They aren't intended for production environments. For comprehensive Rancher setup instructions, see [Installation](../../../pages-for-subheaders/installation-and-upgrade.md).

:::

## Prerequisites

- [Vagrant](https://www.vagrantup.com): Provisions a virtual machine (VM) based on a Vagrantfile.
- [Virtualbox](https://www.virtualbox.org): Used by Vagrant to create the VM that hosts Rancher.
- [Git](https://git-scm.com/) (optional): The quick start files you'll be using to create a Rancher instance are hosted in a Git repository. The easiest way to download them is via `git clone`. 
- At least 4GB of free RAM.

:::note
- Vagrant requires plugins to create VirtualBox VMs. To install the plugins, run:
 
  `vagrant plugin install vagrant-vboxmanage`
  `vagrant plugin install vagrant-vbguest`
:::

## Getting Started

1. Clone the [Rancher Quick Start](https://github.com/rancher/quickstart) repository: 

```bash
git clone https://github.com/rancher/quickstart
```

2. Go to the folder containing the Vagrantfile: 

```bash
cd quickstart/rancher/vagrant
```

3. **Optional:** Edit `config.yaml` to:

  - Change the number of nodes and the memory allocations, if required: `node.count`, `node.cpus`, `node.memory`.
  - Change the password of the `admin` accounted used for initial login: `admin_password`.

4. Provision an environment in a VirtualBox VM for Rancher, using Vagrant. Provisioning might take several minutes:
 
```bash
vagrant up --provider=virtualbox`
```

5. After the Rancher instance completes provisioning, go to https://192.168.56.101 in your web browser. The default user is `admin` and the default password is `adminPassword`.

:::note
When you try to go to the IP address, you may see a warning that the connection is insecure.
This is because the Rancher demo site doesn't include a web certificate.
Ignore the warning for now and continue to the demo site.
:::

### Result

The Rancher API server and downstream Kubernetes cluster are now installed on VirtualBox.

### What's Next?

Use Rancher to [create a deployment](../../../pages-for-subheaders/deploy-rancher-workloads.md).

## Destroying the Environment

1. From the `quickstart/rancher/vagrant` folder, run:

```bash
vagrant destroy -f
```

2. Wait for the confirmation that all resources are destroyed.
