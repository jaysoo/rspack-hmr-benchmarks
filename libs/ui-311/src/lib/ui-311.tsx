import styles from './ui-311.module.css';

/* eslint-disable-next-line */
export interface Ui311Props {}

export function Ui311(props: Ui311Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui311!</h1>
    </div>
  );
}

export default Ui311;
