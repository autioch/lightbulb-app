import { createContext, PropsWithChildren, useContext } from 'react';

export const defaultColors = ['#aaffaa', '#ffaaaa', '#aaaaff'];

const ColorsContext = createContext([...defaultColors]);

interface ColorsProviderProps extends PropsWithChildren {
    colors: string[]
}

export function ColorProvider({ children, colors }: ColorsProviderProps) {
  return (
    <ColorsContext.Provider value={colors}>
      {children}
    </ColorsContext.Provider>
  );
}

export function useColors() {
  const colors = useContext(ColorsContext);

  return colors;
}
