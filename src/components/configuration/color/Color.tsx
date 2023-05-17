import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import styles from './Color.module.scss';

interface ColorProps {
    index: number
    value: string
    changeValue: (value: string) => any
    removeValue: (index: number) => any
}

export function Color({ index, value, changeValue, removeValue }: ColorProps) {
  return (
    <div className={styles.Color}>
      <div className={styles.ColorIndex}>{index}</div>
      <input
        className={styles.ColorInput}
        type="color"
        key={value}
        value={value}
        onChange={(ev) => changeValue(ev.target.value)}
      />
      <div className={styles.ColorRemove} onClick={() => removeValue(index)}><CloseIcon/></div>
    </div>
  );
}
