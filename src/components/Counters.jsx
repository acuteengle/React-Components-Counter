import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
    renderCounters = () => {
        const { counters, onIncrement, onDelete } = this.props;

        if (counters.length == 0) {
            return (
                <div>
                    <p>There are no counters!</p>
                </div>
            );
        } else {
            return (
                <div>
                    {counters.map((c) => {
                        return (
                            <Counter
                                key={c.id}
                                counter={c}
                                onIncrement={onIncrement}
                                onDelete={onDelete}
                            />
                        );
                    })}
                </div>
            );
        }
    };

    render() {
        const { onReset } = this.props;
        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                {this.renderCounters()};
            </div>
        );
    }
}

export default Counters;
