import styles from './toggle.module.scss';

interface ToggleProps {
  onClick: () => void
  label: string | any
}

export function Toggle({ onClick, label }: ToggleProps) {
  return (
    <div className={styles.Toggle} onClick={onClick}>{label}</div>
  );
}
