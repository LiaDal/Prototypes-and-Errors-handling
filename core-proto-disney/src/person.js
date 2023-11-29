/**
 * Человек.
 * @param {string} name
 */
function Person(name, watchedMovies ) {
  this.name = name;
  this.watchedMovies = watchedMovies;

  watchedMovies.toString = function() {
    let title = []
    for(let el of watchedMovies){
      title.push(el.title)
    }
    console.log(title)
    return `returns pretty string of the watched movies: 1 ${title}`
};
}

Person.prototype.watchMovie = function(movie) {
  if(this.watchedMovies.includes(movie)){
    return movie.play()
  }
  this.watchedMovies.push(movie)
  return movie.play()
};

module.exports = { Person };
