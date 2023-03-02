import styles from './app.module.css';
import { NxWelcome } from './nx-welcome';

export function App() {
  return (
    <div className={styles['container']} data-testid="welcome">
      Hello (4)
    </div>
  );
}
