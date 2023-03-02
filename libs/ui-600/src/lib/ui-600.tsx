import styles from './ui-600.module.css';

/* eslint-disable-next-line */
export interface Ui600Props {}

export function Ui600(props: Ui600Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui600!</h1>
    </div>
  );
}

export default Ui600;
