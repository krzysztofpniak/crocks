const test = require('tape')

const index = require('.')

const hasProp = require('./hasProp')
const hasPropPath = require('./hasPropPath')
const isAlt = require('./isAlt')
const isAlternative = require('./isAlternative')
const isApplicative = require('./isApplicative')
const isApply = require('./isApply')
const isArray = require('./isArray')
const isBifunctor = require('./isBifunctor')
const isBoolean = require('./isBoolean')
const isCategory = require('./isCategory')
const isChain = require('./isChain')
const isContravariant = require('./isContravariant')
const isDate = require('./isDate')
const isDefined = require('./isDefined')
const isEmpty = require('./isEmpty')
const isExtend = require('./isExtend')
const isFalse = require('./isFalse')
const isFalsy = require('./isFalsy')
const isFoldable = require('./isFoldable')
const isFunction = require('./isFunction')
const isFunctor = require('./isFunctor')
const isInteger = require('./isInteger')
const isIterable= require('./isIterable')
const isMonad = require('./isMonad')
const isMonoid = require('./isMonoid')
const isNil = require('./isNil')
const isNumber = require('./isNumber')
const isObject = require('./isObject')
const isPlus = require('./isPlus')
const isProfunctor = require('./isProfunctor')
const isPromise = require('./isPromise')
const isSame = require('./isSame')
const isSameType = require('./isSameType')
const isSemigroup = require('./isSemigroup')
const isSemigroupoid = require('./isSemigroupoid')
const isSetoid = require('./isSetoid')
const isString = require('./isString')
const isTraversable = require('./isTraversable')
const isTrue = require('./isTrue')
const isTruthy = require('./isTruthy')
const pathEq = require('./pathEq')
const propEq = require('./propEq')
const propPathEq = require('./propPathEq')
const propSatisfies = require('./propSatisfies')
const propPathSatisfies = require('./propPathSatisfies')

test('predicates entry', t => {
  t.equal(index.hasProp, hasProp, 'provides the hasProp predicate')
  t.equal(index.hasPropPath, hasPropPath, 'provides the hasPropPath predicate')
  t.equal(index.isAlt, isAlt, 'provides the isAlt predicate')
  t.equal(index.isAlternative, isAlternative, 'provides the isAlternative predicate')
  t.equal(index.isApply, isApply, 'provides the isApply predicate')
  t.equal(index.isApplicative, isApplicative, 'provides the isApply predicate')
  t.equal(index.isArray, isArray, 'provides the isArray predicate')
  t.equal(index.isBifunctor, isBifunctor, 'provides the isBifunctor predicate')
  t.equal(index.isBoolean, isBoolean, 'provides the isBoolean predicate')
  t.equal(index.isCategory, isCategory, 'provides the isCategory predicate')
  t.equal(index.isChain, isChain, 'provides the isChain predicate')
  t.equal(index.isContravariant, isContravariant, 'provides the isContravariant predicate')
  t.equal(index.isDate, isDate, 'provides the isDate predicate')
  t.equal(index.isDefined, isDefined, 'provides the isDefined predicate')
  t.equal(index.isEmpty, isEmpty, 'provides the isEmpty predicate')
  t.equal(index.isExtend, isExtend, 'provides the isExtend predicate')
  t.equal(index.isFalse, isFalse, 'provides the isFalse predicate')
  t.equal(index.isFalsy, isFalsy, 'provides the isFalsy predicate')
  t.equal(index.isFoldable, isFoldable, 'provides the isFoldable predicate')
  t.equal(index.isFunction, isFunction, 'provides the isFunction predicate')
  t.equal(index.isFunctor, isFunctor, 'provides the isFunctor predicate')
  t.equal(index.isInteger, isInteger, 'provides the isInteger predicate')
  t.equal(index.isIterable, isIterable, 'provides the isIterable predicate')
  t.equal(index.isMonad, isMonad, 'provides the isMonad predicate')
  t.equal(index.isMonoid, isMonoid, 'provides the isMonoid predicate')
  t.equal(index.isNil, isNil, 'provides the isNil predicate')
  t.equal(index.isNumber, isNumber, 'provides the isNumber predicate')
  t.equal(index.isObject, isObject, 'provides the isObject predicate')
  t.equal(index.isPlus, isPlus, 'provides the isPlus predicate')
  t.equal(index.isProfunctor, isProfunctor, 'provides the isProfunctor predicate')
  t.equal(index.isPromise, isPromise, 'provides the isPromise predicate')
  t.equal(index.isSame, isSame, 'provides the isSame predicate')
  t.equal(index.isSameType, isSameType, 'provides the isSameType predicate')
  t.equal(index.isSemigroup, isSemigroup, 'provides the isSemigroup predicate')
  t.equal(index.isSemigroupoid, isSemigroupoid, 'provides the isSemigroupoid predicate')
  t.equal(index.isSetoid, isSetoid, 'provides the isSetoid predicate')
  t.equal(index.isString, isString, 'provides the isString predicate')
  t.equal(index.isTraversable, isTraversable, 'provides the isTraversable predicate')
  t.equal(index.isTrue, isTrue, 'provides the isTrue predicate')
  t.equal(index.isTruthy, isTruthy, 'provides the isTruthy predicate')
  t.equal(index.pathEq, pathEq, 'provides the pathEq predicate')
  t.equal(index.propEq, propEq, 'provides the propEq predicate')
  t.equal(index.propPathEq, propPathEq, 'provides the propEq predicate')
  t.equal(index.propSatisfies, propSatisfies, 'provides the propSatisfies predicate')
  t.equal(index.propPathSatisfies, propPathSatisfies, 'provides the propPathSatisfies predicate')

  t.end()
})
