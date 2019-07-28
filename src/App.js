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

  handleSubmit(e) {
    e.preventDefault();

    if ((this.state.itemName && this.state.itemPrice) && !isNaN(this.state.itemPrice)) {
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

      this.calcBudget();
    }
  }

  calcBudget() {
    this.setState(prevState => {
      return {
        count: prevState.count + +this.state.itemPrice
      };
    });
  }

  render() {
    return (
      <div className="container">
        <Header sum={this.state.count} />
        <BudgetInput
          itemName={this.state.itemName}
          itemPrice={this.state.itemPrice}
          handleChangeName={this.handleChangeName}
          handleChangePrice={this.handleChangePrice}
          handleSubmit={this.handleSubmit}
        />
        <BudgetList items={this.state.items} sum={this.state.sum} />
      </div>
    );
  }
}

export default App;
