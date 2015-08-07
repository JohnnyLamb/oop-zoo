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



module.exports = Zoo;
