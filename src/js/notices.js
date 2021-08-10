import '@pnotify/core/dist/BrightTheme.css';
import { error } from '@pnotify/core';
import refs from './refs';

// ========= Notices & onFetchError
export function createNotice() {
  refs.cards.innerHTML = '';
  error({
    type: 'notice',
    delay: 1000,
    minHeight: '120px',
    addClass: 'notice',
    text: 'Too many matches found. Please enter a more specific query!',
  });
}

export function createNotice404() {
  refs.cards.innerHTML = '';
  error({
    type: 'notice',
    delay: 1000,
    minHeight: '120px',
    addClass: 'notice',
    text: 'No country has been found. Please enter a more specific query!',
  });
}

export function onFetchError(err) {
  refs.cards.innerHTML = '';
  error({
    type: 'notice',
    delay: 1000,
    minHeight: '120px',
    addClass: 'notice',
    text: 'Please enter the name of the country',
  });

  console.log('Ошибка в catch', err);
}
