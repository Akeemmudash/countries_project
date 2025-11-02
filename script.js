const wrapper = document.querySelector("#countriesWrapper");
const loader = document.querySelector("#loader");


fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
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
  })
  .catch((error) => {
    wrapper.innerHTML += `<div class="alert alert-danger" role="alert">
  ${error.message}
</div>`;
  })
  .finally(() => loader.remove());
