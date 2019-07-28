import React from "react";
import BudgetItem from "./BudgetItem";

class BudgetList extends React.Component {
  render() {
    return (
      <ul className="budg-list">
        <h3 className='list-head'>
          <span className='list-name'>Name</span>
          <span className='list-price'>Price</span>
        </h3>
        
        {this.props.items.map(el=> {
          return(
            <BudgetItem
              key={el.id}
              name={el.itemName}
              price={el.itemPrice}
            />
          )
        })}
        
        <BudgetItem />
      </ul>
    );
  }
}

export default BudgetList;
