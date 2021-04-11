const counter = ({ onIncrement, onDecrement, counter, onDelete }) => {
  /* componentDidUpdate = (prevProps, prevState) => {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    if (prevProps.counter.value !== this.props.counter.value) {
      //Ajax call to get new data from swrver
    }
  };

  componentWillUnmount = () => {
    console.log("counter - unmount");
  };*/

  const getBadgeClasses = (counter) => {
    let classes = "badge task m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  const formatCount = (counter) => {
    return counter.value === 0 ? <h1>Zero</h1> : <h1>{counter.value}</h1>;
  };

  return (
    <div>
      <span className={getBadgeClasses(counter)}>
        {formatCount(counter)}
        <button
          onClick={() => onIncrement(counter)}
          className="btn  btn-secondary btn-sm"
        >
          Increment
        </button>

        <button
          onClick={() => onDecrement(counter)}
          className="btn  btn-secondary btn-sm"
        >
          Decrement
        </button>
        <button
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <h2>{counter.text}</h2>
      </span>
    </div>
  );
};

export default counter;
