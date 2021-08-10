import refs from './js/refs';
var debounce = require('lodash.debounce');
import fetchCountries from './js/fetchCountries';
import renderSearchContent from './js/renderSearchContent';
import { onFetchError } from './js/notices';

// ======= listeners
refs.input.addEventListener('input', debounce(onSearch, 500));

// // ========= search
function onSearch(e) {
  e.preventDefault();
  const query = e.target.value;

  fetchCountries(query)
    .then(data => renderSearchContent(data))
    .catch(err => onFetchError(err));
}
