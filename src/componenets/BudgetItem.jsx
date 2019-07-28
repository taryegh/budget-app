import React from "react";

class BudgetItem extends React.Component {
  render() {
    return (
      <li className="budg-item">
        <h4 className="budg-inner">
          <span className="item-name">{this.props.name}</span>
          <span className="item-price">{this.props.price}</span>
        </h4>
      </li>
    );
  }
}

export default BudgetItem;
