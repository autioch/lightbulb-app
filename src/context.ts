import { createContext } from 'react';

export interface Config {
}

export function configDefaults() {
  return {};
}

export const ConfigContext = createContext<Config>(configDefaults());
