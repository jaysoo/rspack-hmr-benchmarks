import styles from './ui-90.module.css';

/* eslint-disable-next-line */
export interface Ui90Props {}

export function Ui90(props: Ui90Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui90!</h1>
    </div>
  );
}

export default Ui90;
