import styles from './ui-303.module.css';

/* eslint-disable-next-line */
export interface Ui303Props {}

export function Ui303(props: Ui303Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui303!</h1>
    </div>
  );
}

export default Ui303;
