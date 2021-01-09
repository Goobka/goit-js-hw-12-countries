import fetchCountries from './fetch-countries';
import updateCountriesMarkup from './update-countries-markup';
import updateCountriesListMarkup from './update-countries-list-markup';
//import countryTpl from './templates/country.hbs';
//import countriesListTpl from './templates/countries-list.hbs';
import error  from './notifications';


export function onInputCountrySearch(event) {
  event.preventDefault();

  const inputValue = event.target.value;
  console.log(inputValue);

  if (inputValue) {
    fetchCountries(inputValue).then(data => {
      if (data.length === 1) {
        // const markup = countryTpl(data[0]);
        // refs.countriesContainer.innerHTML = markup;
        updateCountriesMarkup(data[0]);
        return;
      }

      if (data.length > 1 && data.length <= 10) {
        //   const markup = countriesListTpl(data);
        //   refs.countriesContainer.innerHTML = markup;
        updateCountriesListMarkup(data);
        return;
      }

      if (data.length > 10) {
        error({
          title: 'Too many matches found',
          text: 'Specify your request',
          delay: 2000,
        });
      }
    });
  }
  refs.countriesContainer.innerHTML = '';
}
