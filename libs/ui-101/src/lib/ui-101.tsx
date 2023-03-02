import styles from './ui-101.module.css';

/* eslint-disable-next-line */
export interface Ui101Props {}

export function Ui101(props: Ui101Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui101!</h1>
    </div>
  );
}

export default Ui101;
