


var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var usernameInput = document.getElementById("username");

// Sign up a new user with email and password
function signUp() {
    var email = emailInput.value;
    var password = passwordInput.value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(async function (error) {

            var username = usernameInput.value;
            await   fetch(`https://snippt.onrender.com/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password
                })
            }).then(response => response.json())
                .then(data => {
                    console.log('Success:', data);
                    alert('User Signed Up Successfully');
                    })
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error: ' + errorMessage);
            alert(errorMessage);
        });
}

// Sign in an existing user with email and password
function signIn() {
    var email = emailInput.value;
    var password = passwordInput.value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log('Error: '+ errorMessage)
            alert("Wrong Password or Email");

        });
}

// Sign out the current user
function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);

    });
}
//
// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//         // User is signed in.
//         alert('User Logged in with ' + user.email)
//
//         document.getElementById("email").value = user.email;
//         document.getElementById("label").innerHTML = 'User Logged in Email is';
//         document.getElementById("id_pass").style.display = "none";
//
//         document.getElementById("sign_out").style.display = "block";
//         document.getElementById("sign_in").style.display = "none";
//         document.getElementById("sign_up").style.display = "none";
//     } else {
//         // User is signed out.
//         document.getElementById("email").innerHTML = "";
//         document.getElementById("sign_out").style.display = "none";
//         document.getElementById("sign_in").style.display = "block";
//         document.getElementById("sign_up").style.display = "block";
//     }
// });
//
