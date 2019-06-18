var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var sequentialValues = [];

  for (i = 1; i <= 8; i++) {
    sequentialValues.push(i);
    sequentialValues.push(i);
  }

  var randValues = [];

  while (sequentialValues.length > 0){
    var randomIndex = Math.floor(Math.random()*sequentialValues.length);
    var randomValue = sequentialValues.splice(randomIndex, 1)[0];
    randValues.push(randomValue);
}

  return randValues;
};


/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/



MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
