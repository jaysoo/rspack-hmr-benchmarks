import styles from './ui-800.module.css';

/* eslint-disable-next-line */
export interface Ui800Props {}

export function Ui800(props: Ui800Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui800!</h1>
    </div>
  );
}

export default Ui800;
