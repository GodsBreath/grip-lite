function Human(firstName, lastName) {
	Character.call(firstName, lastName);
	this.family = 0;
  this.income = 1;
  this.expenses = 1;
  this.bestChoice = null;
  this.food = 0;
}

Human.inherit(Character);

Human.prototype.maxClutchSize = 7;
Human.prototype.gestationPeriod = 90000;
Human.prototype.generateChildFirstName = function(mate) {
	var donorSwitch = Math.round(Math.random());

  if (donorSwitch) {
  	firstSegmentDonor = mate;
    lastSegmentDonor = this;
  } else {
  	firstSegmentDonor = this;
    lastSegmentDonor = mate;
  }
  var firstNameSegment = firstSegmentDonor.firstName.slice(0, Math.floor(mate.firstName.length / 2));
  var lastNameSegment = lastSegmentDonor.firstName.slice(Math.ceil(this.firstName.length / 2), this.firstName.length);

  return firstNameSegment.concat(lastNameSegment);
};

Human.prototype.gatherFood = function() {
	var self = this;
	setTimeout(function() {
  	self.income++;
  }, 10000);
};

Human.prototype.increaseIncome.choice = true;
Human.prototype.increaseIncome.choice.effects = {
	minIncome: 1,
  maxIncome: 1
};
