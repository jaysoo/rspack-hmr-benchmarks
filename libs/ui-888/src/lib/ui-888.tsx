import styles from './ui-888.module.css';

/* eslint-disable-next-line */
export interface Ui888Props {}

export function Ui888(props: Ui888Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui888!</h1>
    </div>
  );
}

export default Ui888;
