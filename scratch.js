function Character(options) {
  var options = options || {};
  this.health = options.health || 1000;
  this.name = options.name || "Princess";
  this.power = options.power || 5;
  this.misses = 0;
  this.drinkBeer = options.drinkBeer || 1;
  this.attack = function(enemy) {
    this.damage(enemy);
  };
  this.damage = function(enemy) {
    var random = Math.floor(Math.random() * 10 + 1);
    if (random > 4) {
      if (this.health < 1) {
        console.log("Oh no! " + enemy.name +
          " has perished and was flushed down a toilet.");
      }
      if (enemy.weapon) {
        this.health = this.health - (enemy.power * enemy.weapon.strength);
        console.log("Ouch! " + enemy.name + " just got hit by a " + enemy.weapon
          .name);
      } else {
        this.health = this.health - this.power;
      }
    } else {
      console.log("Rats! You didn't hit " + enemy.name + " with the " +
        enemy.weapon.name + "!");
    }
  };
  this.equip = function(name, strength) {
    this.weapon = new Weapon({
      name: name,
      strength: strength
    });
  };
  this.drink = function(x) {
    this.health += 20 * x;
    console.log(this.name + ' drank ' + x +
      ' refreshing beers and now has ' + this.health +
      ' health points! Wow!');
  };
  this.pottery = function(enemy) {
    enemy.ouch(this);
  };
  this.ouch = function(enemy) {
    var random = Math.floor(Math.random() * 10 + 1);
    if (random > 4) {
      this.health += 50;
      console.log(
        "Neat, you made some pottery! It's so much prettier than what " +
        this.name + " made! You just earned 50 health points! Now you have " + this.health +
        " health points! Wow!");

    } else {
      this.health -= 50;
      console.log("Ewwww... you're ceramics skills are not as good as " +
        this.name + "'s!!! You lost 50 health points, now you have "  + this.health +
        " health points! Uh Oh!");

    }``
  };
}

function Weapon(options) {
  var options = options || {};
  this.name = options.name || "toothpick";
  this.strength = options.strength || "5";
};

function DrinkBeer(options) {
  var options = options || {};
  this.health = 20;
};
var hanklin = new Character({
  health: 400,
  name: "Hanklin",
  power: 20
});
var hanky = new Character({
  health: 500,
  name: "Hanky",
  power: 10
});
