import styles from './ui-700.module.css';

/* eslint-disable-next-line */
export interface Ui700Props {}

export function Ui700(props: Ui700Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui700!</h1>
    </div>
  );
}

export default Ui700;
