import styles from './ui-480.module.css';

/* eslint-disable-next-line */
export interface Ui480Props {}

export function Ui480(props: Ui480Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui480!</h1>
    </div>
  );
}

export default Ui480;
