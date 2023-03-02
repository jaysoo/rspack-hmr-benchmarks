import styles from './ui-120.module.css';

/* eslint-disable-next-line */
export interface Ui120Props {}

export function Ui120(props: Ui120Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui120!</h1>
    </div>
  );
}

export default Ui120;
