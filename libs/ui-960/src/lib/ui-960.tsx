import styles from './ui-960.module.css';

/* eslint-disable-next-line */
export interface Ui960Props {}

export function Ui960(props: Ui960Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui960!</h1>
    </div>
  );
}

export default Ui960;
