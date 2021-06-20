const shoppingForm = $("#shopping-form");
const shoppingList = $("#shopping-list");
shoppingForm.on("submit", handleFormSubmit);
$("ol").on("click", "li button", deleteItem);
function handleFormSubmit(e) {
  e.preventDefault();
  shoppingList.append(
    `<li>${$("#shopping-item").val()} <button>Delete</button></li>`
  );
  $("#shopping-item").val("");
}
function deleteItem(e) {
  let target = e.target;
  $(target).parent().remove();
}
