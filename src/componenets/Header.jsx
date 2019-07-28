import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Budget Manager</h1>

        <h2>$ {this.props.count}</h2>
      </div>
    );
  }
}

export default Header;
