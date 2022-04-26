import { useQuery } from '@apollo/client';
import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import { Spinner } from '../components/Spinner/Spinner';
import styles from '../styles/Rockets.module.scss';
import { ROCKETS_SCHEMA } from './api/schemas/schemas';
import { RocketsInterface } from './Types';

const rockets = () => {
  const rocketsQuery = useQuery(ROCKETS_SCHEMA);

  return (
    <div className={styles.container}>
      {rocketsQuery.loading && <Spinner />}
      {!rocketsQuery.loading && rocketsQuery.data && (
        <>
          {rocketsQuery.data.rockets.map((rocket: RocketsInterface) => (
            <Item key={rocket.id} launches={false} item={rocket} />
          ))}
        </>
      )}
    </div>
  );
};

export default rockets;
