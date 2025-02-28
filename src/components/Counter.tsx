import { useDispatch, useSelector } from "react-redux";
import { increment , decrement , reset, incrementByValue } from "../redux/slices/counterSlice";
// import { RootState } from "@reduxjs/toolkit/query";
import { RootState } from '../redux/store'; // Проверь импорт
import { useState } from "react";
const Counter = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<number>(0);
    const counterValue = useSelector((state: RootState) => state.counter.value)
    const handleIncrement = () => {
        dispatch(increment());
    };
    const handleDecrement = () => {
        dispatch(decrement());
    };
    const handleReset = () => {
        dispatch(reset());
    };
    const handleIncrementByValue = () => {
        dispatch(incrementByValue(value));
    };
    return (
        <div>
            <h1>Counter : {counterValue}</h1>
            <input type="number" value={value} onChange={(e) => setValue(Number(e.target.value))}/>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementByValue}>Increment by value: {value}</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
};

export default Counter;