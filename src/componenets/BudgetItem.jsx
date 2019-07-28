import React from "react";

class BudgetItem extends React.Component {
  render() {
    if (this.props.name) {
      return (
        <li className="budg-item">
          <h4>
            <span className="item-name">{this.props.name}</span>
            <span className="item-price">{this.props.price}</span>
          </h4>
          <hr />
        </li>
      );
    }
    return <div />;
  }
}

export default BudgetItem;
