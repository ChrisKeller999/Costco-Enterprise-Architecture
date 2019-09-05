---
title: Java Coding Style Guide
breadcrumb: Java Coding Style
sidebar: dev
---
### Deprecated...

Please note that most teams have moved to using the style guides maintained by Google, they can be found [here](../index).

### Introduction

Before we start, we must recognize that this style guide is largely the work of the Watson Explorer team and has been adapted with their kind consent. This is a living document, you may want to follow this page as we revise and improve this page.

This page documents the Java coding style and formatting used on all Java projects. Coding conventions are important for many reasons. The [Oracle Code Conventions For Java](http://www.oracle.com/technetwork/java/codeconventions-139411.html#16712){:target="_blank"} lists some of the reasons:

- 80% of the lifetime cost of a piece of software goes to maintenance.
- Hardly any software is maintained for its whole life by the original author.
- Code conventions improve the readability of the software, allowing engineers to - understand new code more quickly and thoroughly.
- If you ship your source code as a product, you need to make sure it is as well packaged and clean as any other product you create.

### Ground Rules

1. By far, the most important standard is to **write readable code**. The rules documented on this page are NOT hard-and-fast rules. If breaking a convention results in more readable code which better expresses its intent, then by all means, break the convention.
2. Some of the conventions in this document must be strictly followed (sometimes for legal reasons). Such rules contain the word **MUST** in their description.
3. Don't break a convention without a good reason for doing so (and as strongly hinted above, breaking a convention for code readability is a good reason). A convention is only good if it is used in the majority of the code written.

> **PROTIP**: Writing readable, expressive code is more important than conforming to a standard or convention.

### Eclipse Formatter

Eclipse Java editor can perform automatic formatting of code according to defined rules.
Suggested settings can be downloaded from [watson.formatter.xml](https://github.ibm.com/the-playbook/the-playbook.github.ibm.com/blob/develop/pages/developer-guide/eclipse-config/watson.formatter.xml){:target="_blank"} (Right click the `Raw` button -> Save as...). The file can be imported in Eclipse preferences > Java > Code Style > Formatter page, and then this profile can be selected as active profile.
The Java code can then be formatted by using menu Source > Format, or with associated hot key (Ctrl-Shift-F by default).

### Eclipse Code Cleanup

Eclipse editor can also perform some code cleanup, which can perform some routine operations like removal unnecessary imports or local variables or adding 'final' keyword for variables which are not changed locally.
Suggested settings can be downloaded from [watson.cleanup.xml](https://github.ibm.com/the-playbook/the-playbook.github.ibm.com/blob/develop/pages/developer-guide/eclipse-config/watson.cleanup.xml){:target="_blank"} (Right click the `Raw` button -> Save as...). The file can be imported in Eclipse preferences > Java > Code Style > Clean Up page, and then this profile can be selected as active profile.
The Java code can then be cleaned by using menu Source > Clean Up...

### Eclipse Code templates

All Watson code should include copyright statements. To simplify this routine process, code templates can be used.
To use templates download settings from [watson.codetemplates.xml](https://github.ibm.com/the-playbook/the-playbook.github.ibm.com/blob/develop/pages/developer-guide/eclipse-config/watson.codetemplates.xml){:target="_blank"} (Right click the `Raw` button -> Save as...), import it in Eclipse preferences > Java > Code Style > Code Templates and enable automatic adding of comments for new files at the bottom of the same preference page.

> PROTIP: Sometimes code can be formatted manually better than it can be formatted using the Eclipse formatter. To prevent the Eclipse formatter from reformatting a region of code, surround the code with:

```java
/* @formatter:off */
 //... your specially formatted code ...
/* @formatter:on */
```


## Conventions and Standards

### Oracle Coding Conventions

Unless otherwise stated in this document, Watson follows the [Oracle Coding Conventions for the Java Programming Language](http://www.oracle.com/technetwork/java/codeconvtoc-136057.html){:target="_blank"}.

### Source Code Headers

Java source files (.java)
All Java source code files **MUST** have a copyright header using the following format.

``` java
/* BEGIN_COPYRIGHT
 *
 * IBM Confidential
 * OCO Source Materials
 *
 * <product code, get this from your product's IP Laywer>
 * (C) Copyright IBM Corp. YEAR1, YEAR2 All Rights Reserved.
 *
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has been
 * deposited with the U.S. Copyright Office.
 *
 * END_COPYRIGHT
 */
```

From the official [IBM Copyright Corporate Standards doc](https://w3-03.ibm.com/standards/esisstds.nsf/E5FD60876972962585256999004E8A0C/%24File/06045002.pdf){:target="_blank"}

> YEAR1, YEAR2 above should be replaced with (YEAR1 - must be GA for the original release and must be retained throughout the life of making the service available. YEAR2 is the year of the first external distribution of the latest substantial changes made in a module in either a source or object form. In the first delivery of a new module such as with now for WVA, only YEAR1 is used. YEAR2 is added to the copyright notice of a module when the module has been changed substantially and released in a year later than YEAR1. After that YEAR2 is changed again when further changes are made.

**Check with your team for the correct YEAR1 date for your copyright statements.**

### Property files (.properties)

All property files **MUST** have the following header (which follows the same rules used for Java source files.).

``` java
### (C) Copyright IBM Corporation YEAR1, ${year}
### All rights reserved
```

### Other source code files

If possible, similar headers should be present on other types of source code files. The header should appear at the top of the file, and should use the comment characters appropriate for the source code file.

### Indentation

As per the Oracle standard, **four spaces** should be used as the unit of indentation.
**Tab characters should not be used**.

### Line Length

The Oracle standard suggests the maximum line length should be 80 characters. However, in many cases, it is difficult to write readable Java code in 80 characters on a single line. As such, a maximum line length of 120 characters is also acceptable (and is the default line length used by the Eclipse Code Style settings).

### Tips:

In eclipse,
- go Preferences -> General -> Editors -> Text Editors -> check Show Print margin, and enter 80 in Print margin column.
- go Preferences -> Java -> Code Style -> Formatter -> Edit... -> go Line Wrapping -> Maximum Line width -> enter 90.
The setting above will show a soft line for 80, and hard wrap for 90.

### Naming Conventions

In addition to the naming conventions suggested by Oracle, the following naming conventions should be used.

> **PROTIP**: If you find you are struggling with naming a class or method, look to the standard Java API documentation (Javadoc) for inspiration

### Classes

- Avoid the "Impl" suffix naming convention for classes which implement an interface. Instead, use a name that better describes how the class implements the interface. For example, a class which uses JAX-WS to implement a ```WebService``` interface might be named ```JaxWsWebService```.
- Only capitalize the first character of an abbreviation. For example, use ```XmlEditor``` instead of ```XMLEditor```. Using camel-case in this way results in class names which are far easier to read.

### Interfaces

- Do not prefix interfaces with a capital "I". Instead, use a noun which the phrase "X is-a <interface-name>" makes sense for all implementations of the interface. For example, don't use ```ICar``` for a web service interface. A better name would be ```Vehicle```. Some implementations of the ```Vehicle``` interface might be called ```Car``` (a Car is-a Vehicle), ```Truck``` (a truck is-a Vehicle), or ```Van``` (a Van is-a Vehicle).

> **PROTIP**: The "I" naming convention is discouraged for several reasons:
> - From the consumer of a class/interface, it is rarely important to know whether or not a type is a class or an interface.
> - Using the "I" convention breaks the illusion of polymorphism. This can easily be seen when trying to form is-a sentences ("Car is-a IVehicle" makes much less sense than "Car is-a Vehicle").
> - Modern development tools (including Eclipse) are capable of identifying interfaces from classes quickly and easily.

### Methods

- Only capitalize the first character of an abbreviation. For example, use ```convertToXmlString``` instead of ```convertToXMLString```. Using camel-case in this way results in method names which are far easier to read.
- Follow the JavaBeans specification for naming property accessor and mutator methods (getXXX for accessors, and setXXX for mutators).

### Variables

- Don't use Hungarian Notation. As with the interface "I" prefix, modern development tools make such notations obsolete.
- Abbreviating variable names is acceptable.
    - Don't use single-letter abbreviations.

### Constants

- For XML use the C XML convention that we have used in Velocity:
    - Tags: ```<TAG_NAME>```_TAG
    - Attributes: ```<TAG_NAME>_<ATTR_NAME>```_ATTR
    - Attribute values: ```<TAG_NAME>_<ATTR_NAME>_<VALUE>```
    - . and - are replaced with _
- Example: if you have ```<a b="c"\/>``` you should define:

``` java
public static final String A_TAG = "a";
public static final String A_B_ATTR = "b";
public static final String A_B_C = "c";
```

### Private Fields

- Use standard variable naming conventions for private fields and properties. Don't prefix private fields with an underscore ("_")
- Similarly, don't use the "m_" or "s_" naming conventions.

### Java collection variable names

- When naming variables which reference a Java collection, use names which describe how and what data is stored in the collection. The following table contains some suggestions and examples by collection type.


| Collection Type	| Naming Convention	| Examples |
| ------------- |-------------| -----|
| Arrays and Lists | Use a plural noun. | ```String[] urls = new String[3];``` ```List<SearchResult> results = new LinkedList<SearchResult>();``` |
| Maps | Use the format ```<value>By<key>```, where both ```<value> and <key>``` are nouns. Alternatively, use ```<key>To<value>```. | ```Map<String, SearchResult> resultsByTerm = new HashMap<String, SearchResult();``` ```Map<String, SearchResult> termsToResults = new HashMap<String, SearchResult();``` |
| Sets | Use a plural noun. Optionally use "unique" as a prefix. | ```Set<String> uniqueNames = new HashSet<String>();``` |

## Further Resources

[Growing Object-Oriented Software, Guided by Tests](https://www.safaribooksonline.com/library/view/growing-object-oriented-software/9780321574442/){:target="_blank"}
Contains a worked example of Test Driven Design in Java for a larger bit of software that interacts using Swing and network connections. Great example of OO design and TDD by guys that have developed software for a long time using these techniques. Shows the progression of code and thought process that you would go through (including dead ends), not just the beginning and end states.

[XUnit Test Patterns](https://www.safaribooksonline.com/library/view/xunit-test-patterns/9780131495050/){:target="_blank"}
Classical patterns book, split into two main sections. The first section gives an effective introduction to important aspects of testing such as the goals of testing, test smells, how to improve tests, what clean tests look like, etc.. The second section has named patterns that facilitate discussion and explain when a given pattern is appropriate.

[Working Effectively with Legacy Code](https://www.safaribooksonline.com/library/view/working-effectively-with/0131177052/){:target="_blank"}
Invaluable reference for dealing with existing code that is untested or undertested. This code is often not designed with testability and maintainability in mind, which means adding tests or making improvements after the fact is very complicated and has many opportunities to break in subtle ways. The book contains effective techniques on how to safely get tests around code before modification. Jake uses this as his Bible when he gets frustrated with code.

[Refactoring: Improving the Design of Existing Code](https://www.safaribooksonline.com/library/view/refactoring-improving-the/0201485672/){:target="_blank"}
Defines the term "refactoring", which isn't just a synonym for "changing code" but is about improving the design of code without changing behavior. This is another patterns book, with a discussion of what refactoring is and how it improves the design of your code, followed by recipes for specific refactorings. While many of these are built into tools like Eclipse, it is important to understand why a given refactoring will help you achieve your design goals.

[Design Patterns: Elements of Reusable Object-Oriented Software](https://www.safaribooksonline.com/library/view/design-patterns-elements/0201633612/){:target="_blank"}
The original software patterns book. As expected, it starts with a case study of where patterns could be applied, and follows with a catalog of patterns. These patterns are invaluable for communicating with software development peers and leveraging existing structure without reinventing the wheel.

[Clean Code: A Handbook of Agile Software Craftsmanship](https://www.safaribooksonline.com/library/view/clean-code/9780136083238/){:target="_blank"}
Bad code can work, but maintaining it results in wasted time that only increases with each release; you can work faster by working well. Contains practices that any professional developer should be aware of to create clean, maintainable code that can be expanded on and worked with. Includes code reading and worked examples for these concepts. Covers many aspects of development such as naming, method and class design, comments, and testing. These practices have been collected from multiple professionals over many decades.


### Delivering changes

- As much as possible, deliver small change sets focused on one thing.  This makes the job of reviewers much easier.
- Keep in mind that your change set could be picked up and tested by a Continuous Integration build.  Deliver dependent changes as a group, and either tolerate missing external resources, or ensure they exist before delivering your changes.
- Deliver style-only changes and refactoring separately from other changes.

### Unit Test Conventions and Standards

A unit test is intended to verify a single unit of functionality in isolation. Other types of tests exist and can be written in the JUnit framework. However, those test classes should be in an 'itest' package and can be executed via the maven, 'verify' goal.

Writing expressive code is very important when writing unit tests. Expressive unit tests are more valuable in the long run because:

- Expressiveness helps unit tests to serve as a form of code documentation.
- Makes it easier to understand what a test is testing (when it fails).
- Makes maintaining unit tests easier.

As such, we suggest using a unit testing style which "breaks" some of the standard Java conventions in favor more expressive code. This section documents that unit testing style. All of these conventions assume JUnit 4 is being used.

> **PROTIP**: Unit test code is different from production code. It has different needs and requirements. Using a distinct style for unit tests helps to "shift" your thinking when you are working with the tests.

### Test Classes

- Append "Test" to every class which contains JUnit tests ("CrawlerTest").
- Generally, create at least one test class per production class ("ShapeTest" for the "Shape" class, "CarTest" for the "Car" class, etc).
    - If the test class becomes large, break the tests into separate classes.
    - Use the format ```<ClassName>_<TestDescription>Test``` for naming such tests, where ```<className>``` is the name of the class the tests are for, and ```TestDescription``` is some description of what makes the tests in the test class different from tests in the other test classes.
    - Examples:
        - ```CarTest```
        - ```Car_HandlesNullsTest```
        - ```Apple_WhenRottenTest```
        - ```Apple_WhenFreshTest```

### Test Method Names and Signatures

- Use ```snake_case``` instead of ```CamelCase```. ```snake_case``` is easier to read when reviewing unit test results (both in the Eclipse JUnit window, Maven SureFire Test reports, and from the command-line).
- Don't start test method names the word "test" (as of JUnit 4, this is redundant).
- If a test is to validate a particular defect hasn't regressed, use the defect ID in the test class name, method name or the descriptive string passed to AssertXXX()
- Try to make the method name read like a valid sentence. It is okay for test method names to be long.
- Describe the desired result and the behavior/input which should lead to the desired result in the test name.
- Use the format ```<expected_result>__when_<condition>``` (note the double-underscore between <```expected_result``` and ```when```), where ```<expected_result>``` is the common result the methods test for, and ```<condition>``` is a description of the condition which should generate the expected result. This format is particularly useful when multiple test methods test for the same result.
- Always throw ```Exception```.
Examples:

``` java
@Test public void turns_red__when_the_apple_ripens() throws Exception
@Test public void enqueues_a_group__when_only_one_group_exists() throws Exception
@Test public void enqueues_all_groups__when_multiple_groups_exist() throws Exception
```

### Test Tips

- Should avoid random when writing test, should have control on the test.
- Running a test once vs. N times is not important, which means don't run a test N times.
- Don't rely on JUnit to run your tests in any particular order, it won't.
- Assert only one thing per test method.

### Behavior-Based Test Methods (using BDD / Gherkin patterns)

- For all but the most basic tests, don't put all of the test code in the test method itself. Instead, create *given*, *when*, and *then* methods (named using snake_case)
    - **Given methods**
        - The given method name should describe the state of the system (or class) *before* the test executes (aka, this is the precondition).
        - Often, the setup code that usually goes in an ```@Before``` method will end up in the given methods.
    - **When methods**
        - The when method name should describe the action that is taken to trigger the test.
    - **Then methods**
        - The then method name should describe the desired result of the behavior described by the when method.
    - **All assertions** should be contained in then methods.
- Pass data which is specific for each test as parameters to the ```given```, ```when```, and ```then``` methods.
- Use [Hamcrest-style assertions](https://github.com/junit-team/junit4/wiki/assertions){:target="_blank"} rather than the traditional JUnit assertion methods.
- List the ```@Test``` methods before the given-when-then methods in the test class.
- List the ```given``` methods before the ```when``` methods, and list the ```when``` methods before the ```then``` methods.

> ***PROTIP***: You will find that using the GIVEN-WHEN-THEN method pattern will create a composible set of methods which you can use to build new tests. Using this approach can greatly increase the speed in which you can write new tests, without duplicating a lot of code.

Below is an example that illustrates Behavior Based Test Methods. Note that the asserts include a String that will be printed if the test fails.

```java
public class MoviePricerTest {
  private MoviePricer pricer;

  @Before
  public void setUp() {
    pricer = new MoviePricer();
  }

  @Test
  public void should_buy_general_admission_ticket() {
    GIVEN.i_want_to_watch_a_general_movie();
    WHEN.i_purchase_a_ticket();
    THEN.the_final_price_should_be(11);
  }

  @Test
  public void should_buy_one_student_ticket() {
    GIVEN.i_want_to_watch_a_general_movie();
    WHEN.i_purchase_a_student_ticket();
    THEN.the_final_price_should_be(8);
  }

  private void i_want_to_watch_a_general_movie() {
    pricer.startPurchase(119, Day.MON, true, false);
  }

  private void i_purchase_a_ticket() {
    pricer.addTicket(35, false);
  }

  private void i_purchase_a_student_ticket() {
    pricer.addTicket(35, true);
  }

  private void the_final_price_should_be(float i) {
    float finalPrice = pricer.finishPurchase();
    assertThat(String.format("The final price %d should be equal to %d", finalPrice, i),
                     finalPrice, is(equalTo(i)));
  }

  private MoviePricerTest GIVEN = this, WHEN = this, THEN = this, AND = this, WITH = this;
}
```

### Mocks, Stubs and Fakes ...oh my!

A unit test should be limited in scope of execution, but the code under test may rely on databases, web servers, search engines, etc. The interface under test can be isolated by disabling behaviors or pretending that a resource exists. This is often done by employing mocks, stubs and fakes. Mocks stubs and fakes are all kinds of test double.

Employing test doubles when coding unit tests enables the test to achieve that level of isolation that will

- Fast execution
- Expectations can be expressed in each test case increasing code readability
- Easy clean up after each test and/or test suite - no external systems to reload/reset/reconfigure/restore/...etc.
- Reduce the scope of causes for test failure to the code under test and/or the test
- Isolated tests can be run in parallel

Cons to test doubles approach:

- It can be a lot of work to set up the test doubles to effectively isolate complex tests. (This is a code smell. You should ask yourself if the design could be improved so that your system under test does not depend on as many collaborators.)
- It's not always easy to find the points to isolate (this also points to a design problem in the code under test).
- Code coverage scores are reduced when the only code that is run as part of a test is the code that is verified by the test.
- Additional work to create a separate suite of integration tests.

Recommended further reading:
- [Growing Object-Oriented Software Guided by Tests - Steve Freeman and Nat Pryce](http://www.growing-object-oriented-software.com/){:target="_blank"}
- [XUnit Test Patterns: Refactoring Test Code - Gerard Meszaros](http://xunitpatterns.com/){:target="_blank"}

Recommended articles:
- [Mocks Aren't Stubs - Martin Fowler](http://martinfowler.com/articles/mocksArentStubs.html){:target="_blank"}
- [Mocks, Fakes, Stubs and Dummies - Gerard - Meszaros](http://xunitpatterns.com/Mocks,%20Fakes,%20Stubs%20and%20Dummies.html){:target="_blank"}
- [Mock Roles, Not Objects - Steve Freeman, Nat Pryce, et al.](http://www.jmock.org/oopsla2004.pdf){:target="_blank"}
- [Hexagonal Architecture - Alistair Cockburn](http://alistair.cockburn.us/Hexagonal+architecture){:target="_blank"}
- [Principles of Object Oriented Design (The SOLID Principles) - "Uncle Bob" Martin](http://butunclebob.com/ArticleS.UncleBob.PrinciplesOfOod){:target="_blank"}

Recommended viewing:
- [Why You Don't Get Mock Objects - Gregory Moeck](http://www.confreaks.com/videos/659-rubyconf2011-why-you-don-t-get-mock-objects){:target="_blank"}
- [The Deep Synergy Between Testability and Good Design - Michael Feathers](http://www.youtube.com/watch?v=4cVZvoFGJTU){:target="_blank"}
- [The Magic Tricks of Testing - Sandi Metz](http://www.justin.tv/confreaks/c/2247122){:target="_blank"}

### Unit tests vs. Integration Tests

Unit tests and integration tests are intended to test behavior at different levels. Unit tests assert the correctness of small, focused parts of a system, such as a class. Integration tests focus on testing that behavior is correct across the larger system. Both are important for different reasons, and testing should be considered incomplete without both types. However, they should only be used on their appropriate levels.

When we discuss 'unit tests', the important aspect is that we are showing correctness of our [SUT's (system under test)](http://xunitpatterns.com/SUT.html){:target="_blank"} behavior by isolating it from any collaborators it may have in the system. These collaborators could be such things as other objects in our domain that have behavior, or they could be external systems such as Velocity, the file system, the system clock, user input devices, etc.

By doing this, we know that the only source of potential issues is our SUT, since we are replacing all of the other behavior in the process with our pre-defined [test doubles](http://xunitpatterns.com/Test%20Double.html){:target="_blank"}. Our SUT can send messages to its [mocked](http://xunitpatterns.com/Mock%20Object.html){:target="_blank"} collaborators and assume that they will operate perfectly (since the actual implementations are tested elsewhere). This is also the reason that dependency injection becomes important in our testing approach. If an object has dependent collaborators that are hidden in its implementation, then we cannot replace them in our tests, and the design lessens our ability to test these objects well in isolation. This is 'overcoupling', when our object has too much dependency on the implementation of other objects. By replacing dependencies on the concrete implementations of a class with a reference to an interface in Java or via duck typing in Ruby, we remove this coupling.

Value types do not have to be mocked in unit tests. Since true value types have no behavior, they cannot be the cause of behavioral issues in our tests. Of course this does not prevent the possibility that our SUT is interacting incorrectly with the value type. That, however, is an incorrect behavior in our SUT. This is similar to the notion that we should not be attempting to directly test private methods of our object. We should see the behaviors that we desire come about in our public interactions with the SUT, and our testing should also follow this approach. This allows the object to encapsulate its implementation details so that we are not dependent on its specific implementation.

Integration tests are any tests where you want to test behavior that involves more than one object with behavior. This includes any external resource. In this case, we should not have _any_ mocks in our test.

When should you have tests such as these if you could just test things at a unit level? Mocks enable us to assume that the collaborators' behavior is exactly as our SUT needs. Since we cannot change (and therefore cannot improve) the behavior of external systems such as the file system API or the input API (and to some extent the Velocity API), it is not appropriate to mock/stub them out in our tests. We should be using real data in place.

The ["ports and adapters" / "hexagonal architecture"](http://alistair.cockburn.us/Hexagonal+architecture){:target="_blank"} concepts help here. If we make adapters for all of our external resources, then we must only perform integration tests at that layer. Our adapter should be providing an abstraction that is appropriate to how our domain objects need to interact with the external system. This might mean that the same external system is actually exposed to our domain objects via more than one adapter, if this makes the abstractions more appropriate. An important realization to make is that even such resources as the system clock can be abstracted away in this approach. In this case, a generic clock interface is provided to suit the domain's needs, and the default can be the system clock. However, to do isolated unit testing, a test double can be provided with a [fake](http://xunitpatterns.com/Fake%20Object.html){:target="_blank"} implementation of the clock logic. Then, tests can perform thread sleep logic, time-limited functions, and other related behaviors without actually having to wait for the wall clock time to elapse. The test double can simply tell the SUT that the time has immediately progressed as necessary for the tested behavior to be triggered.

Generally, for new functionality, a high-level integration test should be written that attempts to use the full system and fails in an informative way. Then, the behavior necessary to accomplish that functionality should be built using unit tested additions to the design. Further integration tests will be necessary if external resources are needed, but should preferably only be necessary at an adapter level. Once enough unit-tested behavior has been added that the high-level integration test passes, then that aspect of feature should be complete.

If integration tests are being added to test domain logic further and further into the system, that may be a sign of a leaky abstraction in our adapter level. Our domain logic is likely too tied to how the external system is implemented. If our design can be improved so that our abstraction of that external system is better suited to our domain, then that should be preferred over creating more and more heavy-weight, less focused integration tests.

### Fixtures

A fixture is a class that will initialize a set of resources common to a number of tests and/or test suites.

Recommended further reading - [JUnit FAQ ### 15](http://junit.sourceforge.net/doc/faq/faq.htm#tests_15){:target="_blank"} and [Simple Smalltalk Testing, Kent Beck](http://www.xprogramming.com/testfram.htm){:target="_blank"}

### Tests with threads

The first answer to the question, 'How do I add threads to my unit tests?' is 'Don't do it.' Because much of CXO relies on activities and activities are very concurrent there are unit tests in our code base that use threads. If you must use threads then use the ThreadFactory fixture as shown below. This fixture will ensure that all threads launched by the test are resolved before completing the test suite.


```java
public class SleepingOrphanTest {

    protected static ThreadFactory tfactory = new ThreadFactory();

    @BeforeClass
    public static void setup() {
        tfactory.setup(SleepingOrphanTest.class);
    }

    @Test
    public void runRipVanWinkleThread() {
        Thread t = tfactory.newThread(new Runnable() {
            public void run() {
                try {
                    while (true) {
                        Thread.sleep(1000);
                        System.out.println("Zzzz....");
                    }
                } catch (InterruptedException ie) {
                    throw new RuntimeException(ie);
                }
            }
        }, "Rip Van Winkle");
        t.start();
        try {
            t.join(3000);
        } catch (InterruptedException ie) {
            assertTrue(ie.getLocalizedMessage(), false);
        }
    }

   @Test
   public void runThreadSpawningClass(){

     Thread t = tfactory.newThread(new Runnable() {
            public void run() {
                ThreadSpawningThing thing = new ThreadSpawningThing();
                 thing.doStuff();
                 assertTrue( "Some stuff happened.", thing.stuffHappened() );
            }
        }, "Spawning Thing Test");
        t.start();
       assertTrue( "Spawned Threads that do stuff", SpawningThing.runningServiceThreadsCount() > 0 );
       t.join(10);  //wait for the test thread to complete otherwise the test will likely never happen.
   }

    @AfterClass
    public static void teardown() {
        tfactory.teardown();
    }

```

The above code is a test case that uses the ThreadFactory fixture to create a thread around the Runnable object needed for this test. The first test, Rip Van Winkle, starts a thread that will continue to run after the test completes. When the suite is complete the JUnit framework will call the teardown method and in turn call the teardown for the Thread fixture. This will attempt to shutdown every thread that was started by the test. The second test starts a thread to run a class that spawns threads, apparently daemon threads as they persist beyond the scope of the object itself. These threads will also be cleaned up by the fixture because they were launched by a thread created by the fixture. If any of these threads fail to shutdown in the teardown method an Assert is raised failing the suite with a stack trace for any threads still running.

### Other Recommendations

- Read [Effective Java by Joshua Bloch](https://www.safaribooksonline.com/library/view/effective-java-2nd/9780137150021/){:target="_blank"}
