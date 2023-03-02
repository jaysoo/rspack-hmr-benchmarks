import styles from './ui-999.module.css';

/* eslint-disable-next-line */
export interface Ui999Props {}

export function Ui999(props: Ui999Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui999!</h1>
    </div>
  );
}

export default Ui999;
