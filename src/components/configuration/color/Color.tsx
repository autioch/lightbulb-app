import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import styles from './Color.module.scss';

export interface ColorProps {
    index: number
    value: string
    setColor: (index: number, value: string) => any
    removeColor: (index: number) => any
}

export function Color({ index, value, setColor, removeColor }: ColorProps) {
  return (
    <div className={styles.Color}>
      <div className={styles.ColorIndex}>{index}</div>
      <input
        className={styles.ColorInput}
        type="color"
        key={value}
        value={value}
        onChange={(ev) => setColor(index, ev.target.value)}
      />
      <div className={styles.ColorRemove} onClick={() => removeColor(index)}><CloseIcon/></div>
    </div>
  );
}
