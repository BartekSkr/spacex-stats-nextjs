import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { ItemDetails } from '../../../components/ItemDetails/ItemDetails';
import { Spinner } from '../../../components/Spinner/Spinner';
import styles from '../../../styles/Rocket.module.scss';
import { ROCKET_SCHEMA } from '../../api/schemas/schemas';

const rocket: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const rocketQuery = useQuery(ROCKET_SCHEMA, { variables: { id } });

  return (
    <div className={styles.container}>
      {rocketQuery.loading && <Spinner />}
      {!rocketQuery.loading && rocketQuery.data && (
        <ItemDetails
          launches={false}
          name={rocketQuery.data.rocket.name}
          successActive={rocketQuery.data.rocket.active}
          startDate={rocketQuery.data.rocket.first_flight}
          details={rocketQuery.data.rocket.description}
          rocketHeight={rocketQuery.data.rocket.height.meters}
          rocketMass={rocketQuery.data.rocket.mass.kg}
        />
      )}
    </div>
  );
};

export default rocket;
