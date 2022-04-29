import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import { Spinner } from '../components/Spinner/Spinner';
import styles from '../styles/Launches.module.scss';
import { LAUNCHES_SCHEMA } from './api/schemas/schemas';
import { LaunchesInterface, LaunchesProps } from './Types';
import { client } from './_app';

const launches: React.FC<LaunchesProps> = ({ launches, loading }) => {
  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      {!loading && (
        <>
          {launches.map((launch: LaunchesInterface) => (
            <Item key={launch.id} isLaunches={true} item={launch} />
          ))}
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data, loading } = await client.query({ query: LAUNCHES_SCHEMA });

  return {
    props: {
      launches: data.launches,
      loading: loading,
    },
  };
};

export default launches;
