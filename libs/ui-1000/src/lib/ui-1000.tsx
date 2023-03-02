import styles from './ui-1000.module.css';

/* eslint-disable-next-line */
export interface Ui1000Props {}

export function Ui1000(props: Ui1000Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui1000!</h1>
    </div>
  );
}

export default Ui1000;
