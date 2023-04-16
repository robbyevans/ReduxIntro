import React, { useEffect } from "react";
import { increment } from "./CounterSlice";
import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const running = useSelector((state) => state.running);
  useEffect(() => {
    const id = setInterval(() => {
      if (running) {
        dispatch(increment());
      }
    }, 1000);
    return function cleanup() {
      clearInterval(id);
    };
  }, [running]);

  return <h1 id="count">Count: {count}</h1>;
}

export default Counter;
