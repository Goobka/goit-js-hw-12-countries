import './styles.css';
import './refs/refs';
import fetchCountries from './js/fetch-countries';
import updateCountriesMarkup from './js/update-countries-markup';
//import countryTpl from './templates/country.hbs';


//fetch('http://hn.algolia.com/api/v1/search?query=html&tags=story').
//then(response => response.json()).then(data => console.log(data))

refs.searchInput.addEventListener('input', event => {
    event.preventDefault();
    
    const inputValue = event.currentTarget.value;
    
    //refs.countriesContainer.innerHTML = '';
    
        fetchCountries(inputValue).then(data => {
      
            if (data.length === 1) {
                updateCountriesMarkup(data[0]);
                //refs.countriesContainer.innerHTML = countryTpl(data
                //[0]);
                return;
            }
        
        })
    
})


