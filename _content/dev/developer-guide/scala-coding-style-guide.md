---
title: Scala Coding Style Guide
breadcrumb: Scala Style Guide
sidebar: dev
---

## Introduction

This is a living document, you may want to follow this page as we revise and improve this page.

This wiki page documents the Scala coding style and formatting used on Scala projects. Coding conventions are important for many reasons. The [Oracle Code Conventions For Java](http://www.oracle.com/technetwork/java/codeconventions-139411.html#16712){:target="_blank"} lists some of the reasons:

- 80% of the lifetime cost of a piece of software goes to maintenance.
- Hardly any software is maintained for its whole life by the original author.
- Code conventions improve the readability of the software, allowing engineers to understand new code more quickly and thoroughly.
- If you ship your source code as a product, you need to make sure it is as well packaged and clean as any other product you create.

## Ground Rules

1. By far, the most important standard is to **write readable code**. The rules documented on this page are *NOT* hard-and-fast rules. If breaking a convention results in more readable code which better expresses its intent, then by all means, break the convention.

2. Some of the conventions in this document must be strictly followed (sometimes for legal reasons). Such rules contain the word ***MUST*** in their description.

3. Don't break a convention without a good reason for doing so (and as strongly hinted above, breaking a convention for code readability is a good reason). A convention is only good if it is used in the majority of the code written.

4. Automate style conformation, starting as early in a project's development as feasible. Integrate into your project's build system and developmer environments a tool such as [ScalaStyle](http://www.scalastyle.org/){:target="_blank"} or [scalafmt](https://olafurpg.github.io/scalafmt/){:target="_blank"}.

> **PROTIP**: Writing readable, expressive code is more important than
conforming to a standard or convention.

## Origins and relationship to other style guides

- Many of the conventions and standards that we use for Java also apply to Scala. As such, we follow most of the guidance found in the [Java Coding Style Guide](java-coding-style-guide) unless specified on this page. In other words, this page overrides the Java Coding Style Guide for Scala projects, but it does not replace it.

  - Unless otherwise stated in this document, we follow the [Community Scala Style Guide](http://docs.scala-lang.org/style/){:target="_blank"}.

## Conventions and standards

### Naming

In addition to [the naming conventions listed in the community Scala Style Guide](http://docs.scala-lang.org/style/naming-conventions.html){:target="_blank"} and in the [Java Coding Style Guide](java-coding-style-guide) we follow these additional naming conventions for Scala projects.

> **PROTIP**: If you find you are struggling with naming a class or method, look to [the standard Scala API Docs](http://www.scala-lang.org/api/current/#package){:target="_blank"} for inspiration

### Constants

- Per [the community Scala Style Guide](http://docs.scala-lang.org/style/naming-conventions.html#values_variable_and_methods){:target="_blank"},constant names should be in upper camel case (e.g. final val MyConstant)

    ```scala
    object Constants {
      // [-1] Oops, Java style leaking into Scala
      final val DEFAULT_FORCE_LEVEL = 10

      // [+1] The Scala Way
      final val DefaultForceLevel = 10
    }
    ```

### Type Declarations and Type Aliases

- In many cases you can exclude type declarations and let the Scala compiler infer the types automatically.

    ```scala
    // [-1] the type is obvious to both the reader and the compiler
    val i: Int = 10
    val bob: Person = Person("bob")

    // [+1] cleaner
    val i = 10
    val bob = Person("bob")
    ```

- Include the type declaration when the type of a val or var is not obvious when reading the code. This is often true when assigning the result of a function to a val and the function returns a complex type.

    ```scala
    // [-1] what does tryToCreateComplexObject return?
    val z = tryToCreateComplexObject("a", "b") { _.toString }

    // [+1] oh, that's what it returns!
    val z: Try[Map[String, List[Int]]] = tryToCreateComplexObject("a", "b") { _.toString }
    ```

- When defining compile-time constants, you MUST omit the type declaration. Otherwise, the Scala compilier will NOT produce a compile-time constant.

    ```scala
    object Constants {
       // [-1] Ooops! This won't be compiled into a compile-time constant.
       final val Name: String = "Darth Vadar"

       // [+1] This will be a compile-time constant
       final val Age = 12
    }
    ```

- Create a type alias when returning a complex type from a function.

    ```scala
    // [-1] That's hard to read, and I don't know what it represents
    def goo: (Water, Int) => (Slime) => Try[Map[String, Slime]]

    // [+1] Now I know what that is
    type TryToCreatesGoo = (Water, Int) => (Slime) => Try[Map[String, Slime]]
    def goo: TryToCreateGoo
    ```

- Sometimes you can create a type alias to add more semantic meaning to a type. For example, instead of using String for an ID, define a type alias for the ID that references String.  This improves readability and also makes it easy to change the ID's type in the future (you will only have to update the type alias to update all of the function and variable signatures).

    ```scala
    // [-1] What is the unit of measure for size? What is contained in the returned String?
    def createStarship(name: String, size: Int): String = ???

    // [+1] Much more expressive and easier to update in the future
    type MegaTons = Int
    type StarshipId = String

    def createStarship(name: String, size: MegaTons): StarshipId = ???
    ```

## Code Blocks

- Only include curly braces if a code block contains more than one line of code, or if you are creating an anonymous function on a single line. This applies to if expressions, for comprehensions, and functions.

    Use indentation to indicate that the one line of code belongs to the function/if/for expression.

    ```scala
    // [-1] Curly braces are unnecessary
    def sum(x: Int, y: Int): Int = {
      x + y
    }

    if (someBooleanIsTrue) {
      println("Hi Bob")
    }

    // [+1] More concise
    def sum(x: Int, y: Int): Int = x + y

    if (someBooleanIsTrue)
      println("Hi Bob")
    ```

## Higher Order Functions and Pattern Matching

- For container-like types (algebraic data types, monads) prefer using available higher-order functions (HOFs) instead of pattern matching.

  - Pattern-matching is a fairly low-level tool and using higher-order functions is generally more expressive.

  - Higher-order functions tend to be more concise than pattern matching, and are therefore usually easier to write.

- Common container-like types that have many higher-order functions which should be used instead of pattern matching:

  - [Option](http://www.scala-lang.org/api/current/scala/Option.html){:target="_blank"}

    ```scala
    // [-1] Using a pattern match instead of an available higher-order function
    def toHoney(nectar: Option[Nectar}): Option[Honey] =
      nectar match {
        case Some(n) => Some(new Honey(n.freshness))
        case None => None
      }

    // [+1] using the "map" higher-order function
    def toHoney(nectar: Option[Nectar}): Option[Honey] =
      nectar map { n => new Honey(n.freshness) }
    ```

  - [Try](http://www.scala-lang.org/api/current/scala/util/Try.html){:target="_blank"}

    ```scala
    // [-1] Using a pattern match instead of an available higher-order function
    def responseFor(createdBatch: Try[Batch]): Try[Response] = Try {
      createdBatch match {
        case Success(b) => Response.created().entity(b).build
        case Failure(e) => Response.status(500).build
      }
    }

    //[+1] using map and recover higher-order functions
    def responseFor(createBatchAttempt: Try[Batch]): Try[Response] =
      createdBatch map { b =>
        Response.created().entity(b).build
      } recover {
        Response.status(500).build
      }
    ```

- Sometimes, using a pattern match is more readable. Thus, while you should prefer higher-order function, you can still use pattern matching in cases where doing so improves expressiveness.

## Logging

- Use [SLF4J](http://www.slf4j.org/){:target="_blank"} and [scala-logging](https://github.com/typesafehub/scala-logging){:target="_blank"}, the Typesafe Scala wrapper for SLF4J.

- Use Scala string interpolation instead of SLF4J's templating style. By using the Typesafe scala-logging library, there is no need to use the SLF4J template style and the Scala string interpolation reads much more naturally.

    ```scala
    logger.debug(s"Downloading document from ${ur} using timeout ${timeout}")
    ```

- If your team has a Logger trait, use it rather than directly creating a log instance

    ```scala
    import com.ibm.your-teams-product.Logger

    class MyClass extends Logging {
       logger.debug("MyClass created")
    }
    ```

- If your team does NOT have a Logger trait, then use StrictLogging or LazyLogging from the scala-logging library

    ```scala
    import com.typesafe.scalalogging.StrictLogging

    class myClass extends StrictLogging
       logger.debug("MyClass created")
    }
    ```

- Do not end log statements with a period. Periods tend to clutter log files and make them less readable. Additionally, most log statements are incomplete sentences.

    ```scala
    logger.debug("Something happened.")    // [-1] undesirable punctuation
    logger.debug("Something else happend") // [+1] no ending punctuation
    ```

### Automated test conventions and standards

## Unit tests vs functional tests

The difference between different types of tests is not always clear. This section attempts to clarify some of the differences.

- Unit tests often fake things, and functional tests typically use real objects and endpoints
- Unit tests are isolated while functional tests are not isolated
- Unit tests should run fast
- A single unit test should be focused
- Functional tests validate acceptance criteria (at a minimum)
- Functional tests usually test more than just the Acceptance Criteria
- Functional tests grow and evolve beyond the Acceptance Criteria (for example, when defects are found)
- Functional tests test the entire system, unit tests only test single "units"
- Industry-wide functional tests are not typically run on every code submission due to time and infrastructure

## Testing framework

- We write Scala automated tests using [ScalaTest](http://scalatest.org/){:target="_blank"}.

## Testing style

ScalaTest supports [different testing styles](http://scalatest.org/user_guide/selecting_a_style){:target="_blank"}. Below are the styles that we use:

- For unit tests, prefer [WordSpec](http://doc.scalatest.org/2.2.4/index.html#org.scalatest.WordSpec){:target="_blank"}

- For functional tests, prefer [FeatureSpec](http://doc.scalatest.org/2.2.4/index.html#org.scalatest.FeatureSpec){:target="_blank"}

- For tests that are not unit tests, but are also not functional tests,
    prefer [WordSpec](http://doc.scalatest.org/2.2.4/index.html#org.scalatest.WordSpec){:target="_blank"}

## Matchers

- Mixin the base [Matchers](http://doc.scalatest.org/2.2.4/index.html#org.scalatest.Matchers){:target="_blank"} trait, which uses "should" verbs.

- Do not use MustMatchers or ShouldMatchers (ShouldMatchers is deprecated).
