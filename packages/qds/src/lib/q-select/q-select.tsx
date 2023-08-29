import styled from 'styled-components';

import { useState } from 'react';

import { Colors, Color, Spacers, borderWidth, borderRadius } from '../theme';
import { ButtonSize } from '../q-button/q-button';

const QSelectStyles = styled.div.attrs(
  (props: { $color: Color; $size: ButtonSize }) => ({
    $color: props.$color ? Colors[props.$color] : Colors.green,
  }),
)<{ $color?: Color }>`
  display: inline-block;
  position: relative;
  > div.toggle {
    color: ${(props) => props.$color};
    border: ${borderWidth} solid ${(props) => props.$color};
    font-size: 1em;
    padding: ${Spacers['3']};
    width: 100px;
    border-radius: ${borderRadius};
    display: block;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    position: relative;

    &::after {
      transition: all 0.1s ease-in-out;
      content: '↓';
      width: 32px;
      text-align: center;
      font-size: medium;
      position: absolute;
      right: 0;
    }

    &:hover {
      box-shadow: 0px -1px 2px -1px ${(props) => props.$color} inset;

      &::after {
        font-size: x-large;
        translate: 0 -4px;
        font-weight: bold;
      }
    }
  }

  > ul {
    z-index: 2;
    position: absolute;
    top: 100%;
    width: 100%;
    border: 1px solid ${(props) => props.$color};
    background-color: ${Colors.white};
    display: none;
    cursor: pointer;
    color: ${(props) => props.$color};

    li {
      padding: ${Spacers['3']};

      &:hover {
        background-color: ${(props) => props.$color}20;
      }
    }
  }

  &.is-open {
    > ul {
      display: flex;
      flex-direction: column;
    }

    > div.overlay {
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 1;
      opacity: 0;
      top: 0;
      left: 0;
    }
  }
`;

export interface QSelectOption<T> {
  text: string;
  value: T;
}

interface DropdownProps<T> {
  color?: Color;
  options: QSelectOption<T>[];
  onChange?: (selected?: T) => void;
}

export function QSelect<T>(props: DropdownProps<T>) {
  const { color = 'blue', options, onChange = () => null } = props;
  const [selected, setSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick(option: QSelectOption<T>) {
    setIsOpen(!isOpen);
    if (option !== selected) {
      setSelected(option);
      onChange(option.value);
    }
  }

  return (
    <QSelectStyles $color={color} className={`${isOpen ? 'is-open' : ''}`}>
      <div className="toggle" onClick={() => setIsOpen(!isOpen)}>
        {selected.text}
      </div>
      <ul className={`dd-options`}>
        {options.map((opt, i) => (
          <li key={i} onClick={() => handleClick(opt)}>
            <DropDownOption option={opt}></DropDownOption>
          </li>
        ))}
      </ul>
      {isOpen ? (
        <div className="overlay" onClick={() => setIsOpen(!isOpen)}></div>
      ) : null}
    </QSelectStyles>
  );
}

function DropDownOption<T>(props: { option: QSelectOption<T> }) {
  return <div>{props.option.text}</div>;
}
