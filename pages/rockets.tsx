import { useQuery } from '@apollo/client';
import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import { Spinner } from '../components/Spinner/Spinner';
import styles from '../styles/Rockets.module.scss';
import { ROCKETS_SCHEMA } from './api/schemas/schemas';
import { RocketsInterface } from './Types';
import { client } from './_app';

const rockets: React.FC<any> = ({ rockets, loading }) => {
  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      {!loading && (
        <>
          {rockets.map((rocket: RocketsInterface) => (
            <Item key={rocket.id} isLaunches={false} item={rocket} />
          ))}
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  const { data, loading } = await client.query(ROCKETS_SCHEMA);

  return {
    props: {
      rockets: data.rockets,
      loading: loading,
    },
  };
};

export default rockets;
