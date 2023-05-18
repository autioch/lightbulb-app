import './App.scss';
import React, { useCallback, useEffect, useState } from 'react';

import { About, aboutTitle } from './components/about/About';
import { Carousel } from './components/carousel/Carousel';
import { Configuration, configurationTitle } from './components/configuration/Configuration';
import { Modal } from './components/modal/Modal';
import { Toggle } from './components/toggle/Toggle';
import { Toolbar } from './components/toolbar/Toolbar';
import { ColorProvider, defaultColors } from './contexts/colors';
import { CurrentIndexProvider, defaultIndex } from './contexts/currentIndex';
import { defaultSpeed, SpeedProvider } from './contexts/speed';
import { ReactComponent as AboutIcon } from './icons/about.svg';
import { ReactComponent as ConfigIcon } from './icons/config.svg';
import { getRandomColor } from './utils/color';

// eslint-disable-next-line max-lines-per-function
export function App() {
  const [currentIndex, setIndex] = useState(defaultIndex);
  const [speed, setSpeed] = useState(defaultSpeed);
  const [colors, setColors] = useState(defaultColors);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConfigurationOpen, setIsConfigurationOpen] = useState(false);

  const changeColor = useCallback(() => {
    const newIndex = currentIndex + 1 > colors.length ? 0 : currentIndex + 1;

    setIndex(newIndex);
  }, [colors, currentIndex]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isAboutOpen && !isConfigurationOpen) {
      const interval = setInterval(changeColor, speed);

      return () => clearInterval(interval);
    }
  }, [isAboutOpen, isConfigurationOpen, speed, changeColor]);

  function setColor(changeIndex: number, newColor: string) {
    const newColors = colors.map((oldColor, index) => index === changeIndex ? newColor : oldColor); // eslint-disable-line no-confusing-arrow, max-len

    setColors(newColors);
  }

  function removeColor(removeIndex: number) {
    const newColors = colors.filter((color, index) => index !== removeIndex);

    setColors(newColors);
  }

  function addColor() {
    const newColors = [...colors, getRandomColor()];

    setColors(newColors);
  }

  return (
    <SpeedProvider speed={speed}>
      <ColorProvider colors={colors}>
        <CurrentIndexProvider currentIndex={currentIndex}>
          <Carousel/>
          <Modal
            isOpen={isAboutOpen}
            title={aboutTitle}
            onClose={() => setIsAboutOpen(false)}
          >
            <About/>
          </Modal>
          <Modal
            isOpen={isConfigurationOpen}
            title={configurationTitle}
            onClose={() => setIsConfigurationOpen(false)}
          >
            <Configuration setSpeed={setSpeed} setColor={setColor} removeColor={removeColor} addColor={addColor}/>
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
      </ColorProvider>
    </SpeedProvider>
  );
}

