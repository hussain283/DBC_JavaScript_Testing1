// tests (driver code)

function assert(result, error){
  if (!result) throw error;
}

var jared  = new Person({name: 'Jared', sex:'male'});
var alice  = new Person({name: 'Alice', sex:'female'});

assert(jared.name === 'Jared', 'name should be Jared');
assert(alice.name === 'Alice', 'name should be Jeffrey');

assert(jared.scream() === 'MY NAME IS JARED!', 'jared failed to scream');
assert(alice.scream() === 'MY NAME IS ALICE!', 'alice failed to scream');
assert(alice.scream === jared.scream, 'jared.scream and alice.scream should be the same');


jared.wed(alice);

assert(jared.wife === alice, 'jared\'s wife should be alice');
assert(alice.husband === jared, 'alice\'s husband should be jared');


// jeffrey.procreate();

// assert(jeffrey.children.length === 1, 'jeffrey should have 1 child');
// assert(jeffrey.children[0] instanceof Person, 'jeffrey\'s kid should be a child');

// jared.procreate();
// jared.procreate();

// assert(jared.children.length === 2, 'jared should have 1 child');
// assert(jared.children[0] instanceof Person, 'jared\'s kid should be a child');
// assert(jared.children[1] instanceof Person, 'jared\'s kid should be a child');

console.log('all tests pass!');
