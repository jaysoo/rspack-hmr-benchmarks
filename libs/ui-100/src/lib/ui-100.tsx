import styles from './ui-100.module.css';

/* eslint-disable-next-line */
export interface Ui100Props {}

export function Ui100(props: Ui100Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui100!</h1>
    </div>
  );
}

export default Ui100;
