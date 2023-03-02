import styles from './ui-750.module.css';

/* eslint-disable-next-line */
export interface Ui750Props {}

export function Ui750(props: Ui750Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui750!</h1>
    </div>
  );
}

export default Ui750;
