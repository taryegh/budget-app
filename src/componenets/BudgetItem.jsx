import React from "react";

class BudgetItem extends React.Component {
  render() {
    if (this.props.name) {
      return (
        <li className="budg-item">
          <h4 className="budg-inner">
            <span className="item-name">{this.props.name}</span>
            <span
              className="item-price"
              style={
                this.props.price >= 0
                  ? { color: "#38ada9" }
                  : { color: "#FD7272" }
              }
            >
              {this.props.price}
              {this.props.price < 0 ? (
                <span className="percent">
                  {((this.props.price / this.props.count) * 100).toFixed(1)}%
                </span>
              ) : (
                ""
              )}
            </span>

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
