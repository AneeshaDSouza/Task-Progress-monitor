// to render list of counters
import React from "react";
import Counter from "./counter";

const counters = ({
  onDelete,
  onIncrement,
  onDecrement,
  onReset,
  counters,
}) => {
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        ></Counter>
      ))}
    </div>
  );
};

export default counters;

/*

<Counter key = {counter.id}
                           value = {counter.value} selected = {true}>
                               <h1>Counter #{counter.id}</h1>
                   
                           </Counter>   
    */
//usually id we can pass this.props.id but if we have to pass complex elements like
//dilaog box etc we can use children to pass to counter
