import { type Config, configDefaults } from '../context';
const LS_KEY = 'lightbulb-v1';

export function saveConfig(config: Config) {
  localStorage.setItem(LS_KEY, JSON.stringify(config));
}

export function restoreConfig(): Config {
  const serialized = localStorage.getItem(LS_KEY);

  return serialized ? JSON.parse(serialized) : configDefaults();

  // return configDefaults();
}

