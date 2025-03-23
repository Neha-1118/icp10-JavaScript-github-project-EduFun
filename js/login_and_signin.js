// Sign-in functionality
let userInfo = JSON.parse(localStorage.getItem("userInfo")) || [];
let userNameInput = document.getElementById("sign-in-username");
let passWordInput = document.getElementById("sign-in-password");

function addData() {
  let userName = userNameInput.value.trim();
  let pass = passWordInput.value.trim();

  if (userName === "" || pass === "") {
    alert("Please enter a username or password.");
    return;
  }

  // Check if user already exists
  if (userInfo.some((user) => user.name === userName)) {
    alert("Username already taken. Please choose another.");
    return;
  }

  const userData = {
    name: userName,
    password: pass,
  };

  userInfo.push(userData);
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  console.log(userInfo);

  userNameInput.value = "";
  passWordInput.value = "";
  alert("Sign-up successful! You can now log in.");
}

// Log-in functionality
const logInUserName = document.getElementById("log-in-username");
const logInUserPassword = document.getElementById("log-in-password");

function login() {
  let logInName = logInUserName.value.trim();
  let logInPassword = logInUserPassword.value.trim();

  if (logInName === "" || logInPassword === "") {
    alert("Please enter a username or password.");
    return;
  }

  let userFind = userInfo.find(
    (user) => user.name === logInName && user.password === logInPassword
  );

  console.log("User found:", userFind);

  if (userFind) {
    alert("Login successful!");
    localStorage.setItem("loggedInUser", logInName); // Save the logged-in user
    window.location.href = "/index.html"; // Redirect after login
  } else {
    alert("Login failed. Incorrect username or password.");
  }

  logInUserName.value = "";
  logInUserPassword.value = "";
}

// Display logged-in user
window.onload = function () //its run after a page is fully loaded
{
  const presentUser = document.getElementById("UserlogIn");
  const savedUsername = localStorage.getItem("loggedInUser");

  if (savedUsername) {
    presentUser.innerText = `${savedUsername}`;
  }
};
