/* eslint-disable no-alert */
import './App.scss';
import React, { useEffect, useState } from 'react';

import { About, modalTitle } from './components/about/About';
import { Carousel } from './components/carousel/Carousel';
import { Modal } from './components/modal/Modal';
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
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
      <Modal
        isOpen={isAboutOpen}
        title={modalTitle}
        closeFn={() => setIsAboutOpen(false)}
      >
        <About/>
      </Modal>
      <Toolbar>
        <Toggle label={<AboutIcon/>} onClick={() => setIsAboutOpen(!isAboutOpen)}/>
        <Toggle label={<ConfigIcon/>} onClick={() => alert('about')}/>
      </Toolbar>
    </ConfigContext.Provider>
  );
}

