class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {
    return this.title;
  }
  getReleaseData() {
    const date = new Date(this.releaseDate);
    return date.toLocaleDateString();
  }
  getPicture() {
    return this.picture;
  }
  getRating() {
    return this.rating;
  }
}

const API_BASE_URL = 'https://api.themoviedb.org/3/';

const options = () => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzMxOGMyYjI1NmI1NzVkNDNhZjEwNWRjNDYwN2U0OSIsInN1YiI6IjY0ZTRiZjljMDZmOTg0MDE0ZTY2YjkwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MhUHMYs6vM1OyPNiN_9_Dr5EvpkbpUoBoZ_oaw3DIH4',
  },
});

const getImage = (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`;

function fetchMovies() {
  fetch(`${API_BASE_URL}movie/popular?language=en-US&page=1`, options)
    .then((response) => response.json())
    .then((response) => {
      response.results.forEach((item) => {
        const movie = new Movie(
          item.title,
          item.release_date,
          getImage(item.poster_path || item.backdrop_path),
          item.vote_average
        );
        createMovieCard(movie);
      });
      updateItemCount();
    })
    .catch((err) => console.log(err));
}

function updateItemCount() {
  const sortBar = document.querySelector('.sort-bar  p');
  const movieElements = document.querySelectorAll('.movie');
  // console.log(sortBar, movieElements);
  const movieCount = movieElements.length;
  sortBar.textContent = `${movieCount} items`;
}

function createMovieCard(movie) {
  let target = document.querySelector('.movies-list');
  target.innerHTML += ` <div class="movie">
  <img class="vector-img" src="./images/Vector.svg">
  <a href="#">
  <img class="poster-img" src="./images/tabler-icon-plus.svg">
  </a>
  <img class="poster" src=${movie.getPicture()}>
  <div class="flex-container movie-info">
    <a href="#" class="title normal-link">${movie.getTitle()}</a>
    <p class="release-date"><strong>Release Date:</strong> ${movie.getReleaseData()}</p>
    <div class="flex-container rate-trailer">
      <div class="flex-container trailer">
        <img src="./images/play.svg">
        <a href="#">Trailer</a>
      </div>
      <div class="flex-container rating">
        <img src="./images/star.svg">
        <p>${movie.getRating()}</p>
      </div>
    </div>
  </div>
</div>
`;
}
fetchMovies();
