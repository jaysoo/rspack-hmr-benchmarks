import styles from './ui-5.module.css';

/* eslint-disable-next-line */
export interface Ui5Props {}

export function Ui5(props: Ui5Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui5!</h1>
    </div>
  );
}

export default Ui5;
