const pwBtn = $("#password-btn");
const pwContainer = $("#password-container");
pwBtn.on("click", generatePassword);
function generatePassword() {
  let result = "";
  for (let i = 0; i < 10; i++) {
    let randomChar = String.fromCharCode(34 + Math.floor(Math.random() * 77));
    result += randomChar;
  }
  pwContainer.text(result);
}
