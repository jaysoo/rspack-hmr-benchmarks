import styles from './ui-64.module.css';

/* eslint-disable-next-line */
export interface Ui64Props {}

export function Ui64(props: Ui64Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui64!</h1>
    </div>
  );
}

export default Ui64;
