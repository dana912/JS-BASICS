const form = document.querySelector(".js-form");
input = form.querySelector("input");
greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWINH_CN = "showing";

function paintGreetind(text) {
  form.classList.remove(SHOWINH_CN);
  greeting.classList.add(SHOWINH_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
  } else {
    paintGreetind(currentUser);
  }
}

function init() {
  loadName();
}

init();
