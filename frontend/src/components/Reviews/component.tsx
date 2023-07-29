import React, { FunctionComponent } from 'react';
import { FeedBack } from '@/constants/interfaces';
import { Review } from '@/components/Review/component';

import styles from './styles.module.scss';

export const Reviews: FunctionComponent<{ reviews: FeedBack[] }> = ({ reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
};
