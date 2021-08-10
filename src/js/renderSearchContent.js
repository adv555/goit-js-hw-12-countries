import countryCardTpl from '../templates/country-card.hbs';
import countryListTpl from '../templates/country-list.hbs';
import { createNotice, createNotice404 } from '../js/notices';

import refs from './refs';

// ========= marckup
function creatMarckup(data, template) {
  refs.cards.innerHTML = template(data);
  //   console.log((refs.cards.innerHTML = template(data)));
}
// ========= renderSearchContent
export default function renderSearchContent(data) {
  refs.cards.innerHTML = '';
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
}
