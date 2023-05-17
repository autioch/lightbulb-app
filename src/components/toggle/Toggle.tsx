import './toggle.scss';

interface ToggleProps {
  onClick: () => void
  label: string | any
}

export function Toggle({ onClick, label }: ToggleProps) {
  return (
    <div className="Toggle" onClick={onClick}>{label}</div>
  );
}
