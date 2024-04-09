let username = document.getElementById("username");
let submit = document.getElementById("submit");
let password = document.getElementById("password");

submit.addEventListener("click", function () {
  console.log("hii");
  if (username.value && password.value) {
    prompt("ur information is recorded");
  } else if (username.value && !password.value) {
    prompt("password not passed");
  } else if (!username.value && password.value) {
    prompt("username not passed");
  } else {
    prompt("something went wrong");
  }
});
