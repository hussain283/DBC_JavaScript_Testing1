

function Person(name){
  this.name = name
}




// tests (driver code)

function assert(result, error){
  if (!result) throw error;
}

var jared   = new Person('Jared');
var jeffrey = new Person('jeffrey');
assert(jared.name === 'Jared', 'name was not set');
assert(jeffrey.name === 'Jeffrey', 'name was not set');

assert(jared.scream() === 'MY NAME IS JARED!', 'jared failed to scream');
assert(jeffrey.scream() === 'MY NAME IS JEFFREY!', 'jeffrey failed to scream');


console.log('all tests pass!');
