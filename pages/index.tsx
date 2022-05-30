import type { NextPage } from 'next';
import styles from '../styles/Home.module.scss';

const home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>
        The app shows{' '}
        <a
          className={styles.link}
          href='https://www.spacex.com/'
          target='_blank'
          rel='noreferrer'
        >
          SpaceX
        </a>{' '}
        launches & rockets stats
      </h1>
    </div>
  );
};

export default home;
