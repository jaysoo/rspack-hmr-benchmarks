import styles from './ui-80.module.css';

/* eslint-disable-next-line */
export interface Ui80Props {}

export function Ui80(props: Ui80Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui80!</h1>
    </div>
  );
}

export default Ui80;
