import fetchCountries from './js/fetchCountries';
import countryCardTpl from './templates/country-card.hbs';
import countryListTpl from './templates/country-list.hbs';
console.log(fetchCountries);
var debounce = require('lodash.debounce');
// const Handlebars = require('handlebars');

// ======= refs
const refs = {
  input: document.querySelector('.input-box'),
  cards: document.querySelector('.js-list'),
};

// ======= listeners
refs.input.addEventListener('input', debounce(onSearch, 500));

// // ========= search
function onSearch(e) {
  e.preventDefault();
  const query = e.target.value;
  // console.log(query);
  fetchCountries(query).then(data => creatMarckup(data, countryCardTpl));
}

// ========= marckup
// function creatMarckup(countries, template)) {
//   refs.cards.insertAdjacentHTML('afterbegin', articlesTpl(articles));
// }
// ========= marckup
function creatMarckup(countries, template) {
  const markup = countries.map(country => template(country)).join('');
  // console.log(markup);
  refs.cards.insertAdjacentHTML('afterbegin', markup);
}
