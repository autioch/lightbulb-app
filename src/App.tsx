/* eslint-disable no-alert */
import './App.scss';
import React, { useEffect, useState } from 'react';

import { Carousel } from './components/carousel/Carousel';
import { Toggle } from './components/toggle/Toggle';
import { Toolbar } from './components/toolbar/Toolbar';
import { ConfigContext } from './context';
import { ReactComponent as AboutIcon } from './icons/about.svg';
import { ReactComponent as ConfigIcon } from './icons/config.svg';

const colors: string[] = [
  '#afa',
  '#faa',
  '#aaf'
];

const changeSpeed = 2000;

export function App() {
  const [color, setColor] = useState(colors.at(-1)!);

  function changeColor() {
    const nextColor = colors.shift()!;

    colors.push(nextColor);

    setColor(nextColor);
  }

  useEffect(() => {
    const interval = setInterval(changeColor, changeSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <ConfigContext.Provider value={{
      color,
      speed: changeSpeed
    }}>
      <Carousel/>
      <Toolbar>
        <Toggle label={<AboutIcon/>} onClick={() => alert('about')}/>
        <Toggle label={<ConfigIcon/>} onClick={() => alert('about')}/>
      </Toolbar>
    </ConfigContext.Provider>
  );
}

