// import { template } from 'handlebars';
import fetchCountries from './js/fetchCountries';
import countryCardTpl from './templates/country-card.hbs';
import countryListTpl from './templates/country-list.hbs';
import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';

console.log(fetchCountries);
var debounce = require('lodash.debounce');
// const Handlebars = require('handlebars');

// ======= refs
const refs = {
  input: document.querySelector('#searchQuery'),
  cards: document.querySelector('.js-list'),
};

// ======= listeners
refs.input.addEventListener('input', debounce(onSearch, 500));

// // ========= search
function onSearch(e) {
  e.preventDefault();
  const query = e.target.value;
  // console.log(query);
  fetchCountries(query)
    .then(data => {
      if (data.length === 1) {
        return creatMarckup(data, countryCardTpl);
      } else if (data.length > 2 && data.length < 10) {
        return creatMarckup(data, countryListTpl);
      } else if (data.length > 10) {
        console.log(data.length);
        return createNotice();
      } else if (data.status === 404) {
        console.log(data.status);
        return createNotice404();
      }
    })
    .catch(error => createNotice(error));
  // fetchCountries(query).then(data => creatMarckup(data, countryCardTpl));
}

// ========= marckup
function creatMarckup(data, template) {
  refs.cards.innerHTML = template(data);
  console.log((refs.cards.innerHTML = template(data)));
}
// ========= marckup 2
// function creatMarckup(countries, template) {
//   const markup = countries.map(country => template(country)).join('');
//   // console.log(markup);
//   refs.cards.insertAdjacentHTML('afterbegin', markup);
// }

// =========
function createNotice() {
  refs.cards.innerHTML = '';
  return error({
    type: 'notice',
    hide: true,
    delay: 500,
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

function createNotice404() {
  refs.cards.innerHTML = '';
  return error({
    type: 'notice',
    hide: true,
    delay: 500,
    text: 'No country has been found. Please enter a more specific query!',
  });
}
