import styles from './ui-3.module.css';

/* eslint-disable-next-line */
export interface Ui3Props {}

export function Ui3(props: Ui3Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui3!</h1>
    </div>
  );
}

export default Ui3;
