import { type Config, configDefaults } from '../context';
const LS_KEY = 'lightbulb-v1';

// TODO convert to hook

export function saveConfig(config: Config) {
  localStorage.setItem(LS_KEY, JSON.stringify(config));
}

export function restoreConfig(): Config {
  const serialized = localStorage.getItem(LS_KEY);

  return serialized ? JSON.parse(serialized) : configDefaults();

  // return configDefaults();
}

