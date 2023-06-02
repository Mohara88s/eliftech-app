import { Alert } from 'react-bootstrap';
import styles from './Message.module.css';

export default function Message({ message }) {
  return (
    <div className={styles.Message}>
      <Alert variant="warning">
        <p>{message}</p>
      </Alert>
    </div>
  );
}
