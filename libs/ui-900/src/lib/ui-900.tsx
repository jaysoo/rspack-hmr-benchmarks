import styles from './ui-900.module.css';

/* eslint-disable-next-line */
export interface Ui900Props {}

export function Ui900(props: Ui900Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui900!</h1>
    </div>
  );
}

export default Ui900;
