import React, { useContext } from 'react';

import { ConfigContext } from '../../context';
import { type ColorProps, Color } from './color/Color';
import styles from './Configuration.module.scss';

export const configurationTitle = 'Configuration';

export interface ConfigurationProps extends Pick<ColorProps, 'setColor' | 'removeColor'>{
  setSpeed: (value: number) => void
  addColor: () => void
}

export function Configuration({ setSpeed, setColor, removeColor, addColor }: ConfigurationProps) {
  const config = useContext(ConfigContext);
  const { speed, colors } = config;

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
      <div>
        {colors.map((color, index) => <Color
          key={index}
          index={index}
          value={color}
          setColor={setColor}
          removeColor={removeColor}
        />)}
      </div>
      <div className={styles.ColorAdd} onClick={addColor}>+ Add Color</div>
    </div>
  );
}
