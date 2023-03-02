import styles from './ui-123.module.css';

/* eslint-disable-next-line */
export interface Ui123Props {}

export function Ui123(props: Ui123Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui123!</h1>
    </div>
  );
}

export default Ui123;
