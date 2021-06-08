// THE TRUST GAME - COOPERATE, YA NO?
SLIDES.push({

    id: "welcome",

    onstart: function(self){

        // Words on top & bottom
        self.add({
            id:"topWords", type:"TextBox", text_id:"00_title",
            x:130, y:10, width:700, height:100, align:"center"
        });
        self.add({
            id:"btmWords", type:"TextBox", text_id:"00_content_0",
            x:130, y:60, width:700, height:100, align:"center"
        });


        // Buttons
        self.add({
            id:"btnCheat", type:"Button", x:275, y:463, text_id:"00_button_next", uppercase:true,
            onclick:function(){
                publish("slideshow/next");
            }
        });

    },
    onend: function(self){
        self.remove("topWords");
        self.remove("btmWords");
        self.remove("btnCheat");
    }

});
//SLIDES.push({});

