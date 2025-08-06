import { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './button.module.css';

type DownloadButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function BtnDownload({
  children,
  ...rest
}: DownloadButtonProps) {
  return (
    <button {...rest} className={styles.downloadButton}>
      {children}
    </button>
  );
}
