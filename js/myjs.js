//FIREBASE
var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    provider.setCustomParameters({
    'login_hint': 'user@example.com'
    });
var user;

$( document ).ready(function() {
    $("#mainPage").hide();
});

function signIn() {
	firebase.auth().signInWithPopup(provider).then(function(result) {
	  // This gives you a Google Access Token. You can use it to access the Google API.
	  var token = result.credential.accessToken;
	  // The signed-in user info.
	  user = result.user;
      showMainPageContainer();
      
      
	  // ...
	}).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // The email of the user's account used.
	  var email = error.email;
	  // The firebase.auth.AuthCredential type that was used.
	  var credential = error.credential;
	  // ...
	});
}

function showMainPageContainer() {
    $("#login").hide();
    $("#mainPage").show();
    $("#welcomeText").html("Hello, " + user.displayName);
}

$(".dropdown").on("hide.bs.dropdown", function(event){
    var text = $(event.relatedTarget).text();
    firebase.database().ref('Users/' + user.uid).set({
        name: user.displayName,
        email: user.email
    });
    
});

var createGame = document.getElementById("createGame");
var createButton = document.getElementById("createButton");

createButton.addEventListener('click', e => {
    var gameCreated = createGame.value;
    var auth = firebase.auth();
    
});



// DROP-DOWN MENU: When the user clicks on the button, toggle between hiding and showing the dropdown content 
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}