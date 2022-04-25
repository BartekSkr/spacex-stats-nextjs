import React from 'react';
import { Button } from '../components/Button/Button';
import styles from '../styles/page404.module.scss';

const page404 = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops, sorry we can't find that page.</p>
      <Button name='&larr; Go to home page' to='/' />
    </div>
  );
};

export default page404;
