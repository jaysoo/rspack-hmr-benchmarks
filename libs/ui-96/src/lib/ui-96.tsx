import styles from './ui-96.module.css';

/* eslint-disable-next-line */
export interface Ui96Props {}

export function Ui96(props: Ui96Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui96!</h1>
    </div>
  );
}

export default Ui96;
