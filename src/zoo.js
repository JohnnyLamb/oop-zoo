var Animal = require("./animal");

function Zoo(name, location){
  this.name = name;
  this.location = location;
  this.status = "closed";
  this.animals = [];

}


Zoo.prototype.changeLocation = function(location){
  this.location = location;
};

Zoo.prototype.open = function(){
  this.status = "open";
};

Zoo.prototype.closed = function(){
  this.status = "closed";
};

Zoo.prototype.isOpen = function(){
  if(this.status === "open"){
      return "Open!";
  } else {
    return "Closed!";
  }
};

// pig = new Animal("Babe",10,"Pig");
// zoo.addAnimal(pig)
// OR
// zoo.addAnimal(new Animal("Babe",10,"Pig"))
Zoo.prototype.addAnimal = function(animalInstance){
  if(this.status === "open"){
    if(this.animals.length === 0) {
      if(checkForProperties(animalInstance)){
          this.animals.push(animalInstance);
        }
    } else {
      for(i= 0; i < this.animals.length; i++){
        if(this.animals[i].name !== animalInstance.name){
          if(checkForProperties(animalInstance)){
           this.animals.push(animalInstance);
          }
        }
      }
    }
  }
};

function checkForProperties(instance) {
  if(instance.hasOwnProperty("name") && instance.hasOwnProperty("age") && instance.hasOwnProperty("kind") && instance.hasOwnProperty("awake")){
      return true;
  } else {
    return false;
  }
}

Zoo.prototype.removeAnimal = function(animal){
  if(this.status === "open"){
      var getHere = this.animals.indexOf(animal);
      for(i = 0; i < this.animal.length; i++){
        this.animal.splice(getHere,1);
      }
  }
};

module.exports = Zoo;
