const student = {
  name: 'Easy Frontend',
  sayHello() {
    console.log('NAME', this.name);
    console.log('THIS', this);
  },
};
student.sayHello(); // 'Easy Frontend'
setTimeout(student.sayHello);
// this is window, not student
setTimeout.call(student, student.sayHello);
// Uncaught TypeError: Illegal invocation

setTimeout(() => {
  student.sayHello(); // this is student --> 'Easy Frontend'
});

// Bind for function sayHello
setTimeout(student.sayHello.bind(student)); // 'Easy Frontend'

const customer = {
  name: 'Easy Frontend',
  normal() {
    console.log('NAME', this.name);
    console.log('THIS', this);
  },
  arrow: () => {
    console.log('NAME', this.name);
    console.log('THIS', this);
  },
  timeoutNormal() {
    console.log('OUTER THIS', this);
    setTimeout(function () {
      console.log('NAME', this.name);
      console.log('THIS', this);
    });
  },
  timeoutArrow() {
    console.log('OUTER THIS', this);
    setTimeout(() => {
      console.log('NAME', this.name);
      console.log('THIS', this);
    });
  },
};
// Enjoy 🤣
