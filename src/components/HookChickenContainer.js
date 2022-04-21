import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyChicken } from '../redux/chicken/chickenActions';

const HookChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Num of Hook Chicken - {numOfChickens}</h1>
            <button onClick={() => dispatch(buyChicken())}>Buy Hook Chicken</button>
        </>
    )
}

export default HookChickenContainer