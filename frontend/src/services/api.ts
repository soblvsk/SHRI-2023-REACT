export async function fetchCinemas() {
  const response = await fetch('http://localhost:3001/api/cinemas');
  return await response.json();
}

export async function fetchMovies(cinemaId: string) {
  const response = await fetch(`http://localhost:3001/api/movies?cinemaId=${cinemaId}`, {
    next: { tags: ['top10'] },
  });
  return await response.json();
}

export async function fetchMovie(movieId: string) {
  const response = await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`, {
    next: { tags: [`movie-${movieId}`] },
  });
  return await response.json();
}

export async function fetchMovieReviews(movieId: string) {
  const response = await fetch(`http://localhost:3001/api/reviews?movieId=${movieId}`);
  return await response.json();
}
