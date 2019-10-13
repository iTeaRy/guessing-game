class GuessingGame {

    constructor() {
    	this.result = 0;
    	this.newMin = 0;
    	this.newMax = 0;
    }
    
    setRange(min, max) {
    	this.newMin = min;
    	this.newMax = max;
    	this.result = this.newMin + Math.ceil((this.newMax - this.newMin) / 2);
    }

    guess() {
    	return this.result;
    }

    lower() {
    	this.newMax = this.result;
    	this.result = this.newMin + Math.ceil((this.newMax  -this.newMin) / 2);
    }

    greater() {
    	this.newMin = this.result;
    	this.result = this.newMax - Math.floor((this.newMax - this.newMin) / 2);
    }
    
}

module.exports = GuessingGame;
