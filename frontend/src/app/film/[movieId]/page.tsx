import { Metadata } from 'next';
import { MoviePage } from '@/pagesComponents/Movie/component';
import { fetchMovie, fetchMovies } from '@/services/api';

type Props = {
  params: { movieId: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const movie = await fetchMovie(params.movieId);
  return {
    title: movie.title,
  };
}

export async function generateStaticParams() {
  const movies = await fetchMovies('');

  return (movies || []).map(({ id }: { id: string }) => ({ movieId: id }));
}

export default function Movie({ params }: Props) {
  return <MoviePage movieId={params.movieId} />;
}
