import styles from './ui-18.module.css';

/* eslint-disable-next-line */
export interface Ui18Props {}

export function Ui18(props: Ui18Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui18!</h1>
    </div>
  );
}

export default Ui18;
