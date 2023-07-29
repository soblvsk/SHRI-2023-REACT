'use client';
import { Accordion } from '@/components/Accordion/component';
import styles from './styles.module.scss';
import { FAQ } from '@/constants/interfaces';

Spoiler.renderTitle = function (title: string) {
  return () => <h2 className={styles.spoiler__title}>{title}</h2>;
};

Spoiler.renderDescr = function (descr: string) {
  return () => <p className={styles.spoiler__descr}>{descr}</p>;
};

export function Spoiler({ item }: { item: FAQ }) {
  return (
    <div className={styles.spoiler}>
      <Accordion.Item
        itemId={item.id}
        renderTitle={Spoiler.renderTitle(item.title)}
        renderContent={Spoiler.renderDescr(item.descr)}
      />
    </div>
  );
}
