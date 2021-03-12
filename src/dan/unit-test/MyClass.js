class MyClass {
  constructor() {
    console.log('initiate');
  }

  sayHello(str) {
    console.log(str);
  }

  add(arg1, arg2) {
    const result = arg1 + arg2;
    return result;
  }

  callAnotherFn(arg1, arg2) {
    this.sayHello('Hello World');
    const result = this.add(arg1, arg2);
    return result;
  }
}

module.exports = MyClass;
