import React from 'react';
import { Item } from '../components/LaunchesRocketsItem/Item';
import styles from '../styles/Rockets.module.scss';
import { ROCKETS_SCHEMA } from './api/schemas/schemas';
import { RocketsInterface, RocketsProps } from './Types';
import { client } from './_app';

const rockets: React.FC<RocketsProps> = ({ rockets }) => {
  return (
    <div className={styles.container}>
      {rockets.map((rocket: RocketsInterface) => (
        <Item key={rocket.id} isLaunches={false} item={rocket} />
      ))}
    </div>
  );
};

export const getStaticProps = async () => {
  const { data } = await client.query({ query: ROCKETS_SCHEMA });

  return {
    props: {
      rockets: data.rockets,
    },
  };
};

export default rockets;
