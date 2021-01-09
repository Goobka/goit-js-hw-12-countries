import '../refs/refs';
import countriesListTpl from '../templates/countries-list.hbs';

function updateCountriesListMarkup(data) {
  const markup = countriesListTpl(data);
  return refs.countriesContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesListMarkup;
