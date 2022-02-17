import { Link } from 'react-router-dom';
import styles from './EntryItem.css';

export default function Entry({ id, title, date }) {
  const relativeDays = (new Date(date) - new Date()) / (1000 * 60 * 60 * 24);
  const relativeDate = new Intl.RelativeTimeFormat('en').format(
    Math.ceil(relativeDays),
    'days'
  );

  return (
    <li>
      <Link to={`/entries/${id}`}>
        {title} <span className={styles.date}>{relativeDate}</span>
      </Link>
    </li>
  );
}
