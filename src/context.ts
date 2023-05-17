import { createContext } from 'react';

export interface Config {
  speed: number
  color: string
  colors: string[]
}

export function configDefaults() {
  return {
    speed: 2000,
    color: '#afa',
    colors: ['#aaffaa', '#ffaaaa', '#aaaaff']
  };
}

export const ConfigContext = createContext<Config>(configDefaults());
