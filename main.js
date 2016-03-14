

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
      if (this.weapon) {
        enemy.health = enemy.health - (this.power * this.weapon.strength);
        $('.comments').html("Ouch! " + enemy.name + " just got hit by a " + enemy.weapon
          .name + "!" + enemy.name + "'s health is now " + enemy.health + "!");
      } else {
        enemy.health = enemy.health - enemy.power;
      }
      if (enemy.health < 1) {
        $('body').html("<h1>Oh no! " + enemy.name +
          " has perished and was flushed down a toilet.</h1>" +
          "<img src='winning.jpg'>" + "<img src='winning.jpg'>" + "<img src='winning.jpg'>");
      }

    } else {
      $('.comments').html("Rats! You didn't hit " + enemy.name + " with the " +
        this.weapon.name + "!");
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
    $('.comments').html(this.name + ' drank ' + x +
      ' refreshing beers and now has ' + this.health +
      ' health points! Wow!');
  };
  this.pottery = function(enemy) {
    this.ouch(enemy);
  };
  this.ouch = function(enemy) {
    var random = Math.floor(Math.random() * 10 + 1);
    if (random > 4) {
      this.health += 50;
      $('.comments').html(
        "Neat, you made some pottery! It's so much prettier than what " +
        this.name + " made! You just earned 50 health points! Now you have " + this.health +
        " health points! Wow!");

    } else {
      this.health -= 50;
      $('.comments').html("Ewwww... you're ceramics skills are not as good as " +
        this.name + "'s!!! You lost 50 health points, now you have "  + this.health +
        " health points! Uh Oh!");

    }
  };




}

function Weapon(options) {
  var options = options || {};
  this.name = options.name || "toothpick";
  this.strength = options.strength || "5";
}

function DrinkBeer(options) {
  var options = options || {};
  this.health = 20;
}
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

$(document).ready(function() {
  hanklin.equip();
  hanky.equip();
  $('.hankyHealth').append(hanky.health);
    $('.hanklinHealth').append(hanklin.health);

});


$('.one').on('click', function(event){
  event.preventDefault();
  hanky.attack(hanklin);
  $('.hankyHealth').html(hanky.health);
  $('.hanklinHealth').html(hanklin.health);
});
$('.two').on('click', function(event){
  event.preventDefault();
  hanklin.attack(hanky);
  $('.hankyHealth').html(hanky.health);
  $('.hanklinHealth').html(hanklin.health);
});
$('.three').on('click', function(event){
  event.preventDefault();
  hanky.drink(1);
  $('.hankyHealth').html(hanky.health);
});
$('.four').on('click', function(event){
  event.preventDefault();
  hanklin.drink(1);
  $('.hanklinHealth').html(hanklin.health);
});
$('.five').on('click', function(event){
  event.preventDefault();
  hanky.pottery(hanklin);
  $('.hankyHealth').html(hanky.health);
  $('.hanklinHealth').html(hanklin.health);
});
$('.six').on('click', function(event){
  event.preventDefault();
  hanklin.pottery(hanky);
  $('.hankyHealth').html(hanky.health);
  $('.hanklinHealth').html(hanklin.health);
});
// $('.seven').on('click', function(event){
//   event.preventDefault();
//   hanky.equip("Super ToothPick!", 100);
//   $('.comments').html('Hanky has the power of the Super Tooth Pick!!');
//
// });
// $('.eight').on('click', function(event){
//   event.preventDefault();
//   hanklin.equip("PVC Piping!", 75);
//   $('.comments').html("Hanklin has the power of the Magical PVC Pipe!!")
//
// });
