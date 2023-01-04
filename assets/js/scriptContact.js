var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

//When button is clicked, will store user input as data in local storage uder object varibale user
signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});