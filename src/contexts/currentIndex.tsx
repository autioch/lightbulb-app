import { createContext, PropsWithChildren, useContext } from 'react';

export const defaultIndex = 0;

const CurrentIndexContext = createContext(defaultIndex);

interface CurrentIndexProviderProps extends PropsWithChildren {
    currentIndex: number
}

export function CurrentIndexProvider({ children, currentIndex }: CurrentIndexProviderProps) {
  return (
    <CurrentIndexContext.Provider value={currentIndex}>
      {children}
    </CurrentIndexContext.Provider>
  );
}

export function useCurrentIndex() {
  const speed = useContext(CurrentIndexContext);

  return speed;
}
