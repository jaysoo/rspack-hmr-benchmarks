import styles from './ui-250.module.css';

/* eslint-disable-next-line */
export interface Ui250Props {}

export function Ui250(props: Ui250Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui250!</h1>
    </div>
  );
}

export default Ui250;
