import type { IProps } from "./Counter2.types";

const Counter2 = (props: IProps) => {
  return (
    <div>
      <h1>Counter2</h1>
      <p>{props.count}</p>
      <button onClick={props.incrementCount}>Increment</button>
      <button onClick={props.decrementCount}>Decrement</button>
    </div>
  );
};

export default Counter2;
