var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = closed;
  this.animals = [];

}


Zoo.prototype.changeLocation = function(location){
  this.location = location;
};

Zoo.prototype.open = function(){
  this.status = open;
};

Zoo.prototype.closed = function(){
  this.status = closed;
};

Zoo.prototype.isOpen = function(){
  if(this.status === open){
      return "Open!";
  }
};

Zoo.prototype.addAnimal = function(Animal){
 if(this.status === open){
  this.animals.push(new Animal());
 }
};

Zoo.prototype.removeAnimal = function(animal){
  if(this.status === open){
      this.animals.indexOf(animal);
      for(i = 0; i < this.animal.length; i++){
        this.animal.splice(animal,1);
      }
  }
};

module.exports = Zoo;
