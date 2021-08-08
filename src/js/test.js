// import './js/fetchCountries';
// import fetchCountries from './js/fetchCountries';
var debounce = require('lodash.debounce');

const countries = [
  { name: 'Ukraine' },
  { name: 'China' },
  { name: 'Cuba' },
  { name: 'USA' },
  { name: 'UK' },
];

const refs = {
  input: document.querySelector('.input-box'),
  cards: document.querySelector('.js-list'),
};
let onInputeMove = 0;
// const debounceOnInput = _.debounce(onInput, 500);
refs.input.addEventListener('input', debounce(onInput, 500));

// ========= filter
function onInput(e) {
  //   e.preventDefault();
  onInputeMove += 1;

  const filter = e.target.value.toLowerCase();
  const filteredCountries = countries.filter(c => c.name.toLowerCase().includes(filter));
  const listCountriesMarkup = creatListCountriesMarckup(filteredCountries);

  refs.cards.innerHTML = listCountriesMarkup;
  console.log(filteredCountries);

  //   console.log('это первый log', e.target.value);
  console.log(`количество вызовов ${onInputeMove} Значение: ${e.target.value} `);
}

// ========= markup
const listCountriesMarkup = creatListCountriesMarckup(countries);
console.log(listCountriesMarkup);
refs.cards.innerHTML = listCountriesMarkup;

function creatListCountriesMarckup(items) {
  return items.map(item => `<li>${item.name}</li>`).join('');
}
