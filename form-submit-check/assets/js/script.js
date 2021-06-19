const formElement = $("#pizza-form");
const submitBtn = $("#submit");
const nameElement = $("#user-name");
const emailElement = $("#user-email");
const urlElement = $("#user-url");

formElement.on("submit", formSubmitHandler);

function formSubmitHandler(e) {
  e.preventDefault();
  $("#result-name").text(nameElement.val());
  $("#result-email").text(emailElement.val());
  $("#result-url").text(urlElement.val());
  let toppingList = [];
  const checkedElements = $(":checked");
  $.each(checkedElements, function (i, item) {
    toppingList.push($(item).val());
  });
  toppingListInString = toppingList.join(", ");
  $("#result-toppings").text(toppingListInString);

  // clear input values
  nameElement.val("");
  emailElement.val("");
  urlElement.val("");
  checkedElements.prop("checked", false);
}
