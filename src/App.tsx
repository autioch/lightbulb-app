import './App.scss';
import React, { useCallback, useEffect, useState } from 'react';

import { About, aboutTitle } from './components/about/About';
import { Carousel } from './components/carousel/Carousel';
import { Configuration, configurationTitle } from './components/configuration/Configuration';
import { Modal } from './components/modal/Modal';
import { Toggle } from './components/toggle/Toggle';
import { Toolbar } from './components/toolbar/Toolbar';
import { ConfigContext } from './context';
import { ReactComponent as AboutIcon } from './icons/about.svg';
import { ReactComponent as ConfigIcon } from './icons/config.svg';
import { restoreConfig, saveConfig } from './utils/persistence';

// eslint-disable-next-line max-lines-per-function
export function App() {
  const { color: originalColor = '#afa', colors = [], speed: originalSpeed = 2000 } = restoreConfig();
  const [color, setColor] = useState(originalColor);
  const [speed, setSpeed] = useState(originalSpeed);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);

  const changeColor = useCallback(() => {
    const currentIndex = colors.indexOf(color);
    const newIndex = currentIndex + 1 > colors.length ? 0 : currentIndex + 1;

    setColor(colors[newIndex]);
  }, [colors, color]);

  useEffect(() => {
    saveConfig({
      speed,
      color,
      colors
    });
  }, [color, colors, speed]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isAboutOpen && !isConfigurationOpen) {
      const interval = setInterval(changeColor, speed);

      return () => clearInterval(interval);
    }
  }, [isAboutOpen, isConfigurationOpen, speed, changeColor]);

  return (
    <ConfigContext.Provider value={{
      color,
      speed,
      colors
    }}>
      <Carousel/>
      <Modal
        isOpen={isAboutOpen}
        title={aboutTitle}
        closeFn={() => setIsAboutOpen(false)}
      >
        <About/>
      </Modal>
      <Modal
        isOpen={isConfigurationOpen}
        title={configurationTitle}
        closeFn={() => setIsConfigurationOpen(false)}
      >
        <Configuration setSpeed={setSpeed} setColor={() => {}} removeColor={() => {}} addColor={() => {}}/>
      </Modal>
      <Toolbar>
        <Toggle label={<AboutIcon/>} onClick={() => setIsAboutOpen(!isAboutOpen)}/>
        <Toggle label={<ConfigIcon/>} onClick={() => setIsConfigurationOpen(!isConfigurationOpen)}/>
      </Toolbar>
    </ConfigContext.Provider>
  );
}

