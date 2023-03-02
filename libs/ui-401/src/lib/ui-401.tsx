import styles from './ui-401.module.css';

/* eslint-disable-next-line */
export interface Ui401Props {}

export function Ui401(props: Ui401Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui401!</h1>
    </div>
  );
}

export default Ui401;
