import styles from './ui-200.module.css';

/* eslint-disable-next-line */
export interface Ui200Props {}

export function Ui200(props: Ui200Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui200!</h1>
    </div>
  );
}

export default Ui200;
