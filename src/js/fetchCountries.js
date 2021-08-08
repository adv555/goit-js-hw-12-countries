// export default class CountriesApiService {
//   constructor() {
//     this.searchQuery = '';
//   }

//   fetchCountries() {
//     console.log(this);
//     const url = `https://restcountries.eu/rest/v2/name/${this.searchQuery}`;
//     return fetch(url)
//       .then(resolve => resolve.json())
//       .then(data => console.log(data));
//   }
//   get query() {
//     return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }
// }
// ======== fn
export default function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url).then(resolve => resolve.json());
}
