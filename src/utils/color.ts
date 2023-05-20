/* eslint-disable no-magic-numbers */

export function getRandomColor(): string {
  const hex = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

  return `#${hex}`;
}
