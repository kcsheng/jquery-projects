const shoppingForm = $("#shopping-form");
const shoppingList = $("#shopping-list");

shoppingForm.on("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  shoppingList.append(`<li>${$("#shopping-item").val()}</li>`);
  $("#shopping-item").val("");
}
