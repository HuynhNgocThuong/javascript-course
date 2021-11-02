// GOOD
if (condition) doSomething();

// GOOD
if (condition) {
  doSomething();
  doSomethingElse();
}

// OK
if (condition) {
  doSomething();
} else {
  doSomethingElse();
}

// BAD
if (condition) {
  doSomething();
} else if (anotherCondition) {
  doSomethingElse();
} else {
  doSomethingFinally();
}

// Avoid to use nested if
if (condition1) {
  if (condition2) {
    doSomething();
  } else {
    doSomethingElse();
  }
}
