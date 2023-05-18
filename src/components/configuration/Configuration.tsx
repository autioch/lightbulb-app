import React from 'react';

import { useColors, useColorsDispatch } from '../../contexts/colors';
import { useSpeed } from '../../contexts/speed';
import { Color } from './color/Color';
import styles from './Configuration.module.scss';

export const configurationTitle = 'Configuration';

export interface ConfigurationProps {
  setSpeed: (value: number) => void
}

export function Configuration({ setSpeed }: ConfigurationProps) {
  const speed = useSpeed();
  const colors = useColors();
  const colorsDispatch = useColorsDispatch();

  function addColor() {
    colorsDispatch({
      type: 'add'
    });
  }

  const canRemove = colors.length > 1;

  return (
    <div className={styles.Configuration}>
      <h4>Change speed</h4>
      <input
        id="speedInput"
        type="number"
        min={0}
        max={10000}
        value={speed}
        onChange={(ev) => setSpeed(parseInt(ev.target.value, 10))}
      />
      <p className={styles.ConfigurationWarning}>Warning! Setting value below 250 is not safe for epilepsy!</p>
      <h4>Color list</h4>
      <div className={styles.ConfigurationList}>
        {colors.map((color) => <Color key={color.id} color={color} canRemove={canRemove}/>)}
      </div>
      <div className={styles.ColorAdd} onClick={addColor}>+ Add Color</div>
    </div>
  );
}
