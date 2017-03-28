$(document).ready(function() {

//Storyline:  Someone comes and opens the page.  They put in their name.  They sit and wait until another person comes.  That other person is assigned to them.  Then the battle child is instantiated.  Each person clicks on an image.  The first one that does has their the value of their click added to the database object.  The second one just retrieves the value and tests for a win, lose or tie.  This one sucks for the reason that I had this DOWN, so well developed.  Bugs and time.  My nemeses.

  // ------------------------ Variables and Objects -------------------------------
  //Instantiate the db.
    var database = firebase.database();

    // used to get access to the fields that we need.  I don't know if this works yet.
    var playerPlace = "https://rockpaperscissors-b291f.firebaseio.com/player"
    var userBattle = "https://rockpaperscissors-b291f.firebaseio.com/battle"

    // Player information to add with they come on in.
    var player = {
      name: "",
      wins: 0,
      losses: 0,
      ties: 0,
      comment: "",  // not built yet
      timeAdded: firebase.database.ServerValue.TIMESTAMP,
      status: 0,
    }

    //Battle information: when each person click on an image a value is sent in. It should be tested to see who one.

  var battle = {
    battleName: "", // not built yet. a concatented string of both players names.  Not built yet
    playerName: "", // not built yet. the first person to click a rock scissors or paper
    playerChoice: "", // not built yet. he value of their choice
  }

  // ------------------------------------------ Functions ------------------------------

// Push the new player's information into the database.
// For later, I am going to set a session cookie to retreive information.  Slightly different thanormal but I think it will work.  That cookie is actually the url for the record. in the db.  Figure that would be pretty easy.

    function addPlayer(){
        player.name = $("#nameInput").val().trim();
         var theReturn = database.ref().push({player});
 // I added this addition storage piece for the localStorage because I don't necessarily trust transactions here yet.
         setACookie(theReturn);
         $("#playerName").append("player.name");
       };

//     Set a cookie with the URL that return when you put it in.
      function setACookie(theurl){
        console.log("made it to set the cookie");
        $.cookie("player",theurl, {expires: 1});
        console.log(theurl+" is the cookie." )
      }


// Not built yet
      checkForGame: {



      }




// ----------------------------------      listeners

$("#joinGame").on("click",function(event){
      event.preventDefault();
      addPlayer();
      // checkForPlayer(); // not built yet
    });

    // When you click on an image, it should send in your username and the letter.  If theirs  is there too, it will test who won.  If not, it will set and wait
          $(".big3")on("click", function(event){
            event.preventDefault();
            checkForGame(); //not built yet
            recordRound(); //not built yet
            eraseRound(); //not built yet.
          }

// checks if there is anyone waiting to play and if so sets the new person as their partner
// if no one, then wait.  I want to do something with closing the browser too.
database.ref().on("child_added", function(childSnapshot) {
//    var ref = database.ref("partner")

}

database.ref().on("value",function(){


})


//
// This will check to see if they have been around in the past day, and if so, find them.
//  I will use a cookie then query the database to get stuff associated with the person.
// database.ref().on("value", function(snapshot) {
//   if (typeof $.cookie("user") !== 'undefined'{
//     usersId = $.parseHTML(str)
//
//     snapshot.child("")
//
//   }
  if (snapshot.child)


}




   });

})
