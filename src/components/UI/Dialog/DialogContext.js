import { createContext } from 'react';

export const DialogStateContext = createContext({});

export const DialogDispatchContext = createContext({
  open: () => {},
  close: () => {},
});
