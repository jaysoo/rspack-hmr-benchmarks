import styles from './ui-911.module.css';

/* eslint-disable-next-line */
export interface Ui911Props {}

export function Ui911(props: Ui911Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui911!</h1>
    </div>
  );
}

export default Ui911;
