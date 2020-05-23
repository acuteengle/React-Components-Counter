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
        const { onIncrement, onDelete, counter } = this.props;

        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => onIncrement(counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    onClick={() => onDelete(counter.id)}
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        );
    }
}

export default Counter;
