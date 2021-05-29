"use strict";

class ClassOne {
  constructor() {
    this.prop = "this is class one";
  }
}

class ClassTwo {
  constructor() {
    this.prop = "this is class two";
  }
}

class ClassThree {
  constructor() {
    this.prop = "this is class three";
  }
}

class Main {
  constructor(...args) {
    this.plugIn(args);
  }

  plugIn(args) {
    for (const arg of args) {
      const [key, value] = Object.entries(arg)[0];
      this[key] = new value();
    }
  }
}

(() => {
  const main = new Main(
    { classOne: ClassOne },
    { classTwo: ClassTwo },
    { classThree: ClassThree }
  );

  console.log(main.classOne.prop);
  console.log(main.classTwo.prop);
  console.log(main.classThree.prop);
})();
