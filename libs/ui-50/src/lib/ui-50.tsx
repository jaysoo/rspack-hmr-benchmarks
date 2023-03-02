import styles from './ui-50.module.css';

/* eslint-disable-next-line */
export interface Ui50Props {}

export function Ui50(props: Ui50Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui50!</h1>
    </div>
  );
}

export default Ui50;
