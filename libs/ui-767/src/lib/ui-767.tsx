import styles from './ui-767.module.css';

/* eslint-disable-next-line */
export interface Ui767Props {}

export function Ui767(props: Ui767Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui767!</h1>
    </div>
  );
}

export default Ui767;
