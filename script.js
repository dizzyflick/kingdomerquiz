window.onload=function(){

   var quiz = {

        title: 'Which Kingdomer type are you?',
        questions: [
          {
            text: "What season do you thrive in?",
            responses: [
              {text: 'Spring', respond: 'a'}, 
              {text: 'Summer', respond: 'c'}, 
              {text: 'Fall', respond: 'd'}, 
              {text: 'Winter', respond: 'e'}, 
            ]
          }, {
            text: "Pick an element:", 
            responses: [
              {text: 'Water', respond: 'e'}, 
              {text: 'Earth', respond: 'c'}, 
              {text: 'Fire', respond: 'b'},
              {text: 'Air', respond: 'd'},
              {text: '...Friendship?', respond: 'a'},
            ]
          }, {
            text: "Do you swear allegiance to the king?", 
            responses: [
              {text: 'NO!! FREEDOM!!!', respond: 'a'}, 
              {text: 'I\'m not into politics', respond: 'c'}, 
              {text: 'Of course! Long live Calvaria!', respond: 'b'},
            ]
          }, {
            text: "Would you consider yourself an...", 
            responses: [
              {text: 'Extrovert', respond: 'a'}, 
              {text: 'Introvert', respond: 'b'}, 
              {text: 'Ambivert', respond: 'd'},
            ]
          }, {
            text: "Preferred genre:", 
            responses: [
              {text: 'Sci fi', respond: 'e'}, 
              {text: 'Fantasy', respond: 'a'}, 
              {text: 'Mystery', respond: 'b'},
              {text: 'Romance', respond: 'd'},
              {text: 'Nonfiction', respond: 'c'},
            ]
          }, {
            text: "Ye find yeself in yon dungeon. Ye see a SCROLL. Behind ye scroll is a FLASK. Obvious exits are NORTH, SOUTH and DENNIS", 
            responses: [
              {text: 'What', respond: 'c'}, 
              {text: '>GET YE FLASK', respond: 'a'}, 
              {text: '>LOOK SCROLL', respond: 'e'}, 
              {text: '>THROW BABY', respond: 'b'}, 
            ]
          }, {
            text: "Environment:", 
            responses: [
              {text: 'Mountains', respond: 'e'}, 
              {text: 'Open fields', respond: 'a'}, 
              {text: 'Forests', respond: 'd'},
              {text: 'Deserts', respond: 'c'},
              {text: 'Anywhere!', respond: 'b'},
            ]
          }, {
            text: "Can I take your order?", 
            responses: [
              {text: 'No', respond: 'b'}, 
              {text: 'Give me a second, I just can\'t decide!', respond: 'e'}, 
              {text: 'Yes?', respond: 'a'},
              {text: 'Yes.', respond: 'c'},
              {text: 'Yes!', respond: 'd'},
            ]
          }, {
            text: "Are you the type of person to take personality quizzes?", 
            responses: [
              {text: 'Yes', respond: 'a'}, 
              {text: 'No', respond: 'b'}, 
              {text: 'I... am now?', respond: 'c'},
            ]
          }
        ]
   };

   new Vue({
     el: '#app',
     data: { 
       color: 'white',
       image: '/images/griffon.png',
       region: 'elsewhere',
       description: 'you are a mystery, from a far-off land. There\'s no telling what you can do!',
       quiz: quiz,
       questionIndex: 0,
       userResponses: Array(quiz.questions.length).fill(0)
    },
    methods: {
       next: function() {
         this.questionIndex++;
       },
       prev: function() {
         this.questionIndex--;
       },
       score: function() {
         var mostA = 0;
         var mostB = 0;
         var mostC = 0;
         var mostD = 0;
         var mostE = 0;
         var mostF = 0;
         for (var i = 0; i < quiz.questions.length; i++) {
	   if (this.userResponses[i] === 'a') {
                 mostA++;
             }
             else if (this.userResponses[i] === 'b'){
                 mostB++;
             }
             else if (this.userResponses[i] === 'c'){
                 mostC++;
             }
             else if (this.userResponses[i] === 'd'){
                 mostD++;
             }
             else if (this.userResponses[i] === 'e'){
                 mostE++;
             }

         }
         if (mostA > mostB && mostA > mostC && mostA > mostD && mostA > mostE) {
         	this.color = '#f5a8e7';
         	this.image = '/images/pony.png';
         	this.region = 'UPL (pink area on map)';
         	this.description = 'Adaptable and varied, they can be found all across the globe. Their magic makes them suited to many jobs and situations.';
             return 'Pony';
         }
		else if (mostB > mostA && mostB > mostC && mostB > mostD && mostB > mostE) {
			this.color = '#cea8f5'; 
			this.image = '/images/horse.png';
			this.region = 'Calvaria (violet area on map)';
         	this.description = 'Somewhat proud and traditional, the horses make up for their lack of magic with advances in technology and weaponry.';
         return 'Horse';
        }
        else if (mostC > mostB && mostC > mostA && mostC > mostD && mostC > mostE) {
			this.color = '#eff5a8'; 
			this.image = '/images/camel.png';
			this.region = 'New Mesa (yellow area on map)';
         	this.description = 'Resourceful and intelligent, the camels develop a lot of tech and often negotiate with other innovators around the world.';
         return 'Camel';
        }
        else if (mostD > mostB && mostD > mostA && mostD > mostA && mostD > mostE) {
			this.color = '#f5c6a8'; 
			this.image = '/images/llama.png';
			this.region = 'Nowhere in particular. Travelers.(towns found in orange area on map)';
         	this.description = 'Philosophers and artists throughout their ranks, the "llomads," as they\'re sometimes known, can\'t stay in one place for too long.';
         return 'Llama';
        }
        else if (mostE > mostB && mostE > mostA && mostE > mostD && mostE > mostA) {
			this.color = '#f5a8a8'; 
			this.image = '/images/dragon.png';
			this.region = 'North Dragon Caverns (red area on map)';
         	this.description = 'Secluded and mysterious, the dragons have abilities most others do not yet know of.';
         return 'Dragon';
        }
        else {
        	this.color = 'white';
        	this.image = '/images/griffon.png';
        	this.region = 'elsewhere';
        	this.description = 'you are a mystery, from a far-off land. There\'s no telling what you can do!';
        	return 'Foreigner';
        }
    }
    }
   });
}

