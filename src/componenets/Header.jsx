import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Budget Manager</h1>

        <h2
          style={
            this.props.count >= 0 ? { color: " #93b5b3" } : { color: "#ea8685" }
          }
        >
          $ {this.props.count}
        </h2>
      </div>
    );
  }
}

export default Header;
