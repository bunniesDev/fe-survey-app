import React, { useContext } from 'react';
import { DialogDispatchContext, DialogStateContext } from './DialogContext';

function Dialog() {
  const opendDialogs = useContext(DialogStateContext);
  const { close } = useContext(DialogDispatchContext);

  return opendDialogs.map((dialog, index) => {
    const { Component, props } = dialog;
    const { onClose, onCustom, onSubmit, ...restProps } = props;

    const closeHandler = async () => {
      close(Component);
    };

    const customHandler = async () => {
      if (typeof onCustom === 'function') {
        await onCustom();
      }
      closeHandler();
    };

    const submitHandler = async () => {
      if (typeof onSubmit === 'function') {
        await onSubmit();
      }
      closeHandler();
    };

    return (
      <Component
        key={index}
        onClose={closeHandler}
        onSubmit={submitHandler}
        onCustom={customHandler}
        {...restProps}
      />
    );
  });
}

export default Dialog;
