var RetiredForagerBee = function(age, color, food) {
  ForagerBee.call(this, age, color, food);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);

RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return 'I am too old, let me play cards instead'
};

RetiredForagerBee.prototype.gamble = function(coin) {
  this.treasureChest.push(coin);
};

