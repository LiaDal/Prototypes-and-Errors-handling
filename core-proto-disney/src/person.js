/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies ) {
  this.name = name;
  this.watchedMovies = watchedMovies;
}

Person.prototype.watchMovie = function(movie) {
};

module.exports = { Person };
