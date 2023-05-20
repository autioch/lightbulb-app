import { type ReactElement } from 'react';

import styles from './toggle.module.scss';

interface ToggleProps {
  onClick: () => void
  children: ReactElement
}

export function Toggle({ onClick, children }: ToggleProps) {
  return (
    <div className={styles.Toggle} onClick={onClick}>{children}</div>
  );
}
