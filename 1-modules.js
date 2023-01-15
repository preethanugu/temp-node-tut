const names = require('./prologue/names') // just get the names as one object
const {john, peter} =  require('./prologue/names') //destructure the variables from the module(file)
const sayHi = require('./prologue/utils')
const data = require('./prologue/alternate-flavor')
require('./prologue/mind-grenade')
//console.log(data)


// sayHi('susan')
// sayHi(names.john) // return them as props of names
// sayHi(names.peter) 
// console.log()
// sayHi('susan')
// sayHi(john) // return them as destructured
// sayHi(peter)