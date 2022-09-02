import { COLORS } from '../../constants';
import Icon from '../Icon';
import React from 'react';
import VisuallyHidden from '../VisuallyHidden';
import styled from 'styled-components';

const SIZES = {
  small : {
    iconSize: 16,
    textHeight: 16,
    fontSize: 14,
    borderWidth: 1,
  },
  large: {
    iconSize: 24,
    textHeight: 21,
    fontSize: 18,
    borderWidth: 2,
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizeSettings = SIZES[size];
  return (<Label>
    <Input placeholder={placeholder} 
    style={{'--borderWidth': sizeSettings.borderWidth + "px",
            '--fontSize': sizeSettings.fontSize + "px",
            '--paddingLeft': 1.5*sizeSettings.iconSize + "px",
            '--verticalPadding': sizeSettings.fontSize/4 + "px",
            '--width': width + "px"
          }}
    />
    <IconWrapper id={icon} size={sizeSettings.iconSize}/>
  </Label>);
};

const Input = styled.input`
  width: var(--width);
  border: none;
  border-bottom: var(--borderWidth) solid ${COLORS.black};
  padding-left: var(--paddingLeft);
  padding-top: var(--verticalPadding);
  padding-bottom: var(--verticalPadding);
  font-size: var(--fontSize);
  color: inherit;
  font-weight: 700;
  ::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  outline-offset: 2px;
`;


const Label = styled.label`
  position: relative;
  color: ${COLORS.gray700};
  :hover {
    color: ${COLORS.black};
  }
`;


const IconWrapper = styled(Icon)`
  position: absolute;
  left: 0;
  bottom: 0;
  margin: auto 0;
`;

export default IconInput;
