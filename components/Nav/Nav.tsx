import Link from 'next/link';
import styles from '../../styles/Nav.module.scss';

export const Nav = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.li}>
          <Link href='/launches'>Launches</Link>
        </li>
        <li className={styles.li}>
          <Link href='/rockets'>Rockets</Link>
        </li>
        <li className={styles.li}>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </div>
  );
};
