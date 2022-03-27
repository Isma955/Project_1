"use strict";

// const numberOfFilms = +prompt('Сколько фильиов вы уже посмотрели');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   geners: [],
//   privat: false

// };

// const a = prompt ('Один из последних просмотренних фильмов', ''),
//       b = prompt ('на сколько оцените его', ''),
//       c = prompt ('Один из последних просмотренних фильмов', ''),
//       d = prompt ('на сколько оцените его', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);


const numberOfFilms = +prompt('Сколько фильмов вы уде посмотрели?');

const personalMovieDB = { 
      count : numberOfFilms,
      movies : {},
      actors : {},
      genres : [],
      privat : false,
};

const a = prompt('Один из последних просмотренных фильмов', ''),
      b = prompt('на сколько оцените его', ''),
      c = prompt('Один из последних просмотренных фильмов', ''),
      d = prompt('на сколько оцените его', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [b] = c;

console.log(personalMovieDB);
