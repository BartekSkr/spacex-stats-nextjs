import { useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import React from 'react';
import { ItemDetails } from '../../../components/ItemDetails/ItemDetails';
import { Spinner } from '../../../components/Spinner/Spinner';
import styles from '../../../styles/Launch.module.scss';
import { LAUNCH_SCHEMA } from '../../api/schemas/schemas';

const launch: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const launchQuery = useQuery(LAUNCH_SCHEMA, { variables: { id } });

  return (
    <div className={styles.container}>
      {launchQuery.loading && <Spinner />}
      {!launchQuery.loading && launchQuery.data && (
        <ItemDetails
          launches={true}
          name={launchQuery.data.launch.name}
          successActive={launchQuery.data.launch.success}
          startDate={launchQuery.data.launch.date_local}
          launchRocketName={launchQuery.data.launch.rocket.name}
          details={launchQuery.data.launch.details}
          launchBadge={launchQuery.data.launch.links.patch.small}
          launchFailures={launchQuery.data.launch.failures}
        />
      )}
    </div>
  );
};

export default launch;
