import './App.scss';
import React, { useCallback, useEffect, useState } from 'react';

import { About, aboutTitle } from './components/about/About';
import { Carousel } from './components/carousel/Carousel';
import { Configuration, configurationTitle } from './components/configuration/Configuration';
import { Modal } from './components/modal/Modal';
import { Toggle } from './components/toggle/Toggle';
import { Toolbar } from './components/toolbar/Toolbar';
import { useColors } from './contexts/colors';
import { CurrentIndexProvider, defaultIndex } from './contexts/currentIndex';
import { defaultSpeed, SpeedProvider } from './contexts/speed';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ReactComponent as AboutIcon } from './icons/about.svg';
import { ReactComponent as ConfigIcon } from './icons/config.svg';

export function App() {
  const [currentIndex, setIndex] = useState(defaultIndex);
  const [speed, setSpeed] = useLocalStorage<number>('speed', defaultSpeed);
  const colors = useColors();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);

  const changeColor = useCallback(() => {
    setIndex((currentIndex + 1) % colors.length);
  }, [colors, currentIndex]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isAboutOpen && !isConfigurationOpen) {
      const interval = setInterval(changeColor, speed);

      return () => clearInterval(interval);
    }
  }, [isAboutOpen, isConfigurationOpen, speed, changeColor]);

  return (
    <SpeedProvider speed={speed}>
      <CurrentIndexProvider currentIndex={currentIndex}>
        <Carousel/>
        <Modal isOpen={isAboutOpen} title={aboutTitle} onClose={() => setIsAboutOpen(false)} >
          <About/>
        </Modal>
        <Modal isOpen={isConfigurationOpen} title={configurationTitle} onClose={() => setIsConfigurationOpen(false)} >
          <Configuration setSpeed={setSpeed}/>
        </Modal>
        <Toolbar>
          <Toggle onClick={() => setIsAboutOpen(!isAboutOpen)}>
            <AboutIcon/>
          </Toggle>
          <Toggle onClick={() => setIsConfigurationOpen(!isConfigurationOpen)}>
            <ConfigIcon/>
          </Toggle>
        </Toolbar>
      </CurrentIndexProvider>
    </SpeedProvider>
  );
}

