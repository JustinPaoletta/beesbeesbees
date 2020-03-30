var ForagerBee = function(age, color, food) {
  HoneyMakerBee.call(this, age, color, food);
  this.age = 10;
  this.job = 'find pollen';
  this.canFly = true;
  this.treasureChest = [];
};

ForagerBee.prototype = Object.create(Grub.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(coin) {
  this.treasureChest.push(coin);
};