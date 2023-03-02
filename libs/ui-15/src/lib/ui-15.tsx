import styles from './ui-15.module.css';

/* eslint-disable-next-line */
export interface Ui15Props {}

export function Ui15(props: Ui15Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui15!</h1>
    </div>
  );
}

export default Ui15;
