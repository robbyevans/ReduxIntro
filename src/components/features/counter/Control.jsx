import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, toggleRunning } from "./CounterSlice";

function Controls() {
  const dispatch = useDispatch();

  function handleMinusClick() {
    dispatch(decrement());
  }
  function handleAddClick() {
    dispatch(increment());
  }
  function handlePlayClick() {
    dispatch(toggleRunning());
  }
  const running=useSelector((state)=>state.running)
  return (
    <div>
      <button id="minus" onClick={handleMinusClick}>
        -
      </button>
      <button id="plus" onClick={handleAddClick}>
        +
      </button>
      <button id="play" onClick={handlePlayClick}>
        {running?"▶️":"⏸"}
      </button>
    </div>
  );
}

export default Controls;
