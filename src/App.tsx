import './App.scss';
import React, { useState } from 'react';

import { About, aboutTitle } from './components/about/About';
import { Carousel } from './components/carousel/Carousel';
import { Configuration, configurationTitle } from './components/configuration/Configuration';
import { Modal } from './components/modal/Modal';
import { Toggle } from './components/toggle/Toggle';
import { Toolbar } from './components/toolbar/Toolbar';
import { defaultSpeed, SpeedProvider } from './contexts/speed';
import { useLocalStorage } from './hooks/useLocalStorage';
import { ReactComponent as AboutIcon } from './icons/about.svg';
import { ReactComponent as ConfigIcon } from './icons/config.svg';

export function App() {
  const [speed, setSpeed] = useLocalStorage<number>('speed', defaultSpeed);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);

  return (
    <SpeedProvider speed={speed}>
      <Carousel isPaused={isAboutOpen || isConfigurationOpen}/>
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
    </SpeedProvider>
  );
}

