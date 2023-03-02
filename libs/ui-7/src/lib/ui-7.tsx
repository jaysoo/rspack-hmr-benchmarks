import styles from './ui-7.module.css';

/* eslint-disable-next-line */
export interface Ui7Props {}

export function Ui7(props: Ui7Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui7!</h1>
    </div>
  );
}

export default Ui7;
