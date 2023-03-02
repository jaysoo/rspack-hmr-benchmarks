import styles from './ui-16.module.css';

/* eslint-disable-next-line */
export interface Ui16Props {}

export function Ui16(props: Ui16Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui16!</h1>
    </div>
  );
}

export default Ui16;
