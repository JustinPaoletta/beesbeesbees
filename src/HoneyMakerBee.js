var HoneyMakerBee = function(age, color, food) {
  Bee.call(this, age, color, food);
  this.age = 10;
  this.job = 'make honey'
  this.eat;
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Grub.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;

HoneyMakerBee.prototype.makeHoney = function() {
  this.honeyPot ++;
}

HoneyMakerBee.prototype.giveHoney = function() {
  this.honeyPot --;
}