import styles from './ui-768.module.css';

/* eslint-disable-next-line */
export interface Ui768Props {}

export function Ui768(props: Ui768Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui768!</h1>
    </div>
  );
}

export default Ui768;
