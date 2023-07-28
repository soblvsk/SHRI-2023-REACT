import { Cinema, Film, FeedBack } from '@/constants/interfaces';

export async function fetchCinemas(): Promise<Cinema[]> {
  const response = await fetch('http://localhost:3001/api/cinemas');
  return await response.json();
}

export async function fetchMovies(cinemaId: string): Promise<Film[]> {
  const response = await fetch(`http://localhost:3001/api/movies?cinemaId=${cinemaId}`, {
    next: { tags: ['top10'] },
  });
  return await response.json();
}

export async function fetchMovie(movieId: string): Promise<Film> {
  const response = await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`, {
    next: { tags: [`movie-${movieId}`] },
  });
  return await response.json();
}

export async function fetchMovieReviews(movieId: string): Promise<FeedBack[]> {
  const response = await fetch(`http://localhost:3001/api/reviews?movieId=${movieId}`);
  return await response.json();
}
