import styles from './ui-2.module.css';

/* eslint-disable-next-line */
export interface Ui2Props {}

export function Ui2(props: Ui2Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui2!</h1>
    </div>
  );
}

export default Ui2;
