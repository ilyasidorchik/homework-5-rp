import React, { Component } from 'react';

/*
  Render-props можно использовать для вынесения стейтфул логики

  Напишите компонент, который будет добавлять тултип к кнопке.
  Пусть тултип будет обычным `div`

  Пусть на тултипе будет написано "Hello, i'm Tooltip"

  Укажите у тултипа аттрибут `data-testid="tooltip"`

  Кнопка должна получать onClick коллбек из компонента-обёртки
*/

export class WithTooltip extends Component {
  state = {
    isOpen: false
  };

  onClick = () => {
    const { isOpen } = this.state;
    this.setState({ isOpen: !isOpen });
  }

  render() {
    const { render } = this.props;
    const { isOpen } = this.state;
    return <div>{render(isOpen, this.onClick)}</div>;
  }
}

/* eslint-disable react/jsx-no-bind */
export const AppComponent = () => (
  <WithTooltip
    render={(isOpen, onClick) => (
      <div>
        <button onClick={onClick}>I must have tooltip</button>
        {isOpen && <div data-testid="tooltip">Hello, i'm Tooltip</div>}
      </div>
    )}
  />
);