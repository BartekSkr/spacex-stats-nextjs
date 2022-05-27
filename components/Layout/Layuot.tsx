import { Header } from '../Header/Header';
import { Meta } from '../Meta/Meta';
import { Navbar } from '../Navbar/Navbar';
import { LayoutProps } from './Types';
import styles from '../../styles/Layout.module.scss';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <div className={styles.childrenContainer}>
            <Navbar />
            {children}
          </div>
        </main>
      </div>
    </>
  );
};
