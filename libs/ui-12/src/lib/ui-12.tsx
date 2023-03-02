import styles from './ui-12.module.css';

/* eslint-disable-next-line */
export interface Ui12Props {}

export function Ui12(props: Ui12Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui12!</h1>
    </div>
  );
}

export default Ui12;
