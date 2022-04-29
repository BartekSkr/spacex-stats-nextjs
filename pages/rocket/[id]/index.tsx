import { GetStaticPropsContext } from 'next';
import React from 'react';
import { ItemDetails } from '../../../components/ItemDetails/ItemDetails';
import { Spinner } from '../../../components/Spinner/Spinner';
import styles from '../../../styles/Rocket.module.scss';
import { ROCKETS_SCHEMA, ROCKET_SCHEMA } from '../../api/schemas/schemas';
import { client } from '../../_app';
import { RocketsProps } from './Types';

const rocket: React.FC<RocketsProps> = ({ rocket, loading }) => {
  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      {!loading && (
        <ItemDetails
          launches={false}
          name={rocket.name}
          successActive={rocket.active}
          startDate={rocket.first_flight}
          details={rocket.description}
          rocketHeight={rocket.height.meters}
          rocketMass={rocket.mass.kg}
        />
      )}
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { data, loading } = await client.query({
    query: ROCKET_SCHEMA,
    variables: { id: context.params?.id },
  });

  return {
    props: {
      rocket: data.rocket,
      loading: loading,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: ROCKETS_SCHEMA });
  const ids = data.rockets.map((rocket: any) => rocket.id);
  const paths = ids.map((id: string) => ({ params: { id: id } }));

  return {
    paths,
    fallback: true,
  };
};

export default rocket;
