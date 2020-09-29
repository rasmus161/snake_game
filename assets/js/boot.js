var Boot = {

	preload: function () {
		game.load.image('progressBar', './assets/images/progressBar.png');
	
		
		
	},

	create: function() { 
		//game.stage.backgroundColor = '#3498db';
		game.physics.startSystem(Phaser.Physics.ARCADE);
		//game.physics.startSystem(Phaser.Physics.NINJA);
		 console.log("Boooot foobar");

		game.state.start('Load');
	}
};