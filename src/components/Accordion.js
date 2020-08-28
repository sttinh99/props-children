import React, { Component } from "react";

class Accordion extends Component {
  constructor(props) {
    super();
    this.state = { isFlus: false };
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.setState({ isFlus: !this.state.isFlus });
  }
  render() {
    const { heading, children } = this.props;
    const { isFlus } = this.state;
    return (
      <div className="header">
        <div className={heading} onClick={this.onClick}>
          <h2>{heading}</h2>
        </div>
        {isFlus && <div className="text">{children}</div>}
      </div>
    );
  }
}
export default Accordion;
