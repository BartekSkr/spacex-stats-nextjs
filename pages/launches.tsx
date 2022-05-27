import { useQuery } from '@apollo/client';
import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import { Spinner } from '../components/Spinner/Spinner';
import styles from '../styles/Launches.module.scss';
import { LAUNCHES_SCHEMA } from './api/schemas/schemas';
import { LaunchesInterface } from './Types';
import { client } from './_app';

const launches: React.FC = () => {
  return (
    <>
      <Launches />
    </>
  );
};

const Launches = () => {
  const launchesQuery = useQuery(LAUNCHES_SCHEMA);

  return (
    <div className={styles.container}>
      {launchesQuery.loading && <Spinner />}
      {!launchesQuery.loading && launchesQuery.data && (
        <>
          {launchesQuery.data.launches.map((launch: LaunchesInterface) => (
            <Item key={launch.id} isLaunches={true} item={launch} />
          ))}
        </>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data, loading } = await client.query({
    query: LAUNCHES_SCHEMA,
  });

  return {
    props: {
      launches: data.launches,
      loading: loading,
    },
  };
};

export default launches;
