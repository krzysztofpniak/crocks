---
title: "Writer"
description: "Writer Crock"
layout: "guide"
functions: ["log", "read"]
weight: 160
---


```haskell
Monoid m => Writer m a
```

The `Writer` monad makes it possible to represent and compose computations that produce some 
additional data along with their computed values. `Writer` is a `Product` type that consists 
of a `Monoid` as a the first value that typically holds metadata such as log lines, while the 
second value holds the result of a computation. 

<article id="topic-implements">

## Implements
`Functor`, `Apply`, `Chain`, `Applicative`, `Monad`

</article>

<article id="topic-construction">

## Construction

```haskell
Writer :: MonoidTypeRep M, Monoid m => M -> (m, a) -> Writer m a
```

`Writer` is a type constructor that takes a `Monoid` constructor and returns a new constructor. The new constructor is a binary function that accepts a `Monoid` instance and a value `a`, and returns a `Writer` instance.

```javascript
import Writer from 'crocks/Writer'

const StringWriter =  Writer(String)

StringWriter('value: zero', 0)
// Writer String Number

StringWriter('adding inputs', (a, b) => a + b)
// Writer String Number
```

</article>

<article id="topic-constructor">

## Constructor Methods

#### of 


```haskell
Writer.of :: a -> Writer m a
```

`of` is a construction helper that can be used to construct an `Writer` with any given value, with an empty instance of the `Monoid` that was passed to the type constructor.

```javascript
import Writer from 'crocks/Writer'

import List from 'crocks/List'

const ListWriter =  Writer(List)

ListWriter.of(42)
// Writer List Number
```

</article>

<article id="topic-instance">

## Instance Methods

#### equals

```haskell
Writer m a ~> b -> Boolean
```

Used to compare the underlying values of two `Writer` instances for equality by value, `equals` takes any given argument and returns `true` if the passed arguments are a `Writer` with an underlying value are equal to the underlying value of the `Writer` the method is being called on. If the passed argument is not a `Writer` instance or if the underlying values are not equal, equals will return false.

```javascript
import Assign from 'crocks/Assign'
import Writer from 'crocks/Writer'

import equals from 'crocks/pointfree/equals'

const AssignWriter =  Writer(Assign)

AssignWriter.of(2)
  .equals(AssignWriter.of(2))
//=> true

AssignWriter(Assign({ a: 20 }), null)
  .equals(AssignWriter(Assign({ a: 30 }), null))
//=> true

Writer(String)('here is 42', { value: 42 })
  .equals(Writer(String)('also 42', { value: 42 }))
//=> true

Writer(String)('hello', 25)
  .equals(Writer(String)('hello', 26))
//=> false

equals(Writer(Array).of('result'), 'result')
//=> false
```

#### map

Used to apply transformations to the value that a `Writer` holds, `map` takes a function that it will lift into the context of the `Writer` and apply to it the wrapped value. 

```javascript
import Sum from 'crocks/Sum'
import Writer from 'crocks/Writer'

// toLower :: String -> String
const toLower = x => x.toLowerCase()

Writer(Sum).of('HELLO!')
  .map(toLower)
//=> Writer( Sum 0 "hello!" )

Writer(String)('file was loaded', 'important text from document')
  .map(contents => contents.length)
//=> Writer("file was loaded"  28)
```

#### ap

Short for apply, `ap` is used to apply a `Writer` instance containing a value to another `Writer` instance that contains a function, resulting in new `Writer` instance comprising of the result of concatenating the monoid instances, and the value derived from applying the function. `ap` requires that it is called on a writer that wraps a curried polyadic function as its value.

```javascript
import Writer from './Writer'
import Sum from './Sum'

const SumWriter = Writer(Sum)

SumWriter.of(x => y => `You attack the imp with your ${x} and ${y}`)
  .ap(SumWriter(3, 'sword'))
  .ap(SumWriter(7, 'fireball'))
//=> Writer( Sum 10 "You attack the imp with your sword and fireball" )
```
#### chain

#### read

#### log

</article>

<article id="topic-pointfree">

## Pointfree Functions

#### read (pointfree)

#### log (pointfree)

</article>
