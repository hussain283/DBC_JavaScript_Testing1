// tests (driver code)

function assert(result, error){
  if (!result) throw error;
}

var jared  = new Person({name: 'Jared', sex:'male'});
var alice  = new Person({name: 'Alice', sex:'female'});


assert(jared instanceof Person, 'jared should be a Person');
assert(alice instanceof Person, 'alice should be a Person');
assert(jared.name === 'Jared', 'name should be Jared');
assert(alice.name === 'Alice', 'name should be Jeffrey');

assert(jared.sex === 'male', 'jared should be male');
assert(alice.sex === 'female', 'alice should be Jeffrey');

assert(jared.scream() === 'MY NAME IS JARED!', 'jared failed to scream');
assert(alice.scream() === 'MY NAME IS ALICE!', 'alice failed to scream');
assert(alice.scream === jared.scream, 'jared.scream and alice.scream should be the same');


var jared = new Person({name: 'Jared', sex:'male'});
var alice = new Person({name: 'Alice', sex:'female'});

jared.wed(alice);

assert(jared.wife === alice, 'jared\'s wife should be alice');
assert(alice.husband === jared, 'alice\'s husband should be jared');

var jared = new Person({name: 'Jared', sex:'male'});
var alice = new Person({name: 'Alice', sex:'female'});

alice.wed(jared);

assert(jared.wife === alice, 'jared\'s wife should be alice');
assert(alice.husband === jared, 'alice\'s husband should be jared');


moonbeam = jared.procreate({name: 'Moonbeam', sex:'female'});

assert(jared.children.length === 1, 'jared should have 1 child');
assert(alice.children.length === 1, 'alice should have 1 child');
assert(jared.children[0] === moonbeam, 'jared\'s only child should be moonbeam');
assert(alice.children[0] === moonbeam, 'alice\'s only child should be moonbeam');
assert(moonbeam instanceof Person, 'jared\'s kid should be a child');
assert(moonbeam.name === 'Moonbeam', 'jared child should be named Moonbeam');
assert(moonbeam.sex === 'female', 'jared child should be female');
assert(moonbeam.father === jared, "moonbeam's father should be jared");
assert(moonbeam.mother === alice, "moonbeam's mother should be alice");

// assert()


sparky = jared.buyPet(Dog, {name:'Sparky', sex:'male'});

assert(jared.pets.length === 1, 'jared should have 1 pet');
assert(jared.pets[0] === sparky, 'jared\'s pet should be sparky');

assert(!(sparky instanceof Person), 'sparky should not be a Person');
assert(sparky instanceof Dog, 'sparky should be a Dog');
assert(!(jared instanceof Dog), 'jared should not be a Dog');
assert(!(alice instanceof Dog), 'alice should not be a Dog');

assert(sparky.name === 'Sparky', 'sparky should be named Sparky');
assert(sparky.sex === 'male', 'sparky should be male');
assert(sparky.owner === jared, 'sparky\'s owner should be jared');


assert(jared.alive,  'jared should be alive');
assert(alice.alive,  'alice should be alive');
assert(sparky.alive, 'sparky should be alive');

jared.kill();

assert(!jared.alive,  'jared should not be alive');
assert(alice.alive,  'alice should be alive');
assert(sparky.alive, 'sparky should be alive');


console.log('all tests pass!');
