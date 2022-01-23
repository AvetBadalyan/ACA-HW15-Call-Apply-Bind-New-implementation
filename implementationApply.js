// Creation of fake Call function
//NEED TO FIX BUGS

Function.prototype.fakeApply = 
  function fakeApply(context, args) {
    context._fn = this;
    return context._fn(args);
  }

function welcome(args) {
  return ` Hi ${this.name}, welcome to ACA Bootcamp with courses ${args[0]} , ${args[1]} , ${args[2]}`
}

let student = {
  name: "Avet",
};

console.log(welcome.apply(student, ["JS", "HTML", "CSS"]));
console.log(welcome.fakeApply(student, ["JS", "HTML", "CSS"]));