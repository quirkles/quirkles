import React from 'react';
import styled from 'styled-components';
import { QGlobalStyles } from './qGlobalStyles';

export { QGlobalStyles } from './qGlobalStyles';

const StyledQDSWrapper = styled.div`
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  > div {
    > div {
      width: 100%;
      max-width: 90%;
      margin: 0 auto;
    }
  }
`;

export function QDSWrapper(props: React.PropsWithChildren) {
  return (
    <React.Fragment>
      <QGlobalStyles></QGlobalStyles>
      <StyledQDSWrapper>
        <div>
          <div>{props.children}</div>
        </div>
      </StyledQDSWrapper>
    </React.Fragment>
  );
}
