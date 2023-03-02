import { createContext } from 'react';

export const themes = {
  light: {
    type: 'light',
    fontColor: '#443C36',
    background: '#fff'
  },
  dark: {
    type: 'dark',
    fontColor: '#dcdcdc',
    background: '#443C36'
  }
}


export const ThemeContext = createContext({});