'use client';

import { FunctionComponent, useCallback, useEffect, useState } from 'react';

import { Input } from '../Input/Input';
import { Dropdown } from '../Dropdown/Dropdown';

import { Cinema, Movie, Options } from '../../lib/interfaces';
import { localizeGenre } from '../../lib/utils';
import { useDispatch } from 'react-redux';
import { filteredMoviesActions } from '../../redux/features/filtersMovies';

import styles from './styles.module.css';
import classnames from 'classnames';

interface Props {
  movies: Movie[];
  cinemas: Cinema[];
}

export const Filters: FunctionComponent<Props> = ({ movies, cinemas }) => {
  const [searchValue, setSearchValue] = useState('');
  const [genreValue, setGenreValue] = useState('');
  const [cinemaValue, setCinemaValue] = useState('');
  const [genreOptions, setGenreOptions] = useState<Options[]>([]);
  const [cinemaOptions, setCinemaOptions] = useState<Options[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(movies);

  const dispatch = useDispatch();

  const handleFilter = useCallback(
    (filteredMovies: Movie[]) => {
      setFilteredMovies(filteredMovies);
      dispatch(filteredMoviesActions.setFilteredMovies(filteredMovies));
    },
    [dispatch],
  );

  const handleSearchInputChange = (value: string) => {
    setSearchValue(value);
  };

  const handleGenreChange = (value: string) => {
    setGenreValue(value);
  };

  const handleCinemaChange = (value: string) => {
    setCinemaValue(value);
  };

  const filterMovies = useCallback(() => {
    let filtered = movies;

    if (searchValue) {
      const searchQuery = searchValue.toLowerCase().replace(/\s/g, '');
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().replace(/\s/g, '').includes(searchQuery),
      );
    }

    if (genreValue) {
      filtered = filtered.filter((movie) => movie.genre.includes(genreValue));
    }

    if (cinemaValue) {
      filtered = filtered.filter((movie) => {
        const cinemaIds = cinemas.find((cinema) => cinema.name === cinemaValue)?.movieIds || [];
        return cinemaIds.includes(movie.id);
      });
    }

    handleFilter(filtered);
  }, [movies, searchValue, genreValue, cinemaValue, handleFilter]);

  useEffect(() => {
    function getData() {
      dispatch(filteredMoviesActions.setFilteredMovies(filteredMovies));
      const allGenres = movies.flatMap((movie) => movie.genre);
      const uniqueGenres = Array.from(new Set(allGenres));

      const genreOptionsWithIdAndName = uniqueGenres.map((genre) => ({
        id: genre,
        name: localizeGenre(genre),
      }));
      setGenreOptions(genreOptionsWithIdAndName);

      const cinemaOptionsWithIdAndName = cinemas.map((cinema) => ({
        id: cinema.name,
        name: cinema.name,
      }));

      setCinemaOptions(cinemaOptionsWithIdAndName);
    }

    getData();
  }, []);

  useEffect(() => {
    filterMovies();
  }, [filterMovies, searchValue, genreValue, cinemaValue]);

  return (
    <div className={styles.filters}>
      <div className={styles['filters__sticky']}>
        <h4 className={classnames('font-semibold', styles['filters__title'])}>Фильтр поиска</h4>
        <div className={styles['filters__sections']}>
          <Input
            label={'Название'}
            placeholder={'Введите название'}
            value={searchValue}
            type='search'
            onChange={handleSearchInputChange}
          />
          <Dropdown
            label={'Жанр'}
            placeholder={'Выберите жанр'}
            options={genreOptions}
            value={localizeGenre(genreValue)}
            onChange={handleGenreChange}
          />
          <Dropdown
            label={'Кинотеатр'}
            placeholder={'Выберите кинотеатр'}
            options={cinemaOptions}
            value={cinemaValue}
            onChange={handleCinemaChange}
          />
        </div>
      </div>
    </div>
  );
};
