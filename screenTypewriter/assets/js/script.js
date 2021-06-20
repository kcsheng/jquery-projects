const showKeyboardBtn = $(".show-keyboard-btn");

const keyboardContainer = $(".keyboard-container");

showKeyboardBtn.on("click", toggleKeyboard);

keyboardContainer.hide();
function toggleKeyboard() {
  keyboardContainer.empty();
  keyboardContainer.toggle();
  listKeyBtns();
}

function listKeyBtns() {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "-",
  ];
  for (let i = 0; i < letters.length; i++) {
    let letterBtn = $("<button>");
    letterBtn.text(letters[i]);
    letterBtn.attr("data-letter", letters[i]);
    keyboardContainer.append(letterBtn);
  }
}

keyboardContainer.on("click", "button", printLetter);
function printLetter(e) {
  let outputLetterDiv = $("<div>");
  outputLetterDiv.text(e.target.dataset.letter);
  $(".inputContainer").append(outputLetterDiv);
}

$(".clear").on("click", clear);

function clear() {
  $(".inputContainer").empty();
}
