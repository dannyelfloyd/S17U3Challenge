import React from "react"
export default function TemperatureControls({increaseTemp, decreaseTemp, reset}){
    return(
        <>
            <button onClick={increaseTemp}>+</button>
            <button onClick={decreaseTemp}>-</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}