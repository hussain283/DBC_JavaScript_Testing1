function Person(name){
  this.name = name;
}

Person.prototype.scream = function() {
  return "MY NAME IS " + this.name.toUpperCase() + "!";
};
