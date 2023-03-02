import styles from './ui-20.module.css';

/* eslint-disable-next-line */
export interface Ui20Props {}

export function Ui20(props: Ui20Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui20!</h1>
    </div>
  );
}

export default Ui20;
