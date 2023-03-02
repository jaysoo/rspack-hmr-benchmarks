import styles from './ui-640.module.css';

/* eslint-disable-next-line */
export interface Ui640Props {}

export function Ui640(props: Ui640Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui640!</h1>
    </div>
  );
}

export default Ui640;
