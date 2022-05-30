import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>The app shows SpaceX launches & rockets stats</h2>
    </div>
  );
};

export default home;
