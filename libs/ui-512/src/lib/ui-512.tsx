import styles from './ui-512.module.css';

/* eslint-disable-next-line */
export interface Ui512Props {}

export function Ui512(props: Ui512Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui512!</h1>
    </div>
  );
}

export default Ui512;
