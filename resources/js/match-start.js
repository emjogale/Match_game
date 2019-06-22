var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function() {
  var $game = $('#game');
  var values = MatchGame.generateCardValues();
  MatchGame.renderCards(values, $game);
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var sequentialValues = [];

  for (var i = 1; i <= 8; i++) {
    sequentialValues.push(i);
    sequentialValues.push(i);
  }

  var randValues = [];

  while (sequentialValues.length > 0) {
    var randomIndex = Math.floor(Math.random() * sequentialValues.length);
    var randomValue = sequentialValues.splice(randomIndex, 1)[0];
    randValues.push(randomValue);
  }

  return randValues;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(randValues, $game) {
  var colors = [
    'hsl(25,85%,65%)',
    'hsl(55,85%,65%)',
    'hsl(90,85%,65%)',
    'hsl(160,85%,65%)',
    'hsl(220,85%,65%)',
    'hsl(265,85%,65%)',
    'hsl(310,85%,65%)',
    'hsl(360,85%,65%)'];

  $game.empty();

  for (var j=0; j<randValues.length; j++) {
  /* adding a data attribute to represent the card's value as the current index in cardValues*/
    var value = randValues[j];
  /*adding a color from the list of colors*/
    var color = colors[value - 1];
    var data = {
      value: value,
      color: color,
      isFlipped: false
    };
    var $card = $('<div class="col-xs-3 card" ></div>');
    $card.data(data);
    $game.append($card);
  }
  /* end for()*/


};
/* end renderCards*/
/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
