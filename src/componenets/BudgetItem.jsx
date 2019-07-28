import React from "react";

class BudgetItem extends React.Component {
  render() {
    if (this.props.name) {
      return (
        <li className="budg-item">
          <h4 className="budg-inner">
            <span className="item-name">{this.props.name}</span>
            <span className="item-price">{this.props.price}</span>
            <button className="btn btn-del" onClick={this.props.handleDelete}>
              X
            </button>
          </h4>
        </li>
      );
    } else {
      return <div />;
    }
  }
}

export default BudgetItem;
