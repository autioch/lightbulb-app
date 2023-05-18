import { SyntheticEvent } from 'react';

import { type ColorItem, useColorsDispatch } from '../../../contexts/colors';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import styles from './Color.module.scss';

export interface ColorProps {
    color: ColorItem,
    canRemove: boolean
}

export function Color({ color, canRemove }: ColorProps) {
  const colorsDispatch = useColorsDispatch();

  function setColor(ev: SyntheticEvent<HTMLInputElement>) {
    colorsDispatch({
      type: 'update',
      id: color.id,
      value: (ev.target as HTMLInputElement).value
    });
  }

  function removeColor() {
    colorsDispatch({
      type: 'remove',
      id: color.id
    });
  }

  return (
    <div className={styles.Color}>
      <div className={styles.ColorIndex}>{color.id}</div>
      <input
        className={styles.ColorInput}
        type="color"
        value={color.value}
        onChange={setColor}
      />
      { canRemove && <div className={styles.ColorRemove} onClick={removeColor }><CloseIcon/></div> }
    </div>
  );
}
