let Civilian = function Civilian(name) {
  this.name = name;
};
Civilian.prototype.danger = function() {
  console.log("Run away");
};

let SuperHero = function (name, ability) {
  Civilian.call(this, name);
  this.ability = ability;
};
SuperHero.prototype = Object.create(Civilian.prototype);
SuperHero.prototype.constructor = SuperHero;

SuperHero.prototype.danger = function() {
  console.log("Never fear, " + this.name + " is here!");
  console.log(this.name + " uses " + this.ability + ". It's super effective.");
};