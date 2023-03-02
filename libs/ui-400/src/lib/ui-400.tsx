import styles from './ui-400.module.css';

/* eslint-disable-next-line */
export interface Ui400Props {}

export function Ui400(props: Ui400Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui400!</h1>
    </div>
  );
}

export default Ui400;
