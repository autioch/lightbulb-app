import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react';

import { getRandomColor } from '../utils/color';

export type ColorItem = {
  id: number,
  value: string
}

type State = ColorItem[];
type Action = { type: 'add'} | { type: 'remove', id: number} | {type: 'update', id: number, value: string}

const initialState: ColorItem[] = ([
  '#00FFFF',
  '#000000',
  '#0000FF',
  '#FF00FF',
  '#808080',
  '#008000',
  '#00FF00',
  '#800000',
  '#000080',
  '#808000',
  '#800080',
  '#FF0000',
  '#C0C0C0',
  '#008080',
  '#FFFFFF',
  '#FFFF00'
].map((value, index) => ({
  id: index,
  value
})));

let nextId = initialState.length;

function colorsReducer(colors: State, action: Action) {
  switch (action.type) {
    case 'add':
      return [
        ...colors, {
          id: nextId++,
          value: getRandomColor()
        }
      ];
    case 'remove':
      return colors.filter((color) => color.id !== action.id);
    case 'update':
      return colors.map((color) => {
        if (color.id === action.id) {
          return {
            ...color,
            value: action.value
          };
        }

        return color;
      });
    default:
      return colors;
  }
}

const ColorsContext = createContext(initialState);
const ColorsDispatchContext = createContext(null as unknown as Dispatch<Action>);

export function ColorsProvider({ children }: PropsWithChildren) {
  const [colors, dispatch] = useReducer(colorsReducer, initialState);

  return (
    <ColorsContext.Provider value={colors}>
      <ColorsDispatchContext.Provider value={dispatch}>
        {children}
      </ColorsDispatchContext.Provider>
    </ColorsContext.Provider>
  );
}

export function useColors() {
  const colors = useContext(ColorsContext);

  return colors;
}

export function useColorsDispatch() {
  const colors = useContext(ColorsDispatchContext);

  return colors;
}
