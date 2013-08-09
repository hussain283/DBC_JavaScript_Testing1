// tests (driver code)

function assert(result, error){
  if (!result) throw error;
}

var jared   = new Person('Jared');
var jeffrey = new Person('Jeffrey');
assert(jared.name === 'Jared', 'name should be Jared');
assert(jeffrey.name === 'Jeffrey', 'name should be Jeffrey');

assert(jared.scream() === 'MY NAME IS JARED!', 'jared failed to scream');
assert(jeffrey.scream() === 'MY NAME IS JEFFREY!', 'jeffrey failed to scream');
assert(jeffrey.scream === jared.scream, 'jared.scream and jeffrey.scream should be the same');

console.log('all tests pass!');
