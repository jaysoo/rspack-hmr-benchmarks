import styles from './ui-508.module.css';

/* eslint-disable-next-line */
export interface Ui508Props {}

export function Ui508(props: Ui508Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui508!</h1>
    </div>
  );
}

export default Ui508;
