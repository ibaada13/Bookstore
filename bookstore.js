// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyA-nO8zfTZGMTl3RwQ4VoUjV3gkY5Ng66I",
    authDomain: "bookstore-d2953.firebaseapp.com",
    databaseURL: "https://bookstore-d2953-default-rtdb.firebaseio.com",
    projectId: "bookstore-d2953",
    storageBucket: "bookstore-d2953.appspot.com",
    messagingSenderId: "717489886615",
    appId: "1:717489886615:web:464a4829bcf4bb4e7160d2",
    measurementId: "G-TXEX3Z9MLN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  //reference messeages collection
  var msgRef = firebase.database().ref('messages');


//listening for form on main page
document.getElementById('books').addEventListener('submit', donation);

//submitting the form through donation button
function donation(e){
    e.preventDefault();
    
    //retrieving values
    var book = getInputVal('book'); //retrieving values from form
    var author = getInputVal('author');

    //saving messages
    saveMsg(book, author);

}

//function to get values from form
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMsg(book, author) {
    var newMsgRef = msgRef.push();
    newMsgRef.set({
        book: book,
        author: author
    });
}
