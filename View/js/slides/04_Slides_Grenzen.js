SLIDES.push(
    {
        id: "grenzen",
        onjump: function (self) {
            let o = self.objects;

            let stage = addJochenStage(self);
            _.allBirnenGrid = addBirnenGrid(self, 20, 0);
            _.allNetwork = addNetwork21small(self, 180, 0);

            let all = [].concat(stage, [o[_.heatmap]]);
            actionOnAllObjects(all, _hide);
            actionOnAllObjects([
                o[_.jochen],
            ],_show, 100, 0)

            if(SHOW_SLIDE_NUMBER) _show(o[_.slideCounter]);

            _moveX(o[_.jochen], -210);

        },
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-1")
            o[_.topWords].setTextID("04_title")
            o[_.btmWords].setTextID("04_text1")

            _moveX(o[_.tablet], -200);

            o[_.jochen].changeImage(Loader.manifest.jochen_zufrieden);

            actionOnAllObjects(_.all_birnen,
                (b) => {
                    if (_.birnenForItem1.includes(b)) _fadeIn(b)
                    else _fadeOut(b, 0, 0.2)
                }, 500, 200)

            o[_.itemPicture].changeImage(Loader.manifest.birnenkuchen)
            actionOnAllObjects([
                o[_.topWords],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500);


            let countDownTime = 20
            let countDown = Array.from(Array(countDownTime).keys())

            countDown.forEach(i => {
                setTimeout(() => o[_.nextMiddle].setText2(Words.get("01_button_next") + " (" + (countDownTime - i) + ")"), 999 * i);
            })

            o[_.nextMiddle].deactivate()

            setTimeout(() => {
                o[_.nextMiddle].activate()
                o[_.nextMiddle].setText("01_button_next")
            }, countDownTime * 1000);

        },
        onend: function (self) {
            let o = self.objects;
            actionOnAllObjects([
                o[_.topWords],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _hide)
        }
    },
    {
      onstart:function (self) {
          let o = self.objects;

          o[_.jochen].changeImage(Loader.manifest.jochen_wuetend);
          o[_.btmWords].setTextID("04_text1b")
          o[_.slideCounter].setText("4-1b")

          actionOnAllObjects([
              o[_.btmWords],
              o[_.nextMiddle],
          ], _fadeIn, 500,500)

      }  ,
        onend: function (self) {
            let o = self.objects;

            actionOnAllObjects([
                o[_.topWords],
                o[_.btmWords],
            ], _hide)
            actionOnAllObjects(_.allBirnenGrid, _fadeOut)
            actionOnAllObjects(_.allNetwork, _fadeOut)

        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-2")
            o[_.btmWords].setTextID("04_text2")


            o[_.jochen].changeImage(Loader.manifest.jochen_verduzt);

            _moveX(o[_.jochen], 210);

            actionOnAllObjects([
                o[_.tochter],
                o[_.btmWords],
                o[_.nextMiddle],
            ], _fadeIn, 1000, 500);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-3")
            o[_.btmWords].setTextID("04_text3")
            o[_.jochen].changeImage(Loader.manifest.jochen_laecheln);


            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-4")
            o[_.btmWords].setTextID("04_text4")

            _fadeIn(o[_.tablet]);
            _moveX(o[_.tablet], 200, 750);

            _fadeIn(o[_.btmWords], 1250);
            _fadeIn(o[_.nextMiddle], 1750);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
        }
    },
    {
        onstart: function (self) {
            let o = self.objects;
            o[_.slideCounter].setText("4-5")
            o[_.btmWords].setTextID("04_text5")
            o[_.jochen].changeImage(Loader.manifest.jochen_erstaunt);
            o[_.nextMiddle].changeOnClick(() => publish("slideshow/scratch"));


            _fadeIn(o[_.pencils], 0);
            _fadeIn(o[_.btmWords], 500);
            _fadeIn(o[_.nextMiddle], 1000);
        },
        onend: function (self) {
            let o = self.objects;
            _hide(o[_.pencils])
            _hide(o[_.btmWords])
            _hide(o[_.nextMiddle])
            unlisten(_)
            unlisten(_.network)
            self.clear()
        }
    },
);