import styles from './ui-42.module.css';

/* eslint-disable-next-line */
export interface Ui42Props {}

export function Ui42(props: Ui42Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui42!</h1>
    </div>
  );
}

export default Ui42;
