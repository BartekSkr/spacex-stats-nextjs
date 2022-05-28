import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import styles from '../styles/Launches.module.scss';
import { LAUNCHES_SCHEMA } from './api/schemas/schemas';
import { LaunchesInterface, LaunchesProps } from './Types';
import { client } from './_app';

const launches: React.FC<LaunchesProps> = ({ launches }) => {
  return (
    <div className={styles.container}>
      <>
        {launches.map((launch: LaunchesInterface) => (
          <Item key={launch.id} isLaunches={true} item={launch} />
        ))}
      </>
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({ query: LAUNCHES_SCHEMA });

  return {
    props: {
      launches: data.launches,
    },
  };
};

export default launches;
