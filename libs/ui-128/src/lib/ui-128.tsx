import styles from './ui-128.module.css';

/* eslint-disable-next-line */
export interface Ui128Props {}

export function Ui128(props: Ui128Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui128!</h1>
    </div>
  );
}

export default Ui128;
