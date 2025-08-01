import React from "react"
export default function TemperatureDisplay({temp}){
    return(
        <>
            <h2>{temp}</h2>
            <p>{temp < 15 ?
            '¡Hace frío!' : temp < 25 ?
            'Temperatura agradable' : '¡Hace calor!'}</p>
        </>
    )
}