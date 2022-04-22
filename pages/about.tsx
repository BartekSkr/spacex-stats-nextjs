import React from 'react';
import styles from '../styles/About.module.scss';

const about: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About:</h1>
      <p>This app shows SpaceX launches & rockets.</p>
      <p>
        Api comes from{' '}
        <a href='https://github.com/r-spacex/SpaceX-API' target='_blank'>
          <b>SpaceX API</b>
        </a>
      </p>
    </div>
  );
};

export default about;
