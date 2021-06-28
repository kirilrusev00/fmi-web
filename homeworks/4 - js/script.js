function validateUsername() {
  const username = document.getElementById('username').value;
  const isValid = /^[a-zA-Z0-9_]{3,10}$/.test(username);

  if (isValid) {
    document.getElementById('wrong-username').style.display = "none";
    document.getElementById('username').style.borderColor = "#c3cdc0";
    document.getElementById('wrong-username').innerHTML = "";
    return true;
  }

  document.getElementById('wrong-username').style.display = "flex";
  document.getElementById('username').style.borderColor = "#b0706d";
  document.getElementById('wrong-username').innerHTML = "Грешно потребителско име";
  return false;
}

function validateName() {
  const name = document.getElementById('name').value;
  const isValid = /^[a-zA-Z0-9_]{1,50}$/.test(name);

  if (isValid) {
    document.getElementById('wrong-name').style.display = "none";
    document.getElementById('name').style.borderColor = "#c3cdc0";
    document.getElementById('wrong-name').innerHTML = "";
    return true;
  }

  document.getElementById('wrong-name').style.display = "flex";
  document.getElementById('name').style.borderColor = "#b0706d";
  document.getElementById('wrong-name').innerHTML = "Грешно име";
  return false;
}

function validateFamilyName() {
  const familyName = document.getElementById('family-name').value;
  const isValid = /^[a-zA-Z0-9_]{1,50}$/.test(familyName);

  if (isValid) {
    document.getElementById('wrong-family-name').style.display = "none";
    document.getElementById('family-name').style.borderColor = "#c3cdc0";
    document.getElementById('wrong-family-name').innerHTML = "";
    return true;
  }

  document.getElementById('wrong-family-name').style.display = "flex";
  document.getElementById('family-name').style.borderColor = "#b0706d";
  document.getElementById('wrong-family-name').innerHTML = "Грешно фамилно име";
  return false;
}

function validateEmail() {
  const email = document.getElementById('email').value;
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = regex.test(String(email).toLowerCase());

  if (isValid) {
    document.getElementById('wrong-email').style.display = "none";
    document.getElementById('email').style.borderColor = "#c3cdc0";
    document.getElementById('wrong-email').innerHTML = "";
    return true;
  }

  document.getElementById('wrong-email').style.display = "flex";
  document.getElementById('email').style.borderColor = "#b0706d";
  document.getElementById('wrong-email').innerHTML = "Грешен e-mail";
  return false;
}

function validatePassword() {
  const password = document.getElementById('password').value;
  const isValid = !(password.length < 6 || !/[A-Z]+/.test(password) || !/[a-z]+/.test(password) || !/[0-9]+/.test(password))

  if (isValid) {
    document.getElementById('wrong-password').style.display = "none";
    document.getElementById('password').style.borderColor = "#c3cdc0";
    document.getElementById('wrong-password').innerHTML = "";
    return true;
  }

  document.getElementById('wrong-password').style.display = "flex";
  document.getElementById('password').style.borderColor = "#b0706d";
  document.getElementById('wrong-password').innerHTML = "Грешна парола";
  return false;
}

function validatePost() {
  const postalCode = document.getElementById('postal-code').value;
  const isValid = !postalCode || /^[0-9]{4}$/.test(postalCode) || /^[0-9]{5}-[0-9]{4}$/.test(postalCode);

  if (isValid) {
    document.getElementById('wrong-postal-code').style.display = "none";
    document.getElementById('postal-code').style.borderColor = "#c3cdc0";
    document.getElementById('wrong-postal-code').innerHTML = "";
    return true;
  }

  document.getElementById('wrong-postal-code').style.display = "flex";
  document.getElementById('postal-code').style.borderColor = "#b0706d";
  document.getElementById('wrong-postal-code').innerHTML = "Грешен пощенски код";
  return false;
}

async function validate() {
  const existingUsers = await fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .catch(function(error) {
      console.log('Request failed', error);
    });

  const existingUsernames = existingUsers.map(user => user.username);

  const username = document.getElementById('username').value;
  
  if (validateUsername() && validateName() && validateFamilyName() && validateEmail() && validatePassword() && validatePost()) {
    if (existingUsernames.includes(username)) {
      document.getElementById('success').style.display = "none";
      document.getElementById('existing-user').style.display = "flex";
      document.getElementById('existing-user').innerHTML = "Има такова потребителско име!";
      return false;
    } else {
      document.getElementById('existing-user').style.display = "none";
      document.getElementById('success').style.display = "flex";
      document.getElementById('existing-user').innerHTML = "";
      return true;
    }
  } 
  document.getElementById('success').style.display = "none";
  document.getElementById('existing-user').style.display = "none";
  document.getElementById('existing-user').innerHTML = "";
  return false;
}