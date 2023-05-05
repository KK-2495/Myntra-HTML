// *********Register Function*******//
function register(event) {
  event.preventDefault();
  var name = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var password = document.getElementById("userPassword").value;
  var confirmPassword = document.getElementById("userConfirmPassword").value;

  if (name && email && password && confirmPassword) {
    if (password.length >= 8 && confirmPassword.length >= 8) {
      if (password == confirmPassword) {
        var mynUsers = JSON.parse(localStorage.getItem("myntraNewUser")) || [];
        var flagForEmail = false;

        for (var i = 0; i < mynUsers.length; i++) {
          if (mynUsers[i].mynEmail == email) {
            flagForEmail = true;
          }
        }
        if (!flagForEmail) {
          var userInfo = {
            mynUser: name,
            mynEmail: email,
            mynPassword: password,
            mynConfirmPassword: confirmPassword,
          };
          mynUsers.push(userInfo);
          localStorage.setItem("myntraNewUser", JSON.stringify(mynUsers));
          alert("Registered Successful.");
          document.getElementById("userName").value="";
          document.getElementById("userEmail").value="";
          document.getElementById("userPassword").value="";
          document.getElementById("userConfirmPassword").value="";
        } else {
          alert("You're Already Registered with this Email");
          window.location.href = `./Login.html`;
        }
      } else {
        alert("Passwords doesn't Match.");
      }
    } else {
      alert("Passwords must be more than Eight");
    }
  } else {
    alert("All fields are mandatory.");
  }
}

// ************Login Function***********//

function login(event) {
  event.preventDefault();

  var email = document.getElementById("userEmail").value;
  var password = document.getElementById("userPassword").value;

  var activeUser = JSON.parse(localStorage.getItem("myntraNewUser"));

  var flagForEmail = false;
  var currentUser;
  for (var i = 0; i < activeUser.length; i++) {
    if (
      activeUser[i].mynEmail == email &&
      activeUser[i].mynPassword == password
    ) {
      flagForEmail = true;
      currentUser = activeUser[i];
    }
  }
  if (flagForEmail == true) {
    localStorage.setItem("myntraActiveUser", JSON.stringify(currentUser));
    alert("Logged IN ");
    window.location.href = `./Myntra.html`;
  } else {
    alert("Please Register to Login..");
  }
}
