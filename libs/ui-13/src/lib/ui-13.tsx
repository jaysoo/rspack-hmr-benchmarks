import styles from './ui-13.module.css';

/* eslint-disable-next-line */
export interface Ui13Props {}

export function Ui13(props: Ui13Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui13!</h1>
    </div>
  );
}

export default Ui13;
