       var colorChange = ["green", "red", "yellow", "blue"];
       var enter = false;
       var addedColor = [];
       var myColor = [];
       var numOfClicks = 0;

       document.addEventListener("keypress", start);
       var btnEle = document.getElementsByClassName("btn");
       for (let i = 0; i < btnEle.length; i++) {
         btnEle[i].addEventListener("mousedown",pressedDown);
         // btnEle[i].addEventListener("mouseup", function() {
         //
         // });
         btnEle[i].addEventListener("click", yourSequence);
       }

      function pressedDown(evt){
        evt.target.classList.add("apply-black");
        var audio = new Audio('sounds/blue.mp3');
        audio.play();
        setTimeout(function(){
          evt.target.classList.remove("apply-black");
          console.log("OKDODOKDODKOKDKODK");
        },200);
       }


       function start() {
         if (!enter) {
           document.querySelector("body").style.backgroundColor = "#011F3F";
           var audio = new Audio("sounds/yellow.mp3");
           audio.play();
           setTimeout(function() {
             createRandom();
           }, 500);
           enter = true;
         }
       }

       function createRandom() {
         var num = Math.floor(Math.random() * 4);
         console.log(num);
         addedColor.push(colorChange[num]);
         pressed(colorChange[num]);
       }

       function pressed(cN) {
         document.getElementById(cN).classList.add("apply-black");
         var audio = new Audio('sounds/red.mp3');
         audio.play();
         setTimeout(function() {
           document.getElementById(cN).classList.remove("apply-black");
         }, 300);
       }

       var clicks = 0;

       function yourSequence() {
         if (enter) {
           myColor.push(this.id);
           clicks++;
           console.log(addedColor);
           console.log(myColor);
           if (cmpre(addedColor, myColor)) {
             if (clicks == addedColor.length) {
               console.log("IN CMPRE");
               myColor = [];
               setTimeout(function() {
                 createRandom();
               }, 500);
               clicks = 0;
             }
           } else {
             document.querySelector("body").style.backgroundColor = "red";
             audio = new Audio("sounds/wrong.mp3");
             audio.play();
             addedColor = [];
             myColor = [];
             enter = false;
             clicks = 0;
           }
         }
       }

       function cmpre(addedColor, myColor) {
         for (let i = 0; i < myColor.length; i++) {
           if (addedColor[i] !== myColor[i]) {
             return false;
           }
         }
         return true;
       }

       var getValue = 0;

       // function interval() {
       //   var playMemory = setInterval(function() {
       //     colorChange.forEach((color) => {
       //       document.getElementById(color).style.backgroundColor = color;
       //     });
       //
       //     setTimeout(function() {
       //       if (getValue >= addedColor.length) {
       //         getValue = 0;
       //         clearInterval(playMemory);
       //       } else {
       //         document.getElementById(addedColor[getValue++]).style.backgroundColor = "black";
       //       }
       //     }, 500)
       //
       //
       //   }, 1000);
       // }
       //
       // document.getElementById("play").addEventListener("click", interval);
