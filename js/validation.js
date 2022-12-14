"use strict";



let registration = document.getElementById('registration')


registration.addEventListener('submit', function(event) {
    event.preventDefault();
    let errors = {};
    let form = event.target


    let username = document.getElementById('username').value;

    if (username == "" && username.length < 5) {
        errors.username = 'This field can not be empty and must contain at least 5 characters'
    }

let email = document.getElementById("email");

email.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("text");
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailRegex)) {
    errorEmail.innerText = "Your Email is Valid";
    errorEmail.style.color = "green";
  } else {
    errorEmail.innerText = "Your Email is invalid";
    errorEmail.style.color = "red";
  }

  if (emailValue == "") {
    errorEmail.innerText = " ";
  }
});

email.addEventListener("focus", function (event) {
  event.target.style.border = "2px solid green";
  event.target.style.outline = "none";
});


let password = document.getElementById('password').value;
let password2 = document.getElementById('password2').value;

if (password == "") {
    errors.pasww = "This field can not be empty";
  }
  if (password != password2) {
    errors.pasww2 = "Passwords do not match";
  }


  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree with terms and conditions";
  }


  let gender = false;
  form.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select your gender";
  }

  console.log(errors);



  for (let item in errors) {


    let error_span = document.getElementById("error_" + item);

    if (error_span) {
        error_span.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});


let showPassword = document.getElementById("password",);
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (showPassword.type == "password") {
    showPassword.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
    showPassword.setAttribute("type", "password");
  }
});

let showPassword2 = document.getElementById("password2");
let toggleIcon2 = document.getElementById("toggleIcon2");

toggleIcon.addEventListener("click", function () {
  if (showPassword2.type == "password") {
    showPassword2.setAttribute("type", "text");
    toggleIcon2.classList.remove("fa-eye");
    toggleIcon2.classList.add("fa-eye-slash");
  } else {
    toggleIcon2.classList.remove("fa-eye-slash");
    toggleIcon2.classList.add("fa-eye");
    showPassword2.setAttribute("type", "password");
  }
});