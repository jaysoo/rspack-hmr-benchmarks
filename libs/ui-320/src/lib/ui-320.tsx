import styles from './ui-320.module.css';

/* eslint-disable-next-line */
export interface Ui320Props {}

export function Ui320(props: Ui320Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui320!</h1>
    </div>
  );
}

export default Ui320;
