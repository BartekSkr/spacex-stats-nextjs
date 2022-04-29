import React from 'react';
import { ItemDetails } from '../../../components/ItemDetails/ItemDetails';
import { Spinner } from '../../../components/Spinner/Spinner';
import styles from '../../../styles/Rocket.module.scss';
import { ROCKET_SCHEMA } from '../../api/schemas/schemas';
import { client } from '../../_app';
import { PropsInterface, RocketsProps } from './Types';

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

export const getServerSideProps = async ({
  params: { id },
}: PropsInterface) => {
  const { data, loading } = await client.query({
    query: ROCKET_SCHEMA,
    variables: { id: id },
  });

  return {
    props: {
      rocket: data.rocket,
      loading: loading,
    },
  };
};

export default rocket;
