"use stict";

const clearBtn = document.querySelector("#clear-filter");
const filterTag = document.querySelector(".filter");
const filterBlockTags = document.querySelector(".tags-list__filters");
const jobOfferTags = document.querySelector(".tags-list");
const jobName = document.querySelectorAll(".job-name");
const jobsList = document.getElementById("jobs-list");

// Get data from json file
// let data;
const getData = async function (url) {
  try {
    const res = await fetch("./data.json");
    const data = await res.json();
    console.log("async finished", data);
    renderJobs(data);
  } catch (err) {
    console.log(err);
  }
};

// Render job offers
const generateMarkup = function (el) {
  return `<article class="content-block job-offer ${
    el.featured ? "job-offer__featured" : ""
  }">
  <div class="info-container">
    <img
      class="company-logo"
      src="${el.logo}"
      alt="${el.company}"
    />
    <div class="job-info">
      <div>
        <h1>${el.company}</h1>
        <span class="${el.new ? "flag new" : "hidden"}">New!</span>
        <span class="${
          el.featured ? "flag featured" : "hidden"
        }">Featured</span>
      </div>
      <a href="#" class="job-name">${el.position}</a>
      <ul class="properties-list">
        <li class="property">${el.postedAt}</li>
        <li class="property">${el.contract}</li>
        <li class="property">${el.location}</li>
      </ul>
    </div>
  </div>
  <hr class="separator" />
  <ul class="tags-list">
    <li class="tag">${el.role}</li>
    <li class="tag">${el.level}</li>   
    ${
      el.languages.length
        ? `<li class="tag">${el.languages.join('</li><li class="tag">')}</li>`
        : ""
    }
    ${
      el.tools.length
        ? `<li class="tag">${el.tools.join('</li><li class="tag">')}</li>`
        : ""
    }
  </ul>
</article>`;
};

const renderLang = function (arr) {
  arr.forEach(function (el) {
    return `<li class="tag">${el}</li>`;
  });
};

const renderJobs = function (data) {
  data.forEach((el) =>
    jobsList.insertAdjacentHTML("beforeend", generateMarkup(el))
  );
};

jobName.forEach((e) =>
  e.addEventListener("click", function (e) {
    e.preventDefault();
  })
);

const ListenClick = function (base, closest, callback) {
  base.addEventListener("click", function (e) {
    const item = e.target.closest(closest);
    if (item && base.contains(item)) {
      callback(e);
      console.log(e);
    }
  });
};

ListenClick(jobOfferTags, ".tag", function (e) {
  console.log(e);
});

// jobOfferTags.addEventListener("click", function (e) {
//   console.log(e);
// });

getData("./data.json");
// el.languages.forEach((e) => console.log(`<li class="tag">${e}</li>`));
