// Creation of fake Call function

Function.prototype.fakeCall = 
  function fakeCall(context, ...args) {
    context._fn = this;
    return context._fn(...args);
  }

function welcome(arg1, arg2, arg3) {
  return ` Hi ${this.name}, welcome to ACA Bootcamp with courses ${arg1} , ${arg2} , ${arg3}}`
}

let student = {
  name: "Avet",
};

console.log(welcome.call(student, "JS", "HTML", "CSS"));
console.log(welcome.fakeCall(student, "JS", "HTML", "CSS"));