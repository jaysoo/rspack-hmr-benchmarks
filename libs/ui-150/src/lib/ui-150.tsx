import styles from './ui-150.module.css';

/* eslint-disable-next-line */
export interface Ui150Props {}

export function Ui150(props: Ui150Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui150!</h1>
    </div>
  );
}

export default Ui150;
