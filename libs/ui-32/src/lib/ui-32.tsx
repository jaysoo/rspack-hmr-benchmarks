import styles from './ui-32.module.css';

/* eslint-disable-next-line */
export interface Ui32Props {}

export function Ui32(props: Ui32Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui32!</h1>
    </div>
  );
}

export default Ui32;
