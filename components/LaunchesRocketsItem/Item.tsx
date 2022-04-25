import React from 'react';
import styles from '../../styles/Item.module.scss';
import { Button } from '../Button/Button';
import { ItemProps } from './Types';

export const Item: React.FC<ItemProps> = ({ launches, item }) => {
  return (
    <div className={styles.container}>
      {/* common code for launches & rockets */}
      <h2>{item.name}</h2>
      {/* code only for launches */}
      {launches && (
        <>
          <div className={styles.status}>
            <p>
              <b>Status: </b>
            </p>
            {item.success ? (
              <p className={styles.success}>Success</p>
            ) : (
              <p className={styles.fail}>Failure</p>
            )}
          </div>
          {item.links!.patch.small !== null && (
            <img src={item.links!.patch.small} alt='launch badge' />
          )}
        </>
      )}
      {/* code only for rockets */}
      {!launches && (
        <>
          <div className={styles.status}>
            <p>
              <b>Active: </b>
            </p>
            {item.active ? (
              <p className={styles.success}>Yes</p>
            ) : (
              <p className={styles.fail}>No</p>
            )}
          </div>
        </>
      )}
      {/* common code for launches & rockets */}
      <Button
        name={launches ? 'Launch Details' : 'Rocket Details'}
        to={launches ? `/launch/${item.id}` : `/rocket/${item.id}`}
      />
    </div>
  );
};
