class Person {
  constructor() {
    this.name = "bob";
  }

  sayHello() {
    setTimeout(
      function () {
        console.log(this);
      }.bind(this),
      1000
    );
  }
}
const p = new Person();
p.sayHello();
