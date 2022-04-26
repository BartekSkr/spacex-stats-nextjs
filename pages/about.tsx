import React from 'react';
import { Button } from '../components/Button/Button';
import styles from '../styles/About.module.scss';

const about: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>About:</h1>
      <p>This app shows SpaceX launches & rockets.</p>
      <p>
        Api comes from{' '}
        <a
          href='https://github.com/r-spacex/SpaceX-API'
          target='_blank'
          rel='noreferrer'
        >
          <b>SpaceX API</b>
        </a>
      </p>
      <Button name='&larr; Go home' to='/' />
    </div>
  );
};

export default about;
