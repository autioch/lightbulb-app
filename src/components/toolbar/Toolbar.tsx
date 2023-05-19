import { PropsWithChildren } from 'react';

import styles from './toolbar.module.scss';

export function Toolbar({ children }: PropsWithChildren) {
  return (
    <div className={styles.Toolbar}>
      {children}
    </div>
  );
}
