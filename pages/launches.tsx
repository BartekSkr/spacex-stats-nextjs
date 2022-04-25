import { useQuery } from '@apollo/client';
import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import { Spinner } from '../components/Spinner/Spinner';
import styles from '../styles/Launches.module.scss';
import { LAUNCHES_SCHEMA } from './api/schemas/schemas';
import { LaunchesInterface } from './Types';

const launches: React.FC = () => {
  const launchesQuery = useQuery(LAUNCHES_SCHEMA);

  return (
    <div className={styles.container}>
      {launchesQuery.loading && <Spinner />}
      {!launchesQuery.loading && launchesQuery.data && (
        <>
          {launchesQuery.data.launches.map((launch: LaunchesInterface) => (
            <Item key={launch.id} launches={true} item={launch} />
          ))}
        </>
      )}
    </div>
  );
};

export default launches;
