// Sätter in globala variabler som vi behöver i spelet
var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue, textStyle_Key, textStyle_Value;

var Game = {
	
	preload : function() {
		game.load.image('snake', './assets/images/snake.png');
		game.load.image('apple', './assets/images/apple.png');
		
	},
	
	create : function() {
		
		apple = {};                     // An object for the apple;
		squareSize = 15;                // The length of a side of the squares. Our image is 15x15 pixels.
		// ändra färgen kolla att den funkar
	game.stage.backgroundColor = '#061fff';	
	console.log("FOO");
	
	// här sätter vi äpplet in
	
        this.generateApple();
		
	},
	
	update : function() {
		
		
	},
	
	generateApple: function(){

        // Chose a random place on the grid.
        // X is between 0 and 585 (39*15)
        // Y is between 0 and 435 (29*15)

        var randomX = Math.floor(Math.random() * 40 ) * squareSize,
            randomY = Math.floor(Math.random() * 30 ) * squareSize;

        // Add a new apple.
        apple = game.add.sprite(randomX, randomY, 'apple');
    },
	
	
	
	
	
	
	
	
};