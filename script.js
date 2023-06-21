"use stict";

const clearBtn = document.querySelector("#clear-filter");
const closeTag = document.querySelector(".filter");

console.log("connect!");
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));

closeTag.addEventListener("click", function (e) {
  console.log(e);
});
