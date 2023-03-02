import styles from './ui-360.module.css';

/* eslint-disable-next-line */
export interface Ui360Props {}

export function Ui360(props: Ui360Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui360!</h1>
    </div>
  );
}

export default Ui360;
