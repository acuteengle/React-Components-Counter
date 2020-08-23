import React, { Component } from "react";

class Counter extends Component {
  formatCount() {
    const { counter } = this.props;
    return counter.value === 0 ? "Zero" : counter.value;
  }

  getBadgeClasses() {
    const { counter } = this.props;
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  render() {
    const { onIncrement, onDecrement, onDelete, counter } = this.props;

    const styles = {
      amount: {
        width: 50,
        margin: 20,
      },
    };

    return (
      <div>
        <span style={styles.amount} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-primary btn-sm m-2"
        >
          Increment
        </button>
        {counter.value > 0 && (
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            Decrement
          </button>
        )}
      </div>
    );
  }
}

export default Counter;
