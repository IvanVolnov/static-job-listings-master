"use stict";

const clearBtn = document.querySelector("#clear-filter");
const filterTag = document.querySelector(".filter");
const filterBlockTags = document.querySelector(".tags-list__filters");
const jobOfferTags = document.querySelector(".tags-list");

console.log("connect!");
fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data));

const ListenClick = function (base, closest, callback) {
  base.addEventListener("click", function (e) {
    const item = e.target.closest(closest);
    if (item && base.contains(item)) {
      callback();
    }
  });
};

ListenClick(jobOfferTags, ".tag", function () {
  console.log("rabotaet");
});

// jobOfferTags.addEventListener("click", function (e) {
//   console.log(e);
// });
