import { Metadata } from 'next';

import { questions } from '@/constants/data';
import { Accordion } from '@/components/Accordion/component';
import { Spoiler } from '@/components/Spoiler/component';

import styles from './styles.module.scss';

export const metadata: Metadata = {
  title: 'FAQ',
};

export default function Faq() {
  return (
    <div className={styles.faq}>
      <div className={styles['faq__top']}>
        <h2 className={styles.faq__title}>Вопросы-ответы</h2>
      </div>
      <div className={styles['faq__bottom']}>
        <Accordion>
          {questions.map((question, idx) => (
            <div key={idx}>
              <Spoiler item={question} />
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
