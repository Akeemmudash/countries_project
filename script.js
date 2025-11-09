const wrapper = document.querySelector("#countriesWrapper");
const loader = document.querySelector("#loader");

let searchTerm = "";
let countries = [];
const searchBar = document.querySelector("#search");

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then((response) => response.json())
  .then((data) => {
    countries = data;
    // addCountries(countries);
  })
  .catch((error) => {
    console.log(error);
    wrapper.innerHTML += `<div class="alert alert-danger" role="alert">
  ${error.message}
</div>`;
  })
  .finally(() => loader.remove());

function searchCountry(e) {
  e.preventDefault();
  searchTerm = searchBar.value;
  const searchCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(searchTerm)
  );
  addCountries(searchCountries);
}

const numbers = [1, 2, 5, 60, 30];
const filterNumbers = numbers.filter((number) => number % 5 === 0);
console.log("filterNumbers", filterNumbers);

function addCountries(countries) {
  wrapper.innerHTML = null;
  countries.forEach((country) => {
    const countryCard = `
      <div class="col-sm-6 col-lg-4">
      <div class="card">
  <img src="${country.flags.svg}" style="height:200px" class="card-img-top object-fit-cover" alt="${country.flags.alt}">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text">${country.name.official}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>`;
    wrapper.innerHTML = wrapper.innerHTML + countryCard;
  });
}




const handleSubmit = (e) => {
  e.preventDefault()
  const title = document.querySelector("#title");
  const body = document.querySelector("#title");
  const userId = document.querySelector("#userId");

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: title.value,
      body: body.value,
      userId: userId.value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log('is Successfully', json)
    });
};

