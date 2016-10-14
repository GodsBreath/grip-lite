Function.prototype.inherit = function(sup) {
	this.prototype = Object.create(sup);
  this.prototype.constructor = this;
};


function Player() {

}

Player.inherit(Character);

function Environment() {

}

function Map() {

}

function Thing() {

}

function Resource() {

}

Resource.inherit(Thing);

function Main() {
	var game = new Game();
  var adam = new Human('Adam', 'Jesus');
  var eve = new Human('Eve', 'Jesus');

  game.addThing(adam);
  game.addThing(eve);
}
