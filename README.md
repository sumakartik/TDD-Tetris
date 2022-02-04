# [TDD MOOC](https://tdd.mooc.fi): Tetris

In this exercise you will be implementing a Tetris game using Test-Driven Development (TDD). The first couple dozen
tests have already been written for you - just uncomment them one by one. This should help to get over the initial
hurdle of knowing what tests to write when getting started with TDD. After that the training wheels are removed, and
it's time to write your own tests in the latter part of this exercise.

The instructions on what to do are in the [docs directory](docs/). This exercise is split into 10 "levels" which you
should implement in order. They represent a realistic TDD approach of adding features incrementally.

This exercise uses [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) (ES6+) and [Jest](https://jestjs.io/),
but the concepts are language agnostic. It would be quite easy to translate the example tests to another
programming language as you go. This Jest version was modified by James Kelley (who is to blame for any errors) from the original
[Mocha/Chai version](https://github.com/luontola/tdd-mooc-tetris).

There also exists an older [Java-based predecessor](https://github.com/luontola/tdd-tetris-tutorial) of this exercise.

Refer to [the original course material](https://tdd.mooc.fi) to learn more about TDD and this exercise.

---

_This exercise is modified from an original that is part of the [TDD MOOC](https://tdd.mooc.fi) at the University of Helsinki,
brought to you by [Esko Luontola](https://twitter.com/EskoLuontola) and [Nitor](https://nitor.com/)._

## 🚀 [Start the exercise](docs/level-1.md)

## Prerequisites

You'll need a recent [Node.js](https://nodejs.org/) version. Then download this project's dependencies with:

    npm install

## Developing

Run tests once

    npm run test

Run tests continuously

    npm run autotest

Code reformat

    npm run format

# GUIDING PRINCIPLES:

## The Three Rules of TDD

- Write production code only to pass a failing unit test
- Write no more of a unit test than sufficient to fail (compilation failures are failures)
- Write no more production code than necessary to pass the one failing unit test

## Proverbs:

- If it ain’t broke: don’t fix it
- Make it work, _then_ make it fast

## Red > Green > Refactor

- RED: First, think about WHAT you're doing
- GREEN: Then, think about HOW
- REFACTOR: Finally, think about CLEANUP and/or IMPROVEMENT

## How to read a test

- Look for the _ARRANGE_ step - what is being prepared?
- See what the test's intention is in the _ACT_ step -
  - What methods get called?
  - What arguments are passed?
- What is measured by the _ASSERT_ step?
  - How is it measured - what is the expectation?
  - What methods get called?
  - What arguments are passed?
  - What test matchers are used?
