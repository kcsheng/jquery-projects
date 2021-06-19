const alertBtn = $("#alert");
const toggleBtn = $("#toggle");
const lotteryBtn = $("#lottery");
const refreshBtn = $("#refresh");

alertBtn.on("click", getAlert);
toggleBtn.on("click", playToggle);
lotteryBtn.on("click", getLottery);
refreshBtn.on("click", playRefresh);

let isLight = true;

function getAlert() {
  alert("Hi there, it is a wonderful world!!!");
}

function playToggle() {
  if (isLight) {
    $("body").css({ backgroundColor: "black", color: "white" });
    isLight = false;
  } else {
    $("body").css({ backgroundColor: "white", color: "black" });
    isLight = true;
  }
}

function getLottery() {
  let number = (Math.random() * 100000000).toFixed(0);
  $("#lottery-container").text(number);
}

function playRefresh() {
  window.location.reload();
}
