/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const LENGTH = 370;

const Outside = styled.div`
  width: ${LENGTH}px;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--borderRadius);
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  overflow: hidden;
`;

const Inside = styled.div`
  width: var(--width);
  height: var(--height);
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background-color: ${COLORS.primary};
`;

const InsideWrapper = styled.div`
  border-radius: 4px;
  overflow : hidden;
`;

const ProgressBar = ({ value, size }) => {
  const getHeight = () => {
    switch(size){
      case 'small': return 8;
      case 'medium': return 12;
      case 'large': return 16;
    }
  };
  const padding = size === 'large' ? 4 : 0;
  const borderRadius = size === 'large' ? 8 : 4;
  return (<Outside role="progressbar" aria-valuenow={value} aria style={{'--padding': padding +'px', '--borderRadius': borderRadius +'px'}}>
    <InsideWrapper>
      <Inside style={{'--width': value +'%', '--height' : getHeight() +'px'}}/>
    </InsideWrapper>
  </Outside>);
};

export default ProgressBar;
