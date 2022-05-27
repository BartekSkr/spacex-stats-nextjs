import { useQuery } from '@apollo/client';
import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import { Spinner } from '../components/Spinner/Spinner';
import styles from '../styles/Rockets.module.scss';
import { ROCKETS_SCHEMA } from './api/schemas/schemas';
import { RocketsInterface, RocketsProps } from './Types';
import { client } from './_app';

// const rockets: React.FC<RocketsProps> = ({ rockets, loading }) => {
const rockets: React.FC = () => {
  const rocketsQuery = useQuery(ROCKETS_SCHEMA);

  return (
    <div className={styles.container}>
      {rocketsQuery.loading && <Spinner />}
      {!rocketsQuery.loading && rocketsQuery.data && (
        <>
          {rocketsQuery.data.rockets.map((rocket: RocketsInterface) => (
            <Item key={rocket.id} isLaunches={false} item={rocket} />
          ))}
        </>
      )}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data, loading } = await client.query({
    query: ROCKETS_SCHEMA,
  });

  return {
    props: {
      rockets: data.rockets,
      loading: loading,
    },
  };
};

// export const getServerSideProps = async () => {
//   const { data, loading } = await client.query({ query: ROCKETS_SCHEMA });

//   return {
//     props: {
//       rockets: data.rockets,
//       loading: loading,
//     },
//   };
// };

export default rockets;
