import React from 'react';
import styled from 'styled-components';

const StyledNoneLayout = styled.main`
  max-width: 640px;
  margin: 0 auto;
  background-color: #fff;
  height: 100vh; // 혹시나 Custom Property 지원 안하는 브라우저를 위한 복귀점
  height: calc(var(--vh, 1vh) * 100);

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
`;

function NoneLayout({ children }) {
  return <StyledNoneLayout>{children}</StyledNoneLayout>;
}

export default NoneLayout;
