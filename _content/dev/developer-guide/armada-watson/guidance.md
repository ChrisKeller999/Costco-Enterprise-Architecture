---
title: Armada for Watson - Guidance
breadcrumb: Armada - Guidance
sidebar: dev
---
## Getting access to Kubernetes Clusters

Access to Watson Kubernetes clusters is requested via USAM. Once you have received access through USAM, you will use the Bluemix CLI withe the IBM Container Service plugin to login and obtain a Kubernetes Configuration file. Under the covers, USAM roles are synchronized with IAM access groups. So you can login with your W3ID credentials and you can use IAM capabilities like API Keys.

The USAM System is `Armada-IdMgmt`. When you initially request access, please use your W3ID as the user id for this system.

The `Armada-IdMgmt` USAM System is setup with a role per namespace per cluster. Additionally, there are edit and view roles for each namespace to facilitate giving read access to collaborators without giving them control. e.g. The edit role for the conversation namespace in cruiser 7 in development in us-south is `WDC-dev-dal7-Armada-Conversation-Edit`.  See the environments table to indentify the correct cluster. (https://github.ibm.com/watson-foundation-services/kubernetes-cluster-admin/blob/master/maintenance/environments/environments-key.md){:target="_blank"}


Most service team members will most likey request an editor role.  Functional IDs running automation should select a viewer role. Additional documentation for Conan CD support for USAM/IAM is available (https://github.ibm.com/watson-continuous-delivery/Documentation/blob/master/technical/usam-iam-conan-integration.md){:target="_blank"}.

Once you have requested access to a namespace it will require your manager's approval as well as a system owner's approval. System owners have been identified for each namespace based on what team owns that namespace.

After the USAM update has been approved, a periodic process will pickup the changes and synchronize the USAM role membership with the corresponding IAM Access Group membership. The IAM Access Groups for each namespace are setup when the namespace is created, so once the IAM Group has been updated, access will be available. The requester will receive a note from USAM when this process has run.

<a name="namespaces"></a>
## Namespaces and team setup

Requests for new namespaces in our clusters or for changes in namespace quotas should be opened in the [Deploy Team GHE repo.](https://github.ibm.com/Watson/deploys/wiki/P:-Armada-Cluster-Namespace-Access-and-Security){:target="_blank"}. If you can't access that GHE repo, you can request access in the [Deploy team Slack channel.](https://ibm-watson.slack.com/messages/C1HAQR94Y){:target="_blank"}.

## Bluemix CLI and IBM Container Service plugin and Kubernetes kubectl CLI setup

User will need to follow the instructions to access Watson Kubernetes clusters just as they would any IBM Container Service retail cluster. [Instructions are in the public IBM Cloud Container Service Documentation.](https://console.bluemix.net/docs/containers/cs_cli_install.html#cs_cli_install){:target="_blank"}. There are instructions there for installing the Bluemix CLI and the Kubernetes kubectl CLI.

The cluster name to use in the Bluemix CLI command `bx cs cluster-config <cluster_name_or_ID>` can be found in the [environments](environments.md).

<a name="base-images"></a>

## Docker Images

In time, there may be a set of "standard" base images produces for all of David Kenny's org. In the meantime Watson Security has agreed that we can use the Ubuntu 16.04 docker images as a base image. These images are updated regularly with security patches. Additionally, since we should NOT run more than one process per container in kubernetes and we won't have remote access such as sshd running in the containers, the normal security hardening that is run for VMs or Bare Metals is not required.

**The platform team will not produce base images for use with Kubernetes, please use a Ubuntu-based image. See our examples for how we would recommend building docker images for Kubernetes.**

<a name="examples"></a>

## Examples

The examples previously provided for the Netflix/CSF stack have been updated.

- [Hello World](https://github.ibm.com/watson-foundation-services/csf-hello-world){:target="_blank"}
- [Hello World Sidecar](https://github.ibm.com/watson-foundation-services/csf-hello-world-sidecar){:target="_blank"}
- [Hello World KubeDNS](https://github.ibm.com/watson-foundation-services/csf-hello-world-kubedns){:target="_blank"}

<a name="logging"></a>

## Logging

Armada uses [fluentd](http://www.fluentd.org/) to collect logs from containers and ship them to our IBM Logmet instance(s).

The basic approach for capturing container logs is to capture stdout/stderr from the containers. This works by default, without additional configuration required by the container/pod owner. File based collection isn't supported at this time.

Logs from clusters in development are flowing to https://logmet.stage2.opvis.bluemix.net/ into the ```Watson-Platform-CSF-Staging``` org and the ```dev``` space. If you don't have access to this org and space, ask in #wdc-logging in the Watson slack.

See [Watson Developer Cloud Operational Visibility Documentation](https://pages.github.ibm.com/watson-foundation-services/operational-visibility/){:target="_blank"} for more details.

There are three fields in the logging output that should help you to filter for your container/pod/namespace logs in logmet:

- ```kubernetes.container_name_str``` e.g. csf-hello-world
- ```kubernetes.namespace_name_str``` e.g. user-jschoudt
- ```kubernetes.pod_name_str``` e.g. csf-hello-world-1463229935-hfn3c

See [Watson Developer Cloud Operational Visibility Documentation](https://pages.github.ibm.com/watson-foundation-services/operational-visibility/){:target="_blank"} for more details.

**More detail coming soon**

<a name="metrics"></a>

## Metrics

NOTe: This is all about metrics for Watson artifacts in Kubernetes (namespaces, pods, containers, services, etc.). The metrics for node utilization, networking, filesystem usage on the nodes, etc is all collected and monitored by the Armada team. The Watson team doesn't have access to these metrics. The Armada team is working on the getting Watson access to this for debugging purposes.

### Base Container Metrics for CPU and Memory

Armada uses the standard [Kubernetes components](https://kubernetes.io/docs/user-guide/monitoring/){:target="_blank"} to collect resource metrics from containers. Armada then ships them to our IBM Logmet instance(s).

Metrics from cluster in development are flowing to https://metrics.cperf.opvis.bluemix.net/ into the ```Watson-Platform-CSF-Staging``` org and the ```dev``` space. If you don't have access to this org and space, ask in #wdc-metrics in the Watson slack.  **NOTE: This is the same org/space where our logs flow, so if you have access to logs, then you have access to metrics.**

See [Watson Developer Cloud Operational Visibility Documentation](https://pages.github.ibm.com/watson-foundation-services/operational-visibility/){:target="_blank"} for more details.

### Metrics Collected

The metrics available are:

- ```container-metric-cpu_num_cores```
- ```container-metric-cpu_usage```
- ```container-metric-cpu_usage_pct```
- ```container-metric-memory_current```
- ```container-metric-memory_limit```

### Graphite Naming

To see metrics for your namespace/pod/container:

1. Open the [metrics UI web page](https://metrics.cperf.opvis.bluemix.net/){:target="_blank"}
2. Ensure that you are in the ```Watson-Platform-CSF-Staging``` org and the ```dev``` space. (**NOTE: This isn't the default usually.**)
3. Click the open folder icon and select the "NEW" button on the right side of the Search bar.
4. Mouse over the green bar on the top left of the blank area.
5. Select Add Panel | Graph from the menu
6. Click on the title (no title by default) and select edit.
7. Click on the "Select Metric" button at the bottom of the graph.
8. Select the metrics prefix "crn" then "v1" then "dev" then "public" then "containers-kubernetes" then "us-south" then "a_IBM36626" then your cruiser (main cluster in dev is cruiser 1).
9. Choose a metric to graph.
10. Choose the container you want to graph that metric for. (wildcards are allowed in this string, so ```user-jschoudt_*``` would show the specified metrics for all the containers in the ```user-jschoudt``` namespace).

### Container identifier format

After you select the metric you want to graph, the last selection will be a single element with a name formed like:

    namespace_pod_POD_containerid

For example:

    crn.v1.dev.public.containers-kubernetes.us-south.a_IBM366226.cruiser1.container-metric-memory_current.ddqa_ddqa-deployment-jegerlow-43184335-1tc41_POD_34aabcfc340cdd74d439fd10c41afe71b6bf1e911d09c13537ec113f7fe2b526

## Custom Metrics

Custom metrics can be pushed via two options. Option 1 is the supported option today.

### Option 1 - StatsD

This option is documented in the normal guidance for [CSF Operational Visibility](https://pages.github.ibm.com/watson-foundation-services/operational-visibility/metrics/logmet-migration/){:target="_blank"}.

StatsD is packaged using the sidecar pattern. This pattern, when leveraged via Kubernetes multi-pod support, allows for separation of concerns between containers and resource isolation to reduce the complexity in allocating and managing resources. This is a change from our previous model in Mesos/Marathon, where multiple processes were run in a container and managed via supervisord.

**NOTE: Please don't confuse the statsd sidecar with the CSF Netflix Sidecar. Both use the sidecar pattern, but they are distinct containers.***

See the read me and examples in the [statsd sidecar github repo](https://github.ibm.com/watson-foundation-services/kubernetes-statsd-sidecar){:target="_blank"} for usage details.

The [csf-hello-world](https://github.ibm.com/watson-foundation-services/csf-hello-world){:target="_blank"} example is instrumented using StatsD and configured to push metrics to logmet.

The [csf-hello-world-sidecar](https://github.ibm.com/watson-foundation-services/csf-hello-world-sidecar){:target="_blank"} is also instrumented with StatD.

### Option 2 - Prometheus

Prometheus is the industry/community standard way to collect metrics and generate alerts for Kubernetes. The Armada team is using Prometheus to gather metrics and monitor the Kubernetes cluster. However, they are not collecting application-level metrics from pods, containers, etc. that Watson runs. They need to keep their use of Prometheus separate from ours to keep the separation of concerns between cluster management and application clear.

We are working to get the use of Prometheus by Armada consumers established as an architecture pattern in the CTO-led architecture guild. This is the first step to building a pattern where there is an owner who will manage Prometheus for consumers such as Watson.

In the meantime, if services teams want to run Prometheus they can do so. **Support for prometheus is the responsibility of the service team.** I am working on a sample/pattern for this in the [prometheus branch of csf-hello-world](https://github.ibm.com/watson-foundation-services/csf-hello-world/tree/prometheus){:target="_blank"}. This pattern will include shipping metrics from Prometheus to IBM LogMet for longer term storage and wider availability.

<a name="image-build-and-promotion"></a>

## Container Image Building and Deployment

The Tron team manages tooling for [continuous integration](https://github.ibm.com/ghenkins-project/documentation/wiki){:target="_blank"} and [continuous deployment](https://github.ibm.com/watson-continuous-delivery/Documentation/blob/master/README.md){:target="_blank"}.

For Tron support, please see their support [documentation](https://pages.github.ibm.com/tron/support/){:target="_blank"}.

### Continuous Integration (CI)

Containers for services running in Armada should be built and continuously integrated using [Ghenkins](https://github.ibm.com/ghenkins-project/documentation/wiki){:target="_blank"}.

### Docker Registry

The Tron team manages a central Pay as You Go IBM Cloud account, called Red Sonja. Within that account, Watson Service teams will create namespaces for each Docker registry, and then store their Docker images within those Docker registries and namespaces.

There are separate instances of the IBM Cloud Docker Registry for IBM Cloud Stage (aka YS1) and IBM Cloud Production. Additionally, in production, there are distinct registries per region. (e.g. There is a registry for US-SOUTH, a different registry for EU-GB, and a different registry for EU-WEST, etc). These regional registries are NOT replicated. You must allocate namespaces and push images to them individually. IBM Cloud Registries exist in Hub locations in the IBM Cloud Hub/Spoke datacenter topology. There are no registries in spokes.

This [document](https://console.bluemix.net/docs/containers/cs_regions.html#regions-and-locations){:target="_blank"} provides more information about IBM Cloud Container Services.

#### Docker registry limitations

Because the Red Sonja account is a Pay as You Go account, there is not a limit on the size of Docker images.

#### Docker registry by Watson environments

In all Watson's development, staging, public production and dedicated production environments, we use IBM Cloud Public Docker registries. Watson uses the IBM Cloud Docker registry that is closest to the particular Watson production environment. (Closest geographically and in terms of network latency and bandwidth.) As noted above, this follows the hub and spoke topology for IBM Cloud.

NOTE: Our dedicated dev env is in Tokyo today. This may be an issue for connection to us-south or ap-syd registries. Yet another reason we need to move our dedicated dev environment out of Tokyo.

#### Docker registry namespaces

Namespaces in the IBM Cloud Docker Registry are allocated to customers on a first come first served basis. When Watson Service teams [on-board](#using-watson-ci-and-cd) to the Red Sonja account, they should "land-grab" the namespaces they want to use in all registries.

#### Network connectivity for Docker registry

The IBM Cloud Docker Registries live on the public internet. Watson will need to configure outbound access to these registries. The proxy should preserve the SSL Certificate exchange between the Client in Watson (e.g. Kubernetes or Docker) and the IBM Cloud Docker Registry.

#### Promoting images

Images are created in Ghenkins and pushed to the public Docker registries. Since we use the same registries for dev, pstg, and production environments there is no longer a need for image promotion logic. However, this requires extra care from the development teams with respect to versioning. Pushing an image for use/testing in dev/staging will make it visible in production as well. Always avoid the use of latest when deploying. And take care not to over-write an image version that is in use in production.

#### Image versioning and the use of "latest"

The use of the "latest" tag in Docker is **encouraged** for referencing base images. Referring to a base image in the Dockerfile for your image should use the latest tag to ensure you always have the latest security updates and bug fixes when you build/test. e.g. `FROM wdcloud/wdctomcat:latest`.

The use of "latest" is **discouraged** for deployments. In fact, the use of versions at all is **discouraged**. We use an immutable identifier, the sha256, of the image. Since this hash is computed from the image content, even if someone pushes a new image from dev with the same version tag used in production it will not change production.

#### IBM Cloud account and registry namespace ownership

All container registries that Watson uses will be **in the single IBM Cloud Red Sonja account**. This will facilitate security having a single view of all our images via Vulnerability Advisor and other tools.

For now, this means that all teams will be able to see/access other teams' docker registry namespaces. There is functionality in the registry coming in late 2017 to allow for IAM to be used to control who has access to what namespaces in the registry.

### Continuous Deployment (CD)

Containers, built in Ghenkins, for services running in Armada should be deployed using [Hyboria](https://github.ibm.com/watson-continuous-delivery/Documentation/blob/master/README.md){:target="_blank"}. Hyboria can be run in two ways:
* on a local workstation (Hyboria-CLI) for testing your deployment scripts or in an emergency
* on a remote server (Hyboria TaaS Jenkins) for automated deployments

Deployments to Armada **CANNOT** be done in Ghenkins, and must be done using Hyboria.

### Using Watson CI and CD

Follow the Tron provided on-boarding [instructions](https://github.ibm.com/watson-continuous-delivery/Documentation/blob/master/on-boarding/README.md){:target="_blank"} to enable your Watson service team to use the Watson CI/CD solution, including Ghenkins, the Red Sonja IBM Cloud account, and Hyboria.

<a name="persistent-storage"></a>

### Persistent Storage

A persistent volume claim is a request for storage that can be initiated by the cluster user or cluster admin. After the user creates a persistent volume claim, a persistent volume with the requested storage size and storage class is created. This persistent volume is mounted and bound to the persistent volume claim. The user can mount the persistent volume claim on a container to persist data across pod restarts or share data between pods.

## File Storage Volume

The NFS file storage that backs the persistent volume is backed by SSD flash storage arrays at higher IOPS levels with disk level encryption for data-at-rest and clustered in order to provide high availability for your data. The file storage claim can be mounted to a container in a pod to ensure that data is available even if the pod crashes or shuts down.

**Creating a persistent volume claim to provision NFS file storage.**

*NOTE: Cluster users don't currently have permissions to get or describe storage classes due to an [issue in Kubernetes](https://github.com/kubernetes/kubernetes/pull/40881){:target="_blank"}. Step 1 and 2 are informational and the output provided should give you the information required to complete Step 3.*

**1.** Review the available storage classes. Armada Container Service provides three pre-defined storage classes so that the cluster admin does not have to create any storage classes.

> `kubectl get storageclasses`

```
$ kubectl get storageclasses
NAME                         TYPE
ibmc-file-bronze (default)   ibm.io/ibmc-file
ibmc-file-gold               ibm.io/ibmc-file
ibmc-file-silver             ibm.io/ibmc-file
```

**2.** Review the IOPS of a storage class or the available sizes.

> `kubectl describe storageclasses ibmc-file-silver`

*The **parameters** field provides the IOPS per GB associated with the storage class and the available sizes in gigabytes.*

```
BRONZE:
Parameters: iopsPerGB=2,sizeRange=20Gi,40Gi,80Gi,100Gi,250Gi,500Gi,1000Gi,2000Gi,4000Gi,8000Gi,12000Gi,type=Endurance
SILVER:
Parameters: iopsPerGB=4,sizeRange=20Gi,40Gi,80Gi,100Gi,250Gi,500Gi,1000Gi,2000Gi,4000Gi,8000Gi,12000Gi,type=Endurance
GOLD:
Parameters: iopsPerGB=10,sizeRange=20Gi,40Gi,80Gi,100Gi,250Gi,500Gi,1000Gi,2000Gi,4000Gi,type=Endurance
```

**3.** Open your preferred text editor and create a configuration script to define your persistent volume claim and save the configuration as a .yaml file.

```
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: mypvc
  annotations:
    volume.beta.kubernetes.io/storage-class: "ibmc-file-silver"
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 100Gi
```

* **Understanding the configuration script components**
> **`metadata: name:`** - Enter the name of the persistent volume claim.
>
> **`metadata: annotations:`** - Storage class defines the IOPS per GB of the host file share for the persistent volume that the persistent volume claim requests.
> * *ibmc-file-bronze*: 2 IOPS per GB.
> * *ibmc-file-silver*: 4 IOPS per GB.
> * *ibmc-file-gold*: 10 IOPS per GB.
>
>**Note:** If no storage class is specified, the persistent volume is created with the bronze storage class.
>
> **`spec: accessModes:`** - Access modes define the way that the persistent volume claim can be mounted to a worker node.
> * *ReadWriteOnce (RWO)*: The persistent volume can be mounted to pods in a single worker node only. Pods that are mounted to this persistent volume can read from and write to the volume.
> * *ReadOnlyMany (ROX)*: The persistent volume can be mounted to pods that are hosted on multiple worker nodes. Pods that are mounted to this persistent volume can only read from the volume.
> * *ReadWriteMany (RWX)*: This persistent volume can be mounted to pods that are hosted on multiple worker nodes. Pods that are mounted to this persistent volume can read from and write to the volume.
>
>
> **`resources: requests/storage:`** - Enter the amount of storage to create on an NFS file share in gigabytes. Available sizes are 20Gi, 40Gi, 80Gi, 100Gi, 250Gi, 500Gi, 1000Gi (1 TB), 2000Gi (2 TB), 4000Gi (4 TB). For the bronze and silver storage classes, 8000Gi (8 TB) and 12000Gi (12 TB) sizes are also available. If you choose a size other than one that is listed, the size is rounded up. If you select a size larger than the largest size, then the size is rounded down.


**4.** Create the persistent volume claim.

> `kubectl apply -f deploy/kube-config/mypvc.yaml`

**5.** Verify that your persistent volume claim is created and bound to the persistent volume object. This process can take a few minutes.

> `kubectl describe pvc mypvc`

 *Your output should look similar to the following:*

```
Name: mypvc
Namespace: default
StorageClass: ""
Status: Bound
Volume: pvc-0d787071-3a67-11e7-aafc-eef80dd2dea2
Labels: <none>
Capacity: 100Gi
Access Modes: RWX
Events:
  FirstSeen	LastSeen	Count	From								SubObjectPath	Type		Reason			Message
  ---------	--------	-----	----								-------------	--------	------			-------
  3m		3m		1	{ibm.io/ibmc-file 31898035-3011-11e7-a6a4-7a08779efd33 }			Normal		Provisioning		External provisioner is provisioning volume for claim "default/my-persistent-volume-claim"
  3m		1m		10	{persistentvolume-controller }							Normal		ExternalProvisioning	cannot find provisioner "ibm.io/ibmc-file", expecting that a volume for the claim is provisioned either manually or via external software
  1m		1m		1	{ibm.io/ibmc-file 31898035-3011-11e7-a6a4-7a08779efd33 }			Normal		ProvisioningSucceeded	Successfully provisioned volume pvc-0d787071-3a67-11e7-aafc-eef80dd2dea2
  ```

 **6.** To mount the persistent volume claim to your pod, create a configuration script and save the configuration as a .yaml file.

  ```
  apiVersion: v1
kind: Pod
metadata:
 name: mypod
spec:
 containers:
 - image: nginx
   name: mycontainer
   volumeMounts:
   - mountPath: /volumemount
     name: myvol
 volumes:
 - name: myvol
   persistentVolumeClaim:
     claimName: mypvc
```

* **Understanding the configuration script components**
> **`metadata: name:`** - The name of the pod.
>
> **`volumeMounts: mountPath:`** - The absolute path of the directory to where the volume is mounted inside the container.
>
> **`volumeMounts: name:`** - The name of the volume that your are mounting to your container.
>
> **`volumes: name:`** - The name of the volume that you mount to your container. Typically this name is the same as volumeMounts/name.
>
> **`volumes: name: persistentVolumeClaim:`** - Enter the name of the persistent volume claim that you want as your volume. When you mount the volume to the pod, Kubernetes identifies the persistent volume that is bound to the persistent volume claim and enables the user to read from and write to the persistent volume.


**7.** Verify that the volume is successfully mounted to your pod.

> `kubectl describe pod mypod`

 *The mount point is listed in the **Volume Mounts** field and the volume is listed in the **Volumes** field.*

```
Volume Mounts:
     /var/run/secrets/kubernetes.io/serviceaccount from default-token-tqp61 (ro)
     /volumemount from myvol (rw)
...
Volumes:
 myvol:
   Type:	PersistentVolumeClaim (a reference to a PersistentVolumeClaim in the same namespace)
   ClaimName:	mypvc
   ReadOnly:	false
```


**Removing Resources and Persistent Volumes**

You can manually remove resources from a cluster when you no longer needed them. In addition, most resources are automatically deleted when you remove the cluster that the resources are associated with. However, you must manually remove persistent volume claims before you remove a cluster. Removing a persistent volume claim permanently deletes any data that is stored, so confirm that your data is backed up and that you removed any pods that are mounted to the persistent volume claim. Due to the monthly billing cycle, a persistent volume claim cannot be deleted on the last day of a month. If you delete the persistent volume claim on the last day of the month, the deletion remains pending until the beginning of the next month.

*Remove an individual resource or several resources by running the delete command.*

*Examples:*

> `kubectl delete pod mypod`
>
> `kubectl delete pvc mypvc`
>
> `kubectl delete pod,service,pvc my_pod my_service mypvc`




## Object Storage Bucket

> **Coming Soon**







## Block Storage Volume

> **Coming Soon**
