import styles from './ui-365.module.css';

/* eslint-disable-next-line */
export interface Ui365Props {}

export function Ui365(props: Ui365Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui365!</h1>
    </div>
  );
}

export default Ui365;
