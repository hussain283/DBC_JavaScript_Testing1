function Mammal(options){
  this.name = options.name;
  this.sex = options.sex;
  this.children = [];
  this.alive = true;
}

Mammal.prototype.kill = function() {
  this.alive = false;
}

Mammal.prototype.procreateWith = function(partner, options) {
  
  if (partner === this) { throw 'you cannot have a baby with yourself!' }

  if (partner.sex === 'male') { throw 'two men cannot have a baby!' }

  var child = new this.constructor(options)
  this.children.push(child);
  partner.children.push(child)

  if (this.sex === 'male') {
    child.mother = this.wife
    child.father = this
  } else {
    child.mother = this
    child.father = this.husband
  } 
  return child;
}

function Dog(options, owner) {
  Mammal.call(this, options);
  this.owner = owner;
}

Dog.prototype = Object.create(Mammal.prototype);
Dog.prototype.constructor = Dog;

function Person(options){
  Mammal.call(this,options);
  this.pets = []
  this.alive = true;
}

Person.prototype = Object.create(Mammal.prototype);
Person.prototype.constructor = Person;

Person.prototype.scream = function() {
  return "MY NAME IS " + this.name.toUpperCase() + "!";
};

Person.prototype.wed = function(spouse) {
  if (this.sex == 'male') {
    this.wife = spouse;
    spouse.husband = this;
  }
  else {
    this.husband = spouse;
    spouse.wife = this;
  }
}

Person.prototype.buyPet = function(klass, options) {
  pet = new klass(options, this)
  this.pets.push(pet)
  return pet
}