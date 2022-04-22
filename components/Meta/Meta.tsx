import Head from 'next/head';
import { MetaProps } from './Types';

export const Meta: React.FC<MetaProps> = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'SpaceX launches & rockets',
  keywords: 'spacex',
  description: 'Get stats of SpaceX launches & rockets',
};
