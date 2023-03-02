import styles from './ui-8.module.css';

/* eslint-disable-next-line */
export interface Ui8Props {}

export function Ui8(props: Ui8Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui8!</h1>
    </div>
  );
}

export default Ui8;
