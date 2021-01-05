import '../refs/refs';
import countryTpl from '../templates/country.hbs';

function updateCountriesMarkup(data) {
  const markup = countryTpl(data);
  return refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;
