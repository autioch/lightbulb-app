import { ReactElement } from 'react';

import styles from './toolbar.module.scss';

interface ToolbarProps {
    children: ReactElement[]
}

export function Toolbar({ children }: ToolbarProps) {
  return (
    <div className={styles.Toolbar}>
      {children}
    </div>
  );
}
