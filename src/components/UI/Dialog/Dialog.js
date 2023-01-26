import React, { useContext } from 'react';
import { DialogDispatchContext, DialogStateContext } from './DialogContext';

function Dialog() {
  const isOpenDialogs = useContext(DialogStateContext);
  const { close } = useContext(DialogDispatchContext);

  return isOpenDialogs.map((dialog, index) => {
    const { Component, props } = dialog;
    const { onSubmit, ...restProps } = props;

    const onClose = () => {
      close(Component);
    };
    const handleSubmit = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
      onClose();
    };

    return (
      <Component
        key={index}
        onClose={onClose}
        onSubmit={handleSubmit}
        {...restProps}
      />
    );
  });
}

export default Dialog;
