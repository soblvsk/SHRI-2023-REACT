import styles from './styles.module.css';

export const Loading = () => {
  return (
    <div className={styles.loading}>
      <div className={styles['loading__spinner']}></div>
    </div>
  );
};
