---
title: Armada Deployments for Watson
breadcrumb: Armada Deployments
sidebar: dev
---
## Armada Watson vs Armada retail

Armada deployments for Watson follow the same deployment model as Armada retail. The Bluemix CLI with the Container Service plugin is available to administrators to manage clusters. It will be available to all users when we move to using IAM to authenticate with clusters rather than Service Account tokens.

## Armada Watson Network Topology

Connectivity from Kubernetes workers back to the Kubernetes master servers (carriers), the Armada API servers, and the Containers Tribe Docker Registry:

[![Connectivity from the Watson Kubernetes Workers to Armada Infrastructure](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/armada-watson/watson-armada-connectivity.png)](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/armada-watson/watson-armada-connectivity.png)

<a name="ha"></a>

### Watson High Availability on Armada


## Initial rollout and Single Availability Zone

The initial rollout of Armada will be in single Data Center/Availability Zone in each "Hub" location (Dallas, Washington DC, Frankfurt, London, Tokyo, Sydney).

High Availability for Watson services in this deployment topology is defined as at least 3 instances (pods or collections of pods) per public multi-tenant service and at least 2 instances per premium single tenant service. [Kubernetes will automatically attempt to schedule your pods on distinct nodes](https://kubernetes.io/docs/concepts/configuration/assign-pod-node/){:target="_blank"}.

## Armada Availability Zone Deployment Topology for Hubs and Spokes

SoftLayer is enhancing the networking between data centers in the Hubs and relabelling three of the DCs in each Hub as "Availability Zones" in the style of AWS AZs (fault isolated domains with low latency, high bandwidth network connectivity).

The Armada team has documented the recommended deployment topology for the new Availability Zone model that is coming from SoftLayer in the
[Armada Architecture Hub-n-spoke Section](https://github.ibm.com/alchemy-containers/armada/blob/master/architecture/architecture.md#hub-n-spoke-architecture){:target="_blank"}

In spokes, the High Availability criteria listed above for Single Availability Zone will apply for Watson Services.

In Hubs, High Availability for Watson Services is defined as at least 3 instances (pods or collections of pods) per public multi-tenant service and at least 2 instances per premium single tenant service. [Kubernetes has support for zones](https://kubernetes.io/docs/admin/multiple-zones/){:target="_blank"}, and will attempt to distribute your deployments evenly across all the Availability zones in the cluster. This assumes that there are adequate resources to schedule your pods in each zone.

## Armada High Availability in an MZR

Armada will achieve High Availability with no single point of failure in a MZR. All the components of Kubernetes, including masters running in multiple availability zones. Details on this are available in the [Armada Architecture documentation](https://github.ibm.com/alchemy-containers/armada/blob/master/architecture/architecture.md#recoveryha){:target="_blank"}.

Watson's workload in Armada will be spread across availability zones. Kubernetes will schedule pods across availability zones by default for Deployments that do not use Persistent Volume Claims, as long as there are resources available in each zone.

Armada's ALB (Application Load Balancer aka Front Door or Ingress) is configured to run in each availability zone.

IBM Cloud provides a Global Load Balancer function (sourced from the Third Party Vendor Cloudflare) which will be used to send requests to each Availability zone that is up.

NOTE: Once inside the cluster, Kubernetes does not do zone aware routing. Requests that enter the cluster through an ALB in a particular AZ will not necessarily be serviced by application pods in that AZ.
