const wrapperElement = $(".wrapper"); // Select the container with a class named wrapper
const h1Element = $("<h1>"); // Create an element as the whole tag symbol <h1> is used.
h1Element.text(
  "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."
);

const pElement = $("<p>"); // Create a p element.

pElement.text("~ Carol Dweck");

h1Element.append(pElement);
wrapperElement.append(h1Element);

pElement.addClass("my-10 font-20");
h1Element.addClass("p-5");
