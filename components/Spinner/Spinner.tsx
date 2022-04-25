import React from 'react';
import styles from '../../styles/Spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
      <div className={styles.spinnerDot}></div>
    </div>
  );
};
