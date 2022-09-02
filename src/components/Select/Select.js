import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Selector = styled.select`
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  height: 43px;
  padding: 12px 52px 12px 16px;
  font-size: 16px;
  border: unset;
  /* for Firefox */
  -moz-appearance: none;
  /* for Chrome */
  -webkit-appearance: none;
  color: inherit;
  width: fit-content;
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};
  :hover{
    color : ${COLORS.black};
  }
`;


const IconWrapper = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
     <Selector value={value} onChange={onChange}>
       {children}
     </Selector>
     <IconWrapper><Icon id="chevron-down" size={24}  /></IconWrapper>
    </Wrapper>
  );
};

export default Select;
