import styles from './ui-11.module.css';

/* eslint-disable-next-line */
export interface Ui11Props {}

export function Ui11(props: Ui11Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui11!</h1>
    </div>
  );
}

export default Ui11;
