Gör en menu .js med preload, create, startGame function

gör button dom startar StartGame funktionen
var Game_Over = {
	
	preload: function () {
		
		game.load.image('menu', './assets/images/menu.png');
		
	},
	create : function() {
		this.add.button(0,0, 'game_over', this.startGame, this);
	}
	
	
	


startGame: function () {

        // Change the state to the actual game.
        this.state.start('Game');

    }
	
};