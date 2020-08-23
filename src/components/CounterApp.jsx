import React, { Component } from "react";
import Counters from "./Counters";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  totalCounters = () => {
    return this.state.counters.filter((c) => c.value > 0).length;
  };

  totalItems = () => {
    let total = 0;
    this.state.counters.forEach((c) => {
      total += c.value;
    });
    return total;
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = this.state.counters[index];
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = this.state.counters[index];
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          totalCounters={this.totalCounters()}
          totalItems={this.totalItems()}
        />
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
