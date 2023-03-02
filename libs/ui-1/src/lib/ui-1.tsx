import styles from './ui-1.module.css';

export interface Ui1Props { }

// Bump this value to update: 2

export function Ui1(props: Ui1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui1! ({Date.now()})</h1>
    </div>
  );
}

export default Ui1;
