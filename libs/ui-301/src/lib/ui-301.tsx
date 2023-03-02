import styles from './ui-301.module.css';

/* eslint-disable-next-line */
export interface Ui301Props {}

export function Ui301(props: Ui301Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui301!</h1>
    </div>
  );
}

export default Ui301;
