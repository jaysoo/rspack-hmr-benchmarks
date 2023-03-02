import styles from './ui-991.module.css';

/* eslint-disable-next-line */
export interface Ui991Props {}

export function Ui991(props: Ui991Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui991!</h1>
    </div>
  );
}

export default Ui991;
