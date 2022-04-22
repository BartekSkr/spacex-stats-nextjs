import Link from 'next/link';
import { ButtonProps } from './Types';
import styles from '../../styles/Button.module.scss';

export const Button: React.FC<ButtonProps> = ({ name, to }) => {
  return (
    <Link href={to}>
      <button className={styles.button}>{name}</button>
    </Link>
  );
};
