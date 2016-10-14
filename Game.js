var Phase = {
	EvaluateChoices: 0,
  ExecuteChoice: 1
}

function Game() {
	this.maxThings = 1000;
	this.playing = false;
  this.paused = true;
  this.currentThingIndex = 0;
  this.currentPhase = Phase.GatherInformation;
  this.freeIndexes = Array.apply(null, {length: this.maxThings}).map(Function.call, Number);
  this.things = [];
}

Game.prototype.play = function() {
	this.playing = true;
  while (this.playing) {
  	this.cycle();
  }
};

Game.prototype.pause = function() {
	this.playing = false;
};

Game.prototype.resume = Game.prototype.play;

Game.prototype.cycle = function() {
	while (this.currentThingIndex < this.things.length && this.playing) {
  	switch (this.currentPhase) {
    	case Phase.EvaluateChoices:
      	if (!this.playing) break pause;
        this.things[i].evaluateChoices();
      case Phase.ExecuteChoice:
      	this.currentPhase = Phase.ExecuteChoice;
       	if (!this.playing) break pause;
       	this.things[i].executeDecision();
      default:
      	this.currentPhase = Phase.EvaluateChoices;
        this.currentThingIndex++;
        break;
    }
  }
  this.currentThingIndex = 0;
  pause:
};

Game.prototype.addThings = function(things) {
	for (var i = 0; i < things.length; i++) {
  	var nextFreeIndex = this.freeIndexes.shift();

    if (!nextFreeIndex) {
    	console.log('Max things limit reached. Pausing.');
      this.pause();
    }

    this.things[nextFreeIndex] = things[i];
  }
};

Game.prototype.removeThing = function(thing, index) {
	var indexToRemove;

	if (typeof index == 'number') {
  	indexToRemove = index;
  } else {
  	indexToRemove = this.things.indexOf(thing);
  }
  this.things[indexToRemove] = null;
  this.freeIndexes.push(indexToRemove);
};

function Choice(execute, effect) {
	this.execute = execute;
  this.effect = effect;
}
