import styles from './ui-60.module.css';

/* eslint-disable-next-line */
export interface Ui60Props {}

export function Ui60(props: Ui60Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui60!</h1>
    </div>
  );
}

export default Ui60;
