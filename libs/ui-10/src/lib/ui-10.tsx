import styles from './ui-10.module.css';

/* eslint-disable-next-line */
export interface Ui10Props {}

export function Ui10(props: Ui10Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui10!</h1>
    </div>
  );
}

export default Ui10;
