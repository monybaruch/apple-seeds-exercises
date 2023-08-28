class Movie {
  constructor(title, releaseDate, picture, rating) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.picture = picture;
    this.rating = rating;
  }
  getTitle() {}
  getReleaseData() {}
  getPicture() {}
  getRating() {}
}

const API_BASE_URL = 'https://api.themoviedb.org/3/';

const getHttpOptions = () => ({
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'bearer',
  },
});
