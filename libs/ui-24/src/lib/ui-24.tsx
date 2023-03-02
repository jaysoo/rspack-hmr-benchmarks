import styles from './ui-24.module.css';

/* eslint-disable-next-line */
export interface Ui24Props {}

export function Ui24(props: Ui24Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui24!</h1>
    </div>
  );
}

export default Ui24;
