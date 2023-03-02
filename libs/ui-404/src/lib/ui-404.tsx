import styles from './ui-404.module.css';

/* eslint-disable-next-line */
export interface Ui404Props {}

export function Ui404(props: Ui404Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui404!</h1>
    </div>
  );
}

export default Ui404;
