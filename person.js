function Person(options){
  this.name = options.name;
  this.children = [];
}

Person.prototype.scream = function() {
  return "MY NAME IS " + this.name.toUpperCase() + "!";
};

Person.prototype.procreate = function() {
  this.children.push(new Person);
  return this;
}
