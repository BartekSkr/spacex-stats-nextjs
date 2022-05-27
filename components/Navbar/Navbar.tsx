import Link from 'next/link';
import styles from '../../styles/Nav.module.scss';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();

  const navbarTabs = [
    { name: 'Home', path: '/' },
    { name: 'Launches', path: '/launches' },
    { name: 'Rockets', path: '/rockets' },
    { name: 'About', path: '/about' },
  ];

  return (
    <div className={styles.container}>
      <ul>
        {navbarTabs.map((tab) => (
          <li key={tab.name} className={styles.li}>
            <Link href={tab.path}>
              <a
                className={
                  router.pathname === `${tab.path}`
                    ? `${styles.linkActive}`
                    : `${styles.link}`
                }
              >
                {tab.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
