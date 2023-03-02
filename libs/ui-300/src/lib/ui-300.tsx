import styles from './ui-300.module.css';

/* eslint-disable-next-line */
export interface Ui300Props {}

export function Ui300(props: Ui300Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui300!</h1>
    </div>
  );
}

export default Ui300;
