import styles from './ui-500.module.css';

/* eslint-disable-next-line */
export interface Ui500Props {}

export function Ui500(props: Ui500Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui500!</h1>
    </div>
  );
}

export default Ui500;
