---
title: Deployment Verification Testing
breadcrumb: Verification Testing
sidebar: dev
---

## Goal for Deployment Verification Tests:

**Validate the fitness of a system that has been deployed into a particular environment.**

This system may be, for example, one microservice developed and deployed by a single team, or a collection of multiple microservices that work together.  This may involve functional as well as integration tests.

## Plan to realize this goal:

Provide development teams with an easy-to-use API to enable Deployment Verification Tests to be run in Armada, in a way such that they can be run on-demand, or integrated into automated deployments, callable from our [Hyboria Jenkins continuous delivery system](https://github.ibm.com/watson-continuous-delivery/Documentation/){:target="_blank"}.

## How does the DVT library work?

1. From a Hyboria job, uses `kubectl` to reach out to Armada and create remote containers from Docker Images containing tests, provided by the dev teams and deployed as Kubernetes `Job`s
1. Checks to make sure the job starts correctly and gives realtime feedback, with a link to the live Logmet logs for the test containers e.g.
![start message](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/dvt/start.gif)
1. Monitors the execution of the `Job`s until they complete, timeout, or fail
1. While polling to see if a job is complete, auto-retries in the face of intermittent network connectivity problems
1. Copies results from Armada with `kubectl cp` from a test-monitor / beachhead `pod` (details below) back to a Hyboria Jenkins workspace.
1. Shunts results automatically to particular Jenkins plugins `junit,cucumber,performance` for automatic evaluation, and presentation of those results
1. Stores result artifacts as a Jenkins job `archive`, makes them available for whatever processing teams want to do to them in their Hyboriafile
1. Deletes (optionally, but by default) the completed `Job` from Armada, and its artifacts from the remote `PersistentVolumeClaim`
1. Provides / highlights diagnostic information in the Jenkins job page in various ways if/when things go sideways in ways we've seen previously, e.g.
  * Container running out of memory: ![example OOMKilled](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/dvt/OOMKilledError.png)
  * Armada can't pull the test image: ![example ImgPullBackOff](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/dvt/ImgPullBackOffError.png)
  * Armada test job exceeds resource quota level: ![example ExceededQuota](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/dvt/ExceededQuotaError.png)
1. Enables programmatic result querying using standard Jenkins methods.


## How does this fit into an automated CI/CD pipeline:

From the existing Hyboriafile teams use to deploy their service, or a from a separate DVT-only one, they can call any of the DVT methods directly, e.g. `dvt.DVT('rendered.d/myTestJob.yaml')` as part of the deployment of a service/microservice, or after that deployment to verify its fitness.  The results could be used to determine if deployments should be rolled-back, if deployments of the service/microservice to subsequent environments should happen, etc. [More info](https://github.ibm.com/watson-continuous-delivery/Documentation/blob/master/on-boarding/examples.md#automatic-deployment-to-dev-from-ghenkins-with-dvt-and-promotion-to-staging){:target="_blank"}.

For manual (outside CI/CD automation) execution - as the DVT library is Groovy code intended only to be called from a Hyboriafile, you can't easily use it outside of Jenkins, though you can use Hyboria-cli or `kubectl` to deploy and pull results from DVT jobs manually.


## Prerequisites:

* On-board to Armada, with appropriate amounts of resource provisioned to run the desired tests.   A best practice is to deploy the DVT images into the same cluster/namespace as the service they test.  They can hit external "front door" or internal service endpoints as needed.
* [On-board](https://github.ibm.com/watson-continuous-delivery/Documentation/tree/master/on-boarding){:target="_blank"} to Hyboria.
* Docker images with tests in them that write their results to a specific directory.  Images that can be `docker/kubectl run` to execute those tests, exit and return a non-zero result if there was an error executing them (as distinct from test failures).
* Ideally, a CI job to build and push updated test images to Armada-reachable Docker registries whenever the tests change.
* If the tests don't produce standard JUnit/JMeter/Cucumber result artifacts, you'll need `Jenkinsfile` (Hyboriafile) [code](https://jenkins.io/doc/book/pipeline/syntax/){:target="_blank"} that [does _something_] to determine pass/fail from the result artifacts


## How teams can use this:

1. Create, and store in a repository under https://github.ibm.com/watson-deploy-configs a Kubernetes yaml file that creates a `Job` that describes the test image, and maps the results directory
to a `PersistentVolumeClaim` as with [demo.yml](https://github.ibm.com/watson-innovations-testops/dvt-common/blob/master/demo.yml){:target="_blank"}.
1. Create, store and deploy a Kuberentes yaml file for the `PersistentVolumeClaim`, like [pvc.yml](https://github.ibm.com/watson-innovations-testops/dvt-common/blob/master/pvc.yml){:target="_blank"}
1. Create, store and deploy a Kubernetes yaml file for a `deployment` of a `pod` that will mount that `PersistentVolumeClaim`, and
allow remote access to tests results added to the PVC by test pods, 24x7 (or setup/teardown on-demand if that's
how you roll).  e.g.: [ngnix.yml](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt/onetimesetup.d/30-nginx.yml){:target="_blank"}
which, incidentally, has its differences from a standard nginx install in a `ConfigMap`
like [nginx-conf.yml](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt/onetimesetup.d/20-nginxconfigmap.yml){:target="_blank"}

1. Put something like the following into their Jenkinsfile, that runs 4 different DVT jobs in parallel, then aggregates their results:

 ```groovy
    stage('DVT') {
       script {
          parallel 'locust'  : { dvt.DVT("${renderedDir}/61-locust.yml") },
                 'dialog'    : { dvt.DVT("${renderedDir}/62-dialog-system-entities.yml")},
                 'analytics' : { dvt.DVT("${renderedDir}/63-analytics.yml")},
                 'bdd'       : { dvt.DVT("${renderedDir}/60-bddjob.yml") }
         }
     }
```

1. Bring questions, bug reports and feature requests to the [#continuous-deployment](https://ibm-watson.slack.com/messages/C12M11H99){:target="_blank"} channel in IBM Watson Slack

## Select Examples of Important files:

* [Demo Hyboriafile](https://github.ibm.com/watson-deploy-configs/demo/blob/master/kingdom-configs/us-south-dev/dvt.hyboriafile){:target="_blank"}: a Jenkins job to orchestrate execution of Deployment Verification Tests
* [Test Job .yaml file](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt/50-dvt-job.yml){:target="_blank"} : Sample Kubernetes yaml descriptor that contains the info for a DVT `Job` and its associated test
container, the path to their results, the CPU/Memory resources they need, etc.
* [PVC .yaml file](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt/onetimesetup.d/10-pvc.yml){:target="_blank"} an example of a `PersistentVolumeClaim` to temporarily store results
* [NGINX .yaml file](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt/onetimesetup.d/30-nginx.yml){:target="_blank"} Kubernetes yaml file for deploying a sample test monitor
* [NGINX configmap .yaml file](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt/onetimesetup.d/20-nginxconfigmap.yml){:target="_blank"} a `ConfigMap` to configure additional nginx settings (such as enabling directory browsing)
* [Dockerfile](https://github.ibm.com/watson-engagement-advisor/wea-conversational-api-it/blob/master/Dockerfile){:target="_blank"} from the Conversation team, showing how a Gradle-based DVT image is built.


## More examples / readmes:

* Hyboria job 'demo': [Source repository in Github Enterprise](https://github.ibm.com/watson-deploy-configs/demo/blob/master/dvt-demo.md){:target="_blank"} and [job in Hyboria Jenkins](https://watson-tron-jenkins.swg-devops.com/job/demo/){:target="_blank"}
* Hyboria job 'demo-mars': [GHE](https://github.ibm.com/watson-deploy-configs/demo-mars){:target="_blank"} and [in Hyboria Jenkins](https://watson-tron-jenkins.swg-devops.com/job/demo-mars/){:target="_blank"}
* Hyboria job 'demo-universe': [GHE](https://github.ibm.com/watson-deploy-configs/demo-universe){:target="_blank"} and [in Hyboria Jenkins](https://watson-tron-jenkins.swg-devops.com/job/demo-universe){:target="_blank"}
* Hyboria job for the Watson Conversation DVT: [GHE](https://github.ibm.com/watson-deploy-configs/conversation-dvt/blob/master/kingdom-configs/pstg/dvt.hyboriafile){:target="_blank"} and [in Hyboria Jenkins](https://watson-tron-jenkins.swg-devops.com/job/conversation-dvt/){:target="_blank"}
* [Github Enterprise Query for references to `dvt.DVT(...)` in the watson-deploy-configs org](https://github.ibm.com/search?l=Groovy&q=org%3Awatson-deploy-configs+%22dvt.DVT%22&type=Code){:target="_blank"} shows lots of examples of teams using this API.

## DVT API details:

- [API doc (cicdtest.txt)](https://github.ibm.com/watson-continuous-delivery/hyboria/blob/master/vars/dvt.txt){:target="_blank"} which is really in markdown format but needs to end in .txt [because Jenkins](https://jenkins.io/doc/book/pipeline/shared-libraries/){:target="_blank"}

- [Library source (dvt.groovy)](https://github.ibm.com/watson-continuous-delivery/hyboria/blob/master/vars/dvt.groovy){:target="_blank"}.  Pull requests welcome!


## How do the directories in the various pods relate to what's in the shared Persistent Volume Claim that stores test results as tests run?

By our convention, a directory specified by `subPath` in the job .yaml that has the same name as the job off root of the volume is mounted into a directory in the pod specified by `mountPath`.

![Pretty picture](https://pages.github.ibm.com/watson-health-playbook/resources/images/developer-guide/dvt/dvt-dir-mapping4.gif)

Thus in the example above a test would write to what it thinks is something like `/test-output/someSubdir/myResults.data`,
this same file would be found _in the PVC_ at `/dvt-suite-1/someSubdir/myResults.data`

Note: Currently, by default, `launchTests()` prepends the Jenkins `JOB_TAG` to the Job `.metadata.name` and to the
`subPath` so that multiple instances of the same job can run in the same `namespace` at the same time.

Also: In the example [ngx.yml](ngx.yml) and [nginx-browse/ngx-config.yml](nginx-browse/ngx-config.yml), the nginx pod
really has its docroot at `/usr/share/nginx/html` with `mountPath` set accordingly.  `wwwroot` is shown in the picture for brevity.

## What's the deal with this beachhead / test-monitor thing?

* We want tests run as a `Job` which is the idiomatic way to manage containers that are meant to do something
finite, then be done, leveraging the help Kubernetes provides to make this easier.
* In each test pod, each container mounts the same PVC volume, and puts test results in its own subdirectory there.
* Once a `Job` is complete, its `pod`s are no longer `active`, so you can't `kubectl cp` stuff from them, so we need _something else_ that's alive when we want to grab the results.
* Even with a `PersistentVolumeClaim` available in Armada, you can't read/write to them *directly*, except from a running `pod`.
* If you have some lightweight process like [NGINX](https://www.nginx.com/){:target="_blank"} in its own pod point its docroot at the same PVC, you have a way to grab the results whenever you want.  If you have `kubectl` and credentials for the `namespace` where the tests are run on your laptop, you can do stuff like:

     `kubectl port-forward nginx-pod-name 32766:80`

    and browse to `localhost:32766` to interactively view the files in the results volume in realtime

*  It's a lightweight proxy into the volume (that's optionally always there) you can use to copy results back.

    * You can `curl` or `wget` files from the www port
    * You can use it a source from which to copy files with `kubectl` e.g.
    ```bash
    kubectl cp $(kubectl -get pods -l role=test-monitor -o jsonpath='{.items[*].metadata.name}'):/usr/share/nginx/html/someFile} local_dir
    ```
    (this is what the DVT library does automatically, by default)
    * You can use `kubectl exec` to grab data, as with:
    ```,bash
      kubectl exec $(kubectl get pods -l role=test-monitor -o jsonpath='{.items[*].metadata.name}' cat /usr/share/nginx/html/subdir/file.ext > localdir/file.ext
    ```
   * Instead of `cat`, you can use pipes and `tar` to copy files, e.g
    ```bash
    kubectl exec ... -- tar -cf - -C /usr/share/nginx/html someSubDir | tar xf -
    ```
   * To easily find the name of the test monitor pod, you can create an `alias` to find the test monitor pod, using
   whatever label you give it, like:
    ```bash
    alias test-monitor='kubectl get pod -l role=test-monitor -o jsonpath='\''{.items[*].metadata.name}'\'''
    ```
   and then you can reference that alias, e.g. to get an interactive shell inside that container:
   ```bash
   kubectl exec -i -t $(test-monitor) -- /bin/sh
   ```
   or get the associated logs for the monitor:
   ```bash
   kubectl logs $(test-monitor)
   ```


## Best Practices for building DVT Docker Images

* Image size should be as small as practical
  * When building image as part of CI, the image should not contain test results or logs from Jenkins workspace
  * Have only necessary files required for test execution. Image should not contain any `src` files like `.java`, `.cpp`, etc. Build tools such as Gradle and maven makes it possible to run tests using just the Gradle/Maven file, and test binary files.
* There are couple of ways to package tests in the above mentioned steps by using Docker's multi-stage build, see [Docker documentation](https://docs.docker.com/engine/userguide/eng-image/multistage-build/){:target="_blank"}:
  * _Method1_: package a fatJar with all files required during runtime.
    * fatJar can be run in two ways. Either by directly running tests using jar or by unpacking the jar to runtime classpath.
  * _Method2_: Copy only required files for tests to run:
    * Copy your build tool application and required dependencies downloaded for tests to run
    * Copy only required resources and compiled project files to respective folders
    * Copy any settings or properties files required for project.
* Examples for implementing this best practices are:
  * For _Method1_ (using Gradle):
    * To build image: [Dockerfile]( https://github.ibm.com/watson-engagement-advisor/wea-conversational-api-it/blob/master/Dockerfile){:target="_blank"}
    * To build and run fatJar: [build.gradle](https://github.ibm.com/watson-engagement-advisor/wea-conversational-api-it/blob/master/build.gradle){:target="_blank"}
  * For _Method2_:
    * Using Gradle: [Dockerfile](https://github.ibm.com/watson-engagement-advisor/analytics-core/blob/develop/tests/src/it/resources/e2e/docker/Dockerfile){:target="_blank"}
    * Using Maven : [Dockerfile](https://github.ibm.com/watson-engagement-advisor/voyager-dialog-service/blob/develop/dialog-v2-test/Dockerfile){:target="_blank"}
* If your test image has a lot of dependencies, it takes a while to download dependencies each time you build the image. You can avoid the hassle if you have your gradle/maven dependencies cache saved in a different image, then use the image with cache while building your test image. Only when there is a version change of a particular dependency, your gradle/maven would download newer version of that dependency. This way it would save a lot of build time.
  * Watson Conversation Analytics' team has implemented this with Gradle. Their test image build & push time reduced from ~30mins to <10mins. Examples in analytics repo [Dockerfiles](https://github.ibm.com/watson-engagement-advisor/analytics-core/tree/develop/tests/src/it/resources/e2e/docker), [Jenkisfile](https://github.ibm.com/watson-engagement-advisor/analytics-core/blob/develop/Jenkinsfile#L693-L753)
* Make sure the return code from your test image is zero unless you want to tell Kubernetes you want the container to be restarted, which is what it will do automatically for non-zero return codes.   The container exit code should not be used to communicate pass/fail for the tests.
* Know, and enforce the maximum RAM the image may use.  You should be specifying these limits in your Job .yaml [example](https://github.ibm.com/watson-deploy-configs/conversation-dvt/blob/master/armada.d/60-bddjob.yml#L22){:target="_blank"}.  If you're using Java, make sure you specify a maximum JVM heap size (e.g. `-Xmx1G`) otherwise your JVM (which isn't aware or the `limits` you set in Kubernetes, it only knows how much RAM exists on the `node` it's running on) may not have attempted to garbage collect until after it's used more than the `limits`, though Kubernetes is liable to auto-kill and restart the container once it uses more than the `limits` ("`OOMKilled`").
