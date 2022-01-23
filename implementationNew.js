function User(name) {
  this.name = name
}

function fakeNew(objConstructor, ...args) {
//1. Creating a new object
  const _newObject = {} 
// 2. connecting new object proto to Object prototype
  _newObject.__proto__ = objConstructor.prototype 
// 3 giving this context to the new object
  const returndedValue = objConstructor.apply(_newObject, args) 
// 4. checking if the function doesn't return an object. if not, return this
  if (typeof returndedValue === 'object') {
    return returndedValue;
  } 
  return _newObject;
}

const user = new User('Avet');
const fakeUser = fakeNew(User, 'Avet');

console.log(user)
console.log(fakeUser)

