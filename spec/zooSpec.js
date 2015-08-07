var Animal = require('../src/animal.js'),
Zoo = require('../src/zoo.js');

var animal;
var zoo;

describe('Zoo', function(){

  beforeEach(function(){
    zoo = new Zoo("Bronx","NYC");
    pig = new Animal("Babe",10,"Pig");
    lion = new Animal("Snoop",10,"lion");
  });

  describe('#changeLocation', function(){
    it('should change locations', function(){
      zoo.changeLocation("boulder");
      expect(zoo.location).not.toEqual("Bronx");
      expect(zoo.location).toEqual("boulder");
    });
  });

  describe('#open', function(){
    it('should change status to open', function(){
      zoo.open();
      expect(zoo.status).toEqual('open');
    });
  });


  describe('#isOpen', function(){
    it('should see if the zoo is open', function(){
      zoo.open();
      expect(zoo.isOpen()).toEqual('Open!');
    });
    it('should see if the zoo is closed', function(){
      zoo.open();
      zoo.closed();
      expect(zoo.isOpen()).toEqual('Closed!');
    });
  });

  describe('#animals', function(){
    it('should initially be empty', function(){
      expect(zoo.animals.length).toEqual(0);
    });
  });


  describe('#addAnimal', function(){
    it('should only add an animal to the animals array when the zoo is open', function(){
      zoo.addAnimal(pig);

      expect(zoo.animals.length).toEqual(0);
    });
    it('should add an animal to the animals array', function(){
      zoo.open();
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
      expect(zoo.animals[0].name).toEqual("Babe");
    });

    it('should only add instances of animals', function(){
      var dummy = {name:"joey",age:22};
      zoo.open();
      zoo.addAnimal(dummy);
      expect(zoo.animals.length).toEqual(0);
    });

    it('should not add duplicates', function(){
      zoo.open();
      zoo.addAnimal(pig);
      zoo.addAnimal(pig);
      expect(zoo.animals.length).toEqual(1);
    });
  });

  describe('#removeAnimal', function(){
    it('should remove an animal from the animals array if the zoo is open', function(){

    });
  });
});


