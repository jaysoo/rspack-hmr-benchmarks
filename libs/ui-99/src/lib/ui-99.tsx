import styles from './ui-99.module.css';

/* eslint-disable-next-line */
export interface Ui99Props {}

export function Ui99(props: Ui99Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui99!</h1>
    </div>
  );
}

export default Ui99;
