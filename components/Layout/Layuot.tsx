import { Header } from '../Header/Header';
import { Meta } from '../Meta/Meta';
import { Nav } from '../Nav/Nav';
import { LayoutProps } from './Types';
import styles from '../../styles/Layout.module.scss';

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          <Nav />
          {children}
        </main>
      </div>
    </>
  );
};
