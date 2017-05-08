var config = {
    apiKey: "AIzaSyAmGE9vdcy7EOXH_7DTD1gf-C_AIJ8WRlI",
    authDomain: "do-intento.firebaseapp.com",
    databaseURL: "https://do-intento.firebaseio.com",
    projectId: "do-intento",
    storageBucket: "do-intento.appspot.com",
    messagingSenderId: "122659382300"
  };
  firebase.initializeApp(config);


function LoginGmail(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert ('Usuario ya ingresado');
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

function LoginFacebook(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert ("Usuario ya ingresado");
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

/*function LoginTwitter(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.TwitterAuthProvider();
    //provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert("Usuario ya ingresado");
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}*/

function LoginGitHub(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('user:email');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert ("Usuario ya ingresado");
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

document.getElementById('btn-gmail').addEventListener('click', LoginGmail, false);
document.getElementById('btn-facebook').addEventListener('click', LoginFacebook, false);
document.getElementById('btn-github').addEventListener('click', LoginGitHub, false);