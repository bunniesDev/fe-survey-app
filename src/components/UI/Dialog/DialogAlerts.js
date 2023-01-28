import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { color } from '../../../theme';
import Button from '../Button';
import { StyledCard } from '../Card';

const StyledDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const StyledDimmed = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledDialog = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 600px;
  position: relative;
  padding: 0;
  z-index: 100;
`;

const StyledDialogHeader = styled.div`
  border-bottom: 1px solid ${color.$border};
  padding: 1rem;
  font-weight: bold;
`;

const StyledDialogFooter = styled.div`
  border-top: 1px solid ${color.$border};
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledDialogContents = styled.div`
  padding: 1rem;
`;

function DialogContainer({
  children,
  title,
  labelClose = '취소',
  labelSubmit = '확인',
  onSubmit,
  onClose,
}) {
  const handleClickSubmit = () => {
    onSubmit();
  };

  const handleClickCancel = () => {
    onClose();
  };

  return createPortal(
    <StyledDialogContainer>
      <StyledDimmed onClick={handleClickCancel} />
      <StyledDialog>
        {title && <StyledDialogHeader>{title}</StyledDialogHeader>}
        <StyledDialogContents>{children}</StyledDialogContents>
        <StyledDialogFooter>
          <Button variant="secondary" onClick={handleClickCancel}>
            {labelClose}
          </Button>
          <Button variant="primary" onClick={handleClickSubmit}>
            {labelSubmit}
          </Button>
        </StyledDialogFooter>
      </StyledDialog>
    </StyledDialogContainer>,
    document.body,
  );
}

export default DialogContainer;
