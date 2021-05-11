function validateUsername() {
  const username = document.getElementById('username').value;
  const isValid = /^[a-zA-Z0-9_]{3,10}$/.test(username);

  if (isValid) {
    document.getElementById('wrongUsername').style.display = "none";
    document.getElementById('username').style.borderColor = "#c3cdc0";
    return true;
  }

  document.getElementById('wrongUsername').style.display = "flex";
  document.getElementById('username').style.borderColor = "#b0706d";
  return false;
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const isValid = !(password.length < 6 || !/[A-Z]+/.test(password) || !/[a-z]+/.test(password) || !/[0-9]+/.test(password))

  if (isValid) {
    document.getElementById('wrongPassword').style.display = "none";
    document.getElementById('password').style.borderColor = "#c3cdc0";
    return true;
  }

  document.getElementById('wrongPassword').style.display = "flex";
  document.getElementById('password').style.borderColor = "#b0706d";
  return false;
}

function validatePhone() {
  const phone = document.getElementById('phone').value;
  const isValid = /^0[0-9]{9}$/.test(phone.replace(/\s/g, ''));

  if (isValid) {
    document.getElementById('wrongPhone').style.display = "none";
    document.getElementById('phone').style.borderColor = "#c3cdc0";
    return true;
  }

  document.getElementById('wrongPhone').style.display = "flex";
  document.getElementById('phone').style.borderColor = "#b0706d";
  return false;
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = regex.test(String(email).toLowerCase());

  if (isValid) {
    document.getElementById('wrongEmail').style.display = "none";
    document.getElementById('email').style.borderColor = "#c3cdc0";
    return true;
  }

  document.getElementById('wrongEmail').style.display = "flex";
  document.getElementById('email').style.borderColor = "#b0706d";
  return false;
}

function validateConfirmPassword() {
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const isValid = (password === confirmPassword);

  if (isValid) {
    document.getElementById('wrongConfirmPassword').style.display = "none";
    document.getElementById('confirmPassword').style.borderColor = "#c3cdc0";
    return true;
  }

  document.getElementById('wrongConfirmPassword').style.display = "flex";
  document.getElementById('confirmPassword').style.borderColor = "#b0706d";
  return false;
}

function validateNumberAppartement() {
  const number = document.getElementById('numberAppartement').value;
  const isValid = /^[0-9]+$/.test(number);

  if (isValid) {
    document.getElementById('wrongNumberAppartement').style.display = "none";
    document.getElementById('numberAppartement').style.borderColor = "#c3cdc0";
    return true;
  }

  document.getElementById('wrongNumberAppartement').style.display = "flex";
  document.getElementById('numberAppartement').style.borderColor = "#b0706d";
  return false;
}

function validate() {
  if (validateUsername() && validatePassword() && validatePhone() && validateEmail() && validateConfirmPassword() && validateNumberAppartement()) {
    return true;
  } 

  return false;
}