/********************

0. Introduction
1. One Game
2. Repeated Game
3. One Tournament
4. Repeated Tournament
5. Making Mistaeks
6. Sandbox
7. Conclusion
X. Credits

Labels should be in the en.html folder

*********************/

Loader.addToManifest(Loader.manifest,{
	//Birnenassets
	b1: "assets/birnen/b1.png",
	b2: "assets/birnen/b2.png",
	b3: "assets/birnen/b3.png",
	b4: "assets/birnen/b4.png",
	b5: "assets/birnen/b5.png",
	b6: "assets/birnen/b6.png",
	b7: "assets/birnen/b7.png",
	b8: "assets/birnen/b8.png",
	birnenkuchen: "assets/birnen/birnenkuchen.png",
	birnenmarmelade: "assets/birnen/birnenmarmelade.png",
	birnenbier: "assets/birnen/birnensaft.png",
	right: "assets/birnen/Right.png",
	wrong: "assets/birnen/Wrong.png",
	tablet1: "assets/birnen/tablet1.jpg",
	tablet2: "assets/birnen/tablet2.jpg",
	birnenscanner: "assets/birnen/birnenScanner.jpg",
	arrow: "assets/Jochen/arrow.PNG",
	jochen_aua: "assets/Jochen/Jochen_aua.jpg",
	jochen_erstaunt: "assets/Jochen/Jochen_erstaunt.jpg",
	jochen_fragend: "assets/Jochen/Jochen_fragend.jpg",
	jochen_kamera: "assets/Jochen/Jochen_kamera.jpg",
	jochen_laecheln: "assets/Jochen/Jochen_laecheln.jpg",
	jochen_leer: "assets/Jochen/Jochen_leer.jpg",
	jochen_stars: "assets/Jochen/Jochen_stars.jpg",
	jochen_verduzt: "assets/Jochen/Jochen_verduzt.jpg",
	jochen_wuetend: "assets/Jochen/Jochen_wuetend.jpg",
	jochen_zufrieden: "assets/Jochen/Jochen_zufrieden.jpg",
	tochter: "assets/Jochen/Tochter.PNG",
	wrong1: "assets/Jochen/wrong1.PNG",
	wrong2: "assets/Jochen/wrong2.PNG",
	wrong3: "assets/Jochen/wrong3.PNG",
	network_bias: "assets/birnen/blau/bias.png",
	network_bigLinks: "assets/birnen/blau/dingslinks.png",
	network_bigRechts: "assets/birnen/blau/dingsrechts.png",
	network_smallLinks: "assets/birnen/blau/linksteil.png",
	network_smallRechts: "assets/birnen/blau/teilrechts.png",
	network_pfeilRechts: "assets/birnen/blau/pfeilrechtsblau.png",
	network_explainTall: "assets/birnen/schwarz/explainTall.png",


	// CSS ASSETS
	cssAsset0: "assets/ui/button.png",
	cssAsset1: "assets/ui/button_short.png",
	cssAsset2: "assets/ui/button_long.png",
	cssAsset3: "assets/ui/sandbox_tabs.png",
	cssAsset4: "assets/ui/sandbox_incdec.png",
	cssAsset5: "assets/ui/slider_bg.png",
	cssAsset6: "assets/ui/slider_knob.png",
	cssAsset7: "assets/ui/sandbox_hats.png",
	cssAsset8: "assets/ui/scratch.png",
	cssAsset9: "assets/iterated/iterated_scoreboard.png",
	cssAsset10: "assets/tournament/peep_characters.png",
	cssAsset11: "assets/ui/sandbox_hats.png",
	cssAsset12: "assets/tournament/score_small.png",

	// Music!
	bg_music: "assets/sounds/bg_music.mp3",

	// IMAGE BOXES
	image1: "assets/evolution/evolution_intro.png",
	image2: "assets/conclusion/summary.png",
	image3: "assets/conclusion/truce.jpg",

});

SLIDES.push({

	//id: "preloader",
	onstart: function(self){

		var o = self.objects;

		// Splash in background
		self.add({ id:"splash", type:"Splash" });

		// TITLE TEXT
		self.add({
			id:"title", type:"TextBox",
			x:130, y:80, width:700,
			size:100, lineHeight:0.9, align:"center",
			text_id:"title"
		});
		self.add({
			id:"subtitle", type:"TextBox",
			x:267, y:344, width:420,
			align:"center", color:"#aaa", size:15,
			text_id:"subtitle"
		});

		// Button
		self.add({
			id:"loading_button", type:"Button", x:382, y:410,
			text_id:"loading",
			active:false
		});
		var _loadingWords = function(ratio){
			ratio = Math.round(ratio*100);
			o.loading_button.setText2(Words.get("loading")+" "+ratio+"%");
		};

		// PRELOADER
		listen(self,"preloader/progress", function(ratio){
			_loadingWords(ratio);
		});
		listen(self,"preloader/done", function(){
			o.loading_button.setText("loading_done");
			o.loading_button.activate();
			o.loading_button.config.onclick = function(){
				publish("start/game");
				//Loader.sounds.bg_music.volume(0.75).loop(true).play(); // play music!
			};
		});

	},
	onend: function(self){
		unlisten(self);
		self.remove("title");
		self.remove("subtitle");
		self.remove("loading_button");
	}

});

SLIDES.push({
	id: "intro",
	onjump: function(self){
		// Splash in background
		self.add({ id:"splash", type:"Splash" });
	},
	onstart: function(self){

		var o = self.objects;
		
		// Circular Wordbox
		self.add({
			id:"intro_text", type:"TextBox",
			x:130, y:10, width:700, height:500, align:"center",
			text_id:"intro"
		});

		// Button
		self.add({
			id:"intro_button", type:"Button", x:304, y:466, size:"long",
			text_id:"intro_button", 
			message:"slideshow/scratch"
		});

		_hide(o.intro_text); _fadeIn(o.intro_text, 200);
		_hide(o.intro_button); _fadeIn(o.intro_button, 700);

	},
	onend: function(self){
		self.clear();
	}

});