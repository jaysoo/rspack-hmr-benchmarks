import styles from './ui-992.module.css';

/* eslint-disable-next-line */
export interface Ui992Props {}

export function Ui992(props: Ui992Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui992!</h1>
    </div>
  );
}

export default Ui992;
