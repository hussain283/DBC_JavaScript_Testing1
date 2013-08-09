






// tests (driver code)

function assert(result, error){
  if (!result) throw error;
}

var me = new Person('Jared');
assert(me.name === 'Jared', 'name was not set');
