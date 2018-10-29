import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0, // What I call "App State", data which actually runs our app.
      visible: true // What I call "View State", deals with how the component is rendered.
    };
  }

  render() {
    const { counter, visible } = this.state;
    const { title } = this.props;

    return (
      <div>
        {visible ? (
          <div>
            <h2>{title}</h2>
            <button onClick={this._decrement}>-</button>
            <span>{counter}</span>
            <button onClick={this._increment}>+</button>
          </div>
        ) : null}
        <button onClick={this._toggle}>Toggle Visibility</button>
      </div>
    );
  }

  _toggle = e => {
    this.setState({ visible: !this.state.visible });
  };

  // If you use plain Class Function you need to make sure you `.bind(this)` in the constructor
  // _increment(e) {
  //   this.setState({ counter: this.state.counter + 1 });
  // }
  // Arrow functions are automatically bound to the context in which they're defined.
  _increment = e => {
    this.setState({ counter: this.state.counter + this.props.step });
  };

  _decrement = e => {
    this.setState({ counter: this.state.counter - this.props.step });
  };
}
