---
title: Behavior Driven Development (BDD) with Cucumber in Java
breadcrumb: BDD
sidebar: dev
---

## Overview

[Cucumber](https://cucumber.io){:target="_blank"} is a commonly used tool used to facilitate Behavior Driven Development (aka BDD).  BDD is a pattern-based practice that provides an agreed-upon contract between not only developers and testers, but among the whole team. Everyone can look to the expected behavior and understand what must be delivered.

Cucumber takes plain english written in the [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin){:target="_blank"} and generates code stubs. You can then code to the BDD and your passing automated tests become the proof that you've built what we need to be built.

> **ProTip:** While examples on this page are provided in Java, Cucumber is available for nearly every language. The [Gherkin syntax](https://github.com/cucumber/cucumber/wiki/Gherkin){:target="_blank"} is the same no matter what language you work in.

## Project setup (Java)

If you're going to get up and running with Cucumber, you will want to have your project properly laid out.  This will save headaches in the future.  For sanity sake, projects using Cucumber should start adopting the [standard Maven project layout](http://maven.apache.org/guides/introduction/introduction-to-the-standard-directory-layout.html){:target="_blank"}

```bash
src/main/java - Java Application
src/main/webapp - Webapp (jsp, html, js, web.xml, etc)
src/main/resources - Java Application resources
src/test/java - JUnit / Functional tests
src/test/resources - JUnit / Functional test resources
src/it/java - Integration Tests (this is where Cucumber implementation will live)
src/it/resources - Integration Test resources (this is where the Cucumber/Gherkin .feature files will live)
```

## Maven pom.xml Changes (Java)

If you want to start using Cucumber, you will need to add the following dependencies to your Maven project's pom.xml

```xml
<!-- Cucumber Integration -->
    <dependency>
        <groupId>info.cukes</groupId>
        <artifactId>cucumber-junit</artifactId>
        <version>1.2.2</version>
        <scope>test</scope>
    </dependency>
        <dependency>
        <groupId>info.cukes</groupId>
        <artifactId>cucumber-guice</artifactId>
        <version>1.2.2</version>
        <scope>test</scope>
    </dependency>
    <dependency>  <!-- Google Guice for Dependency Injection -->
        <groupId>com.google.inject</groupId>
        <artifactId>guice</artifactId>
        <version>3.0</version>
    </dependency>
    <dependency>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>4.11</version>
      <scope>test</scope>
    </dependency>
  </dependencies>
```

For more advanced usage (i.e. if you want to start a web server and stop a web server, before and after integration test runs), you can do something along the lines of [this article](http://www.weblogism.com/item/334/integration-tests-with-cucumber-jvm-selenium-and-maven){:target="_blank"}

## Creating a Feature file and defining Scenarios

We are going to use an Authentication scenario as an example here.
Create the following file:```src/it/resources/com.ibm.watson.bdd.example/authentication.feature```

Example of a Gherkin Feature file (with Scenarios)

``` gherkin
Feature: Authentication and authorization
    As a developers
    I want to ensure that users are authenticated before using a service
    so that I know that all actions are secured

Scenario Outline: Unauthenticated User
    Given an unauthenticated user
    And a request to feature <feature>
    When the user submits the request
    Then the request will be denied

Examples:
| feature       |
| "create"      |
| "get_status"  |
| "classify"    |
| "list"        |
| "delete"      |

Scenario Outline: Unauthorized User
    Given an authenticated user
    And a request to feature <feature>
    And the user is not authorized to access the requested pipeline
    When the user submits the request
    Then the request will be denied

Examples:
| feature       |
| "create"      |
| "get_status"  |
| "classify"    |
| "list"        |
| "delete"      |
```


## Creating a Cucumber Runner

Create a new class file: ```src/it/java/com.ibm.watson.bdd.example/ITApp.java```

```java
package com.ibm.watson.bdd.example;
import org.junit.runner.RunWith;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
public class ITApp {
}
```

This class is simple.  There are some other annotations that you can make, such as @CucumberOptions() where you can define which tags this test will run (if you want to setup multiple JUnit runners) or formatting and output locations for reports.

## Running Integration Tests

If using eclipse, you can run ITApp as a JUnit test and you will see the output results.  If you are running maven, you will have to do some extra configuration.  When this is configured you can run via the command line with ```mvn verify``` on the project, you will see a similar console output.
You should realize at this point that we haven't defined any code to implement any of our integration tests yet.  Cucumber has generated stubs that we can use.  We will use those in our next steps.

## Defining Steps

Create a new class file: ```src/it/java/com.ibm.watson.bdd.example/AuthenticationSteps.java```

In this file we will take the stubs and copy them into the source.  You should get some errors about missing imports, fix them and re-run the tests.  This time, JUnit will still be green (unless you are running Cucumber in "strict" mode), but you will see output with TODO warnings about implementing the methods.  If you look at each individual step in the JUnit view, you will see that they are still marked out, so you're not quite done.

Your file should look something like this:

```java
public class AuthenticationSteps {

    @Given("^an unauthenticated user$")
    public void an_unauthenticated_user() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Given("^a request to feature \"(.*?)\"$")
    public void a_request_to_feature(String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @When("^the user submits the request$")
    public void the_user_submits_the_request() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Then("^the request will be denied$")
    public void the_request_will_be_denied() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Given("^an authenticated user$")
    public void an_authenticated_user() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
    @Given("^the user is not authorized to access the requested pipeline$")
    public void the_user_is_not_authorized_to_access_the_requested_pipeline() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

}
```

At this point, you will start to stub out and define behavior for each of these methods.  The example below is one way that you might go about defining/stubbing out these steps.  In practice, take these one step at a time, but for the sake of this example we will stub out most of the details.  If you run this example with JUnit, everything will be green and all of your tests will be passing!  Except, you're still not done - this example is just a simple form of the outline of your behavior.  This is where you start to refactor your code.

```java
public class AuthenticationSteps {
    Pipeline pipeline;
    User user;
    Request request;
    RequestResult result;

    @Before
    public void before(){
        pipeline = new Pipeline();
    }

    @Given("^a request to feature \"(.*?)\"$")
    public void a_request_to_feature(String feature) throws Throwable {
        request = new Request(feature);
    }

    @Given("^the user is not authorized to access the requested pipeline$")
    public void the_user_is_not_authorized_to_access_the_requested_pipeline() throws Throwable {
        assertFalse(pipeline.isAuthorized(user));
    }

    @When("^the user submits the request$")
    public void the_user_submits_the_request() throws Throwable {
        result = request.submit(pipeline, user);
    }
    @Then("^the request will be denied$")
    public void the_request_will_be_denied() throws Throwable {
        assertTrue(result.isDenied());
    }

    @Given("^an unauthenticated user$")
    public void an_unauthenticated_user() throws Throwable {
        user = new User();
    }

    @Given("^an authenticated user$")
    public void an_authenticated_user() throws Throwable {
        user = new User();
        user.authenicate();
    }

    class Pipeline {

        boolean isAuthorized(User user){
            return false;
        }

    }
    class User {
        boolean authenticated = false;

        public void authenicate(){
            authenticated = true;
        }
        public boolean isAuthenticated() {
            return authenticated;
        }

    }
    class Request {
        String feature;

        public Request(String feature){
            this.feature = feature;
        }

        public RequestResult submit(Pipeline pipeline, User user){
            return new RequestResult();
        }
    }
    class RequestResult {

        boolean isDenied(){
            return true;
        }
    }

}
```

## Refactor & Iterate

At this point, you would start to refactor and move out things that should exist in actual application logic.  Things like Pipeline and User might be moved into their own classes in src/main/java and the implementation of the methods would be filled in.  Maybe Request and RequestResult are switched over to a standard REST framework (such as REST Assured, Apache Wink, or Apache HTTP Client) and those details get filled in.  You will continue to break code by filling in implementation details, the tests will fail, then you will fix them and turn the tests green again.  Try to keep thing simple and move one method or behavior at a time.  Iterate over these details until your integration test and application details are fully e-mailed.

## What happens when you want to share common steps?

Now we're going to introduce another wrinkle into this - we have another feature or set of features and they all want to authenticate a user and be able to send out requests.  It doesn't make sense to keep all of these items in AuthenticationSteps - since they're shared.  What are some potential solutions?

Abstract Class - if we have a bunch of API requests that are going to be using Users, Requests, RequestResults, and Pipelines, maybe we refactor AuthenticationSteps to be AbstractApiSteps.  Then we have unique API steps (for example create, get, delete, update) and each of those is an extension of this class.  What happens?  Cucumber won't allow this, because when it finds the steps for "Given an authenticated user" or "When the user submits the request" as examples, the Cucumber Container won't know which instance to use (create, get, delete, update?) and will throw an error, since each of those instances technically has a mapping for that step.

Dependency and Delegation (Manually) - You could define singleton classes or factory/registry objects for tracking between steps so that you know that objects are being passed between functions the way you intend.  This would be akin to what is below.  Then, suddenly you're finding yourself coding up registries and factories for each of your objects.  You also have to deal with thread safety - what happens when Cucumber is running multiple scenarios at once?  What other bugs might pop up in your code?  How are you going to handle configuration?

```java
public class CommonObject {
    static CommonObject getInstance(Context context){ ... }
}

public class Steps1 {
   CommonObject common;

   public Steps2(){
      common = CommonObject.getInstance(someScenarioContext);
   }

    @When("^the first thing happens$")
    public void the_first_thing_happens(){
          doSomething(common);
    }

}

public class Steps2 {
   CommonObject common;

   public Steps2(){
      common = CommonObject.getInstance(someScenarioContext);
   }

    @When("^the other thing happens$")
    public void the_other_thing_happens(){
          doSomethingElse(common);
    }

}
```

Dependency Injection - We're going to change things over to using Google Guice as our dependency injection framework (it was set to use Pico Container in a previous version of this wiki, double check that your Maven pom.xml reflects the dependencies listed above).  Cucumber already knows how to handle Dependency Injection and it's actually a pretty decent pattern and development practice to use - and will make designing for tests a little easier with less code to get up and running.

```java
public class CommonObject {
    ....
}

@ScenarioScoped <-- This means that Steps1 will have a new instance created for each Scenario that gets run
public class Steps1 {
   @Inject CommonObject common;

   @When("^the first thing happens$")
    public void the_first_thing_happens(){
          doSomething(common);
    }

}

@Singleton <-- This means that Steps2 will have one instance created that is shared during EVERY scenario run
public class Steps2 {
   CommonObject common;

   @Inject
   public Steps2(CommonObject common){
      common = CommonObject.getInstance(someScenarioContext);
   }

    @When("^the other thing happens$")
    public void the_other_thing_happens(){
          doSomethingElse(common);
    }

}
```

This is essentially two different ways of doing the same thing, minus the @ScenarioScoped and @Singleton annotations on the classes.  What the DI (Dependency Injection) container will do here is pass or create an instance of CommonObject.  The objects are scoped and handled for you.  On the Step classes, if you don't supply an annotation, it will assume that for each test step (i.e. "When the first thing happens", "When the other thing happens") a new instance of the class containing the steps should be created.

If you are trying to share state between calls to steps in the same class, this can be problematic:

```java
public class BadSteps {
  @Inject CommonObject common;   <--- Let's assume that a new CommonObject has a field name, with a default value of "old name"

@When("^update common object$")
    public void update_common_object(){
          assertEquals(common.getName(), "old name");  <!-- remember, we're assuming this is true
          common.setName("new name");  <--- the state will be updated on this CommonObject
    }
@Then("^check common object was updated properly$")
    public void check_common_object_was_updated_properly(){
         assertEquals(common.getName(), "new name");  <--- this will actually be a completely new CommonObject and won't be true, because the state was only set on the previously used CommonObject
    }

}
```

If you can keep the scope of the objects in mind, you shouldn't have problems running within the framework and you'll have a better understanding of the states your tests are in.

---

### Best Practices


Keeping Sanity
- Use annotations to restrict trying to create/define the steps of one feature at a time (based on tags)
- Use tags in your feature files
...
Steps/Glue Code & DRY
Organize your steps in an OO fashion - this is made much simpler by using the DI framework listed above
Ex: you have Create, Update, Delete, List features
All features have "request" related actions to an API
Pull those "request" related actions into a RequestSteps class
You might find step definitions (i.e. "the user requests a pipeline" and "the user asks for a pipeline") that show up in different feature files, but should be collapsed into a single definition and action
Abstraction & YAGNI
Start with stubs, only code the MINIMUM possible needed
Don't get ahead of yourself and try to start refactoring anticipating what is coming
You will start to see common themes - avoid Analysis Paralysis
Refactor based on those themes and code smells
By keeping things OO and high level, you will see what is needed across all iterations of your testing (i.e. Network [REST Assured] or UI [Selenium]) that might be describing the SAME behavior
Start filling in implementation details around those shells and turn things that need multiple variations into Interfaces or Abstract Classes

## Dependency Injection and Abstraction - How to Design for Test and maximum Reusability

If you follow the best practices, eventually you might get to a point where you need to support multiple ways of running integration tests or even have an application that needs to support some level of abstraction.  Let's take the User class that we had defined earlier and use that as an example.  We're going to add some credentials to the user while we're at it.

```java
public class User {
        String userId;
        String password;

        public User(String userId, String password){
            this.userId = userId;
            this.password = password;
        }

        boolean authenticated = false;

        public void authenicate(){
            authenticated = true;
        }
        public boolean isAuthenticated() {
            return authenticated;
        }

 }
```

This works fine for a stubbed out test.  But, what if something actually needs to happen during the authentication process?  One such way to deal with this is doing the following:

```java
public abstract class User {
        ....

        public void authenicate() throws Throwable{
            authenticateInner();
            authenticated = true;
        }

        public abstract void authenticateInner() throws Throwable;
        ....

 }
```

What sort of impact does this have steps we previously defined?  For one, we now have to have a concrete implementation of User that wasn't necessary before.  We also have to deal with updating our step definitions to support things.  Let's take for example that we want to be able to support using a Dummy implementation and some Remote request implementation for handling user authentication.

```java
public class DummyUser {
      public DummyUser(String userId, String password){
            super(userId, password);
      }

      @Override
      public void authenticateInner() throws Throwable {

      }
}

public class RemoteUser {
      public RemoteUser(String userId, String password){
            super(userId, password);
      }

      @Override
      public void authenticateInner() throws Throwable {
            submitRemoteAuthRequest(user, password);  // <-- this will be implementation specific
      }
}
```

So now we have to deal with our step definitions.  If we were using @Inject annotations next to User instances, you're going to get a complaint that nothing is being mapped to a User.  You also don't want to have to write in logic for switching between which user type you want to use in every step definition file where you're using a User.  How do you get around this without having to write a bunch of code for explicitly handling things?  The most flexible way is to take advantage of Guice's Assisted Injection - the short story is that you can create factories without explicitly having to write factory code and everything will be auto wired together at runtime.

To do that, you will have to create a factory interface:

```java
public interface UserFactory {

  public User create(@Assisted("userId") String userId, @Assisted("password") String password) throws Throwable;

}
```

The reason the @Assisted annotations are needed in the factory is because you have two arguments that are of the same type.  If you had different argument types or only one String in the constructor, you wouldn't need the annotation.  You also have the ability to take injected elements in a constructor that aren't part of the factory's create method.  Now make the following modifications to your user classes so that they can be wired together:

```java
public class DummyUser {
      public DummyUser(@Assisted("userId") String userId, @Assisted("password") String password){
            super(userId, password);
      }

      @Override
      public void authenticateInner() throws Throwable {

      }
}

public class RemoteUser {
      public RemoteUser(@Assisted("userId") String userId, @Assisted("password") String password){
            super(userId, password);
      }

      @Override
      public void authenticateInner() throws Throwable {
            submitRemoteAuthRequest(user, password);  // <-- this will be implementation specific
      }
}
```

Now, you can continue to use "@Inject User user" in code and all you have to do is configure the factory, which is shown below:

```java
public class ExampleDummyModule extends AbstractModule {
    @Override
    protected void configure() {
        install(new FactoryModuleBuilder().implement(User.class, DummyUser.class).build(UserFactory.class));
        bind(User.class).toInstance(new DummyUser("",""));  // <- this will map the instance to "@Inject User user" where a factory isn't used
    }

// You will also want to create another Module for your Remote instances

}
public class ExampleInjectionSource implements InjectorSource {
    @Override
    public Injector getInjector() {
        return Guice.createInjector(Stage.PRODUCTION, CucumberModules.SCENARIO, new ExampleDummyModule());  //if you want to switch between Dummy and Remote you can configure the injector here

    }
}
```

You will also need a file "src/it/resources/cucumber-guice.properties" with the contents "guice.injector-source=package.that.contains.ExampleInjectionSource"
If you want to explicitly use the factory to create new instances of something in your code, you can do the following:

```java
    @Inject UserFactory userFactory;
    @Given("^a user$")
    public void a_user_that_is_not_authorized_to_that_pipeline() throws Throwable {
        user = userFactory.create("non-accessable", "good password");
    }
```

Using these methods, you can follow the BDD principles to create only what needs to be created.  Once you have reached a point that something needs to be done, that is when you make the change and abstract out the logic via Interfaces or Abstract Classes.  It will prevent you from over-generalizing too soon and potentially creating code that isn't necessary.  Now you have flexibility in how you want to run your integration tests without having to explicitly change step definition code to match a specific implementation.
You can find more details on using Google Guice and Dependency Injection online.  These are some of the basic principles that will allow you to get through the majority of the problems you will encounter.
