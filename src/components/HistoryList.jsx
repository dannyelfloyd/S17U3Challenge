import React from "react"
export default function HistoryList({history}){
    const reversedHistory = history.reverse()
    return(
        <>
            {reversedHistory.map(entry => {
                return <li key={entry.id}>{entry.date+' -> '+entry.temp+' ºC'}</li>
            })}
        </>
    )
}