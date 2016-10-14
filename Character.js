var CharacterSex = {
	Male: 0,
  Female: 1
};

function Character(firstName, lastName) {
	this.firstName = firstName;
  this.lastName = lastName;
  this.age = 0;
  this.preoccupied = false;
  this.choices = {};
}

Character.inherit(Thing);

Character.prototype.maxClutchSize = 1;
Character.prototype.evaluatecChoice = function(choice) {
	if (!this.bestChoice) {
  	this.bestChoice = choice;
  } else {
  	var result = this.compareChoices(this.bestChoice, choice);

    if (result < 0) {
    	this.bestChoice = choice;
    } else if (result == 0) {
    	this.bestChoice = Math.round(Math.random()) ? this.bestChoice : choice;
    }
  }
};

Character.prototype.evaluateChoices = function() {
	for (var func in this) {
  	if (func.choice) {
    	this.evaluateOption(func);
    }
  }
};

Character.prototype.compareChoices = function(choice1, choice2) {

}

Character.prototype.executeChoice = function() {
	this.bestChoice();
};

Character.prototype.addChoice = function(choice) {
	this.choices[choice.name] = choice;
}

Character.prototype.reproduceWith = function(mate) {
	mate = mate || this.mate;

  console.log(this.firstName + ' ' + this.lastName + ' and ' + mate.firstName + ' ' + mate.lastName + ' decided to have children.');

  var newChildren = [];
  var clutchSize = this.getStochasticClutchSize();
  var lastName = this.sex === Sex.Male ? this.lastName : mate.lastName;

  for (var i = 0; i < clutchSize; i++) {
  	var firstName = this.generateChildFirstName(mate)
    var newChild = this.prototype.constructor.call(firstName, lastName);

    if (this.sex === CharacterSex.Male) {
    	newChild.father = this;
      newChild.mother = mate;
    } else {
    	newChild.father = mate;
      newchild.mother = this;
    }
  	newChildren.push(newChild);
  }

  var self = this;

  setTimeout(function() {
  	self.children.concat(newChildren);
  	self.addThings(newChildren);

    for (var i = 0; i < newChildren.length; i ++) {
      console.log(self.firstName + ' ' + self.lastName ' and ' + mate.firstName + ' ' + mate.lastName + ' had a child named ' newChildren[i].firstName + ' ' + newChildren[i].lastName);
    }
  }, this.gestationPeriod);

  return newChildren;
};

Character.prototype.reproduceWith.choice = true;
Character.prototype.reproduceWith.effects = function(character) {
	return {
  	time: character.gestationPeriod,
  	minFamily: 1,
    maxFamily: character.maxClutchSize + 1,
  }
};

Character.prototype.getStochasticClutchSize = function() {
	var deviation = 1;

  for (var i = 0; i <= this.maxClutchSize; i++) {
  	deviation *= Math.random();
  }

  return Math.round(deviation * this.maxClutchSize) + 1;
};
