import React from 'react';
import { MovieFilters } from '@/components/MovieFilters/component';
import { fetchCinemas } from '@/services/api';

export async function MovieFiltersContainer() {
  const cinemas = await fetchCinemas();

  return <MovieFilters cinemas={cinemas} />;
}
