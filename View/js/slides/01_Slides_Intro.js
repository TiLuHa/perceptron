// THE TRUST GAME - COOPERATE, YA NO?
SLIDES.push({

    id: "testi",

    onstart: function(self){

        // Words on top & bottom
        self.add({
            id:"topWords", type:"TextBox", text_id:"oneoff_0_top",
            x:130, y:10, width:700, height:100, align:"center"
        });
        self.add({
            id:"btmWords", type:"TextBox", text_id:"oneoff_0_btm",
            x:130, y:397, width:700, height:100, align:"center"
        });

        // Labels
        self.add({
            id:"labelYou", type:"TextBox",
            x:211, y:201, width:50, height:50,
            align:"center", color:"#aaa", size:17,
            text_id:"label_you"
        });
        self.add({
            id:"labelThem", type:"TextBox",
            x:702, y:189, width:50, height:50,
            align:"center", color:"#aaa", size:17,
            text_id:"label_them"
        });

        // Buttons
        self.add({
            id:"btnCheat", type:"Button", x:275, y:463, text_id:"label_cheat", uppercase:true,
            onclick:function(){
                _.answer = "CHEAT";
                publish("slideshow/next");
            }
        });
        self.add({
            id:"btnCooperate", type:"Button", x:495, y:460, text_id:"label_cooperate", uppercase:true,
            onclick:function(){
                _.answer = "COOPERATE";
                publish("slideshow/next");
            }
        });

    },
    onend: function(self){
        //self.remove("labelYou");
        //self.remove("labelThem");
    }

});

