import { createContext, PropsWithChildren, useContext } from 'react';

export const defaultSpeed = 2000;

const SpeedContext = createContext(defaultSpeed);

interface SpeedProviderProps extends PropsWithChildren {
    speed: number
}

export function SpeedProvider({ children, speed }: SpeedProviderProps) {
  return (
    <SpeedContext.Provider value={speed}>
      {children}
    </SpeedContext.Provider>
  );
}

export function useSpeed() {
  const speed = useContext(SpeedContext);

  return speed;
}
