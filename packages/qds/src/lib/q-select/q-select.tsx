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
    padding: ${Spacers['3']} ${Spacers['4']};
    max-width: 100px;
    border-radius: ${borderRadius};
    display: flex;
    cursor: pointer;
    position: relative;
    transition: all 0.2s ease-in-out;
    box-shadow: inset 1px -1px 1px 0px ${(props) => props.$color};

    &::after {
      margin-left: ${Spacers['3']};
      transition: all 0.5s ease-in-out;
      content: '↓';
      width: 24px;
      text-align: center;
      font-size: medium;
      display: inline-block;
    }

    &:hover {
      box-shadow: inset 0.5px -0.5px 0.5px 0px ${(props) => props.$color};
      translate: 1px 1px;
    }
  }

  > ul {
    z-index: 2;
    position: absolute;
    top: calc(100% + ${Spacers['1']});
    left: ${borderWidth};
    min-width: calc(100% + ${Spacers['3']});
    border: ${borderWidth} solid ${(props) => props.$color};
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
    div.toggle {
      box-shadow: none;
      translate: 2px 2px;
    }
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
