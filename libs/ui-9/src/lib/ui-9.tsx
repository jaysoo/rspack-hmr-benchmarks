import styles from './ui-9.module.css';

/* eslint-disable-next-line */
export interface Ui9Props {}

export function Ui9(props: Ui9Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui9!</h1>
    </div>
  );
}

export default Ui9;
