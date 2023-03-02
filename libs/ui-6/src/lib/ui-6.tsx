import styles from './ui-6.module.css';

/* eslint-disable-next-line */
export interface Ui6Props {}

export function Ui6(props: Ui6Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui6!</h1>
    </div>
  );
}

export default Ui6;
