import { FunctionComponent } from 'react';
import Image from 'next/image';
import avatar from '/public/user.png';

import styles from './styles.module.css';
import classnames from 'classnames';

interface Props {
  name: string;
  text: string;
  rating: number;
}

export const Reviews: FunctionComponent<Props> = ({ name, text, rating }) => {
  return (
    <div className={styles.review}>
      <Image className={styles['review__image']} src={avatar} alt={name} width={100} height={100} />
      <div className={styles['review__block']}>
        <div className={styles['review__top']}>
          <h3 className={classnames('font-semibold', styles['review__user'])}>{name}</h3>
          <div className={styles['review__rating']}>
            <span>Оценка: </span>
            <span className='font-semibold'>{rating}</span>
          </div>
        </div>
        <p className={styles['review__bottom']}>{text}</p>
      </div>
    </div>
  );
};
