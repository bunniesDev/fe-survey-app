import { useContext } from 'react';
import { DialogDispatchContext } from './DialogContext';

export default function useDialogs() {
  const { open, close } = useContext(DialogDispatchContext);

  const openDialog = (Component, props) => {
    open(Component, props);
  };

  const closeDialog = Component => {
    close(Component);
  };
  return { openDialog, closeDialog };
}
