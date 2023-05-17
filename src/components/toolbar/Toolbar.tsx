import './toolbar.scss';

interface ToolbarProps {
    children: any
}

export function Toolbar({ children }: ToolbarProps) {
  return (
    <div className="Toolbar">
      {children}
    </div>
  );
}
