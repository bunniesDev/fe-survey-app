import { useEffect, useState, useMemo } from 'react';
import Dialog from './Dialog';
import { DialogDispatchContext, DialogStateContext } from './DialogContext';

function DialogProvider({ children }) {
  const [openDialogs, setOpenDialogs] = useState([]);
  const open = (Component, props) => {
    setOpenDialogs(dialogs => [...dialogs, { Component, props }]);
  };
  const close = Component => {
    setOpenDialogs(dialogs =>
      dialogs.filter(dialog => dialog.Component !== Component),
    );
  };

  useEffect(() => {}, [openDialogs]);

  const dispatch = useMemo(() => ({ open, close }), []);
  return (
    <DialogStateContext.Provider value={openDialogs}>
      <DialogDispatchContext.Provider value={dispatch}>
        {children}
        <Dialog />
      </DialogDispatchContext.Provider>
    </DialogStateContext.Provider>
  );
}

export default DialogProvider;
