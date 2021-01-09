import './styles.css';
import './refs/refs';
import { debounce } from 'debounce';
import { onInputCountrySearch } from './js/input-country-search';

refs.searchInput.addEventListener('input', debounce(onInputCountrySearch, 500));
