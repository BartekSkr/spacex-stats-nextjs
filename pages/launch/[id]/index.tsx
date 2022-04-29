import { GetStaticPropsContext } from 'next';
import React from 'react';
import { ItemDetails } from '../../../components/ItemDetails/ItemDetails';
import { Spinner } from '../../../components/Spinner/Spinner';
import styles from '../../../styles/Launch.module.scss';
import { LAUNCHES_SCHEMA, LAUNCH_SCHEMA } from '../../api/schemas/schemas';
import { client } from '../../_app';
import { LaunchProps } from './Types';

const launch: React.FC<LaunchProps> = ({ launch, loading }) => {
  return (
    <div className={styles.container}>
      {loading && <Spinner />}
      {!loading && (
        <ItemDetails
          launches={true}
          name={launch.name}
          successActive={launch.success}
          startDate={launch.date_local}
          launchRocketName={launch.rocket.name}
          details={launch.details}
          launchBadge={launch.links.patch.small}
          launchFailures={launch.failures}
        />
      )}
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { data, loading } = await client.query({
    query: LAUNCH_SCHEMA,
    variables: { id: context.params?.id },
  });

  return {
    props: {
      launch: data.launch,
      loading: loading,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({ query: LAUNCHES_SCHEMA });
  const ids = data.launches.map((launch: any) => launch.id);
  const paths = ids.map((id: string) => ({ params: { id: id } }));

  return {
    paths,
    fallback: false,
  };
};

export default launch;
