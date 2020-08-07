var loginText = document.querySelector(".main .login");
var passwordLogin = document.querySelector(".form form.password");
var txtLogin = document.querySelector(".form form.txt");
var districtCode = document.querySelector(".zone");
var chooseArea = document.querySelector(".choose-area");
loginText.onclick = function (e) {
  if (e.target.tagName == "LI" && e.target.classList.contains("pasd")) {
    e.target.classList.add("selected");
    e.target.previousSibling.previousSibling.classList.remove("selected");
    passwordLogin.classList.remove("hidden");
    txtLogin.classList.add("hidden");
  }
  if (e.target.tagName == "LI" && e.target.classList.contains("txt")) {
    e.target.classList.add("selected");
    e.target.nextSibling.nextSibling.classList.remove("selected");
    txtLogin.classList.remove("hidden");
    passwordLogin.classList.add("hidden");
  }
};

districtCode.onclick = function () {
  chooseArea.classList.remove("hidden");
  chooseArea.onclick = function () {
    chooseArea.classList.add("hidden");
  };
};
