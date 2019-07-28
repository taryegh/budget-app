import React from "react";
import "./App.css";
import Header from "./componenets/Header";
import BudgetInput from "./componenets/BudgetInput";
import BudgetList from "./componenets/BudgetList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      id: 1 + Math.random(),
      itemName: "",
      itemPrice: "",
      count: 0
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmitAndCalc = this.handleSubmitAndCalc.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      itemName: e.target.value
    });
  }

  handleChangePrice(e) {
    this.setState({
      itemPrice: e.target.value
    });
  }

  handleDelete(id) {
    const filteredItems = this.state.items.filter(el => el.id !== id);

    this.setState({
      items: filteredItems
    });
  }

  handleSubmit() {

    if (
      this.state.itemName &&
      this.state.itemPrice &&
      !isNaN(this.state.itemPrice)
    ) {
      const newItem = {
        id: this.state.id,
        itemName: this.state.itemName,
        itemPrice: this.state.itemPrice
      };

      const updatesItems = [...this.state.items, newItem];

      this.setState({
        items: updatesItems,
        id: 1 + Math.random(),
        itemName: "",
        itemPrice: ""
      });
    }
  }

  calcBudget() {
    const num = this.state.items.map(el => {
      return +el.itemPrice;
    });

    let sum = 0;
    for (let i = 0; i < num.length; i++) {
      sum += num[i];
    }

    this.setState({
      count: sum
    });
  }

  handleSubmitAndCalc(e) {
    e.preventDefault();
    
    this.handleSubmit();
    this.calcBudget();
  }

  render() {
    return (
      <div className="container">
        <Header count={this.state.count} />
        <BudgetInput
          itemName={this.state.itemName}
          itemPrice={this.state.itemPrice}
          handleChangeName={this.handleChangeName}
          handleChangePrice={this.handleChangePrice}
          handleSubmitAndCalc={this.handleSubmitAndCalc}
        />
        <BudgetList
          items={this.state.items}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
