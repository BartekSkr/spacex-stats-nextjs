import Link from 'next/link';
import styles from '../../styles/Nav.module.scss';
import { useRouter } from 'next/router';

export const Nav = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <ul>
        <li className={styles.li}>
          <Link href='/launches'>
            <a
              className={
                router.pathname === '/launches' ? `${styles.linkActive}` : ''
              }
            >
              Launches
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href='/rockets'>
            <a
              className={
                router.pathname === '/rockets' ? `${styles.linkActive}` : ''
              }
            >
              Rockets
            </a>
          </Link>
        </li>
        <li className={styles.li}>
          <Link href='/about'>
            <a
              className={
                router.pathname === '/about' ? `${styles.linkActive}` : ''
              }
            >
              About
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
