import Image from 'next/image';
import styles from '../../styles/Header.module.scss';
import logo from '../../public/logo.png';

export const Header = () => {
  return (
    <div className={styles.logo}>
      <Image className={styles.image} src={logo} alt='SpaceX logo' />
    </div>
  );
};
