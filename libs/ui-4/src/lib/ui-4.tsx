import styles from './ui-4.module.css';

/* eslint-disable-next-line */
export interface Ui4Props {}

export function Ui4(props: Ui4Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui4!</h1>
    </div>
  );
}

export default Ui4;
