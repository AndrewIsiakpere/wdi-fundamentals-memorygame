console.log("Up and running!");


var cards = [

{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-hearts.png',
},
]

var cardsInPlay = [];



console.log()
console.log("Use flipped" + cardOne)
console.log("User flipped" + cardTwo)

cardsInPlay.push("card0ne", "cardTwo");




var checkForMatch = function(){

	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match");
		} else {
			alert("sorry, try again");
		}
	}

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards [cardId].cardImage);
	if (cardsInPlay.length === 2) checkForMatch();
	console.log("User flipped" + cards[cardId].rank);
	console.log(cards[cardId}.cardImage);
	console.log(cards{cardId}.suit);



this.setAttribute('src', (cards(cardId).cardImage));

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay [1]) { 
			alert("you found a match")
		}	
		else {
			alert("sorry, try again.")
		}
	}
	checkForMatch();
};

var createBoard = function() {
	for (var I = 0; i< cards.length; I++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
};

var card0ne = cards[0];
var cardTwo = cards[1];

createBoard();
