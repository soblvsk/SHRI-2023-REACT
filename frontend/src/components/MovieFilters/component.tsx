'use client';

import React, { FunctionComponent, useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import styles from './styles.module.scss';
import classNames from 'classnames';
import { useDebouncedCallback } from 'use-debounce';
import { Select } from '@/components/Select/components';
import { MOVIE_GENRE, MOVIE_GENRES } from '@/constants/movie';
import { Cinema } from '@/constants/interfaces';
import { Input } from '@/components/Input/component';

interface Props {
  cinemas: Cinema[];
  className?: string;
}

export const MovieFilters: FunctionComponent<Props> = ({ cinemas, className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const onSearchChange = useCallback(
    (name: string, value = '') => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      router.push(pathname + '?' + params.toString());
    },
    [searchParams],
  );

  const onInputChangeChange = useDebouncedCallback(onSearchChange, 1000);

  return (
    <div className={classNames(styles.filters__sticky, className)}>
      <h4 className={styles.filters__title}>Фильтр поиска</h4>
      <div className={styles.filters__sections}>
        <div className={styles.filter}>
          <label className={styles.filter__label} htmlFor='title'>
            Название
          </label>
          <Input
            defaultValue={searchParams.get('title') || ''}
            onChange={(event) => onInputChangeChange('title', event.target.value)}
            type='text'
            name='title'
            id='title'
            className={styles.field}
            placeholder='Введите название'
          />
        </div>
        <div className={styles.filter}>
          <label className={styles.filter__label} htmlFor='genre'>
            Жанр
          </label>
          <Select
            defaultValue={searchParams.get('genre') || ''}
            onChange={(key) => onSearchChange('genre', key)}
            options={MOVIE_GENRES.map((genre) => ({
              key: genre,
              title: MOVIE_GENRE[genre as keyof typeof MOVIE_GENRE],
            }))}
            placeHolder='Выберите жанр'
          />
        </div>
        {cinemas?.length && (
          <div className={styles.filter}>
            <label className={styles.filter__label} htmlFor='cinemaId'>
              Кинотеатр
            </label>
            <Select
              defaultValue={searchParams.get('cinemaId') || ''}
              onChange={(key) => onSearchChange('cinemaId', key)}
              options={cinemas.map(({ id, name }) => ({ key: id, title: name }))}
              placeHolder='Выберите кинотеатр'
            />
          </div>
        )}
      </div>
    </div>
  );
};
