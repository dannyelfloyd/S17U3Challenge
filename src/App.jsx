import React, { useState } from "react"
import TemperatureDisplay from './components/TemperatureDisplay'
import TemperatureControls from './components/TemperatureControls'
import HistoryList from './components/HistoryList'

export default function App() {
  if(localStorage.getItem('history') === null){
    localStorage.setItem('history', '[]')
  }

  const [temp, setTemp] = useState(20)
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem('history')))

  const increaseTemp = () => {
    setTemp(temp+1)
    addEntry(temp+1)
  }
  const decreaseTemp = () => {
    setTemp(temp-1)
    addEntry(temp-1)
  }
  const addEntry = (temp) => {
    setTimeout(() => {
      const time = new Date()
      const newEntry = {
        id: history.length !== 0 ? history[history.length-1].id+1 : 1,
        date:`[${time.toLocaleTimeString('es-ES')}]`,
        temp
      }
      setHistory([...history, newEntry])
      localStorage.setItem('history', JSON.stringify([...history, newEntry]))
    }, 500);
  }
  const reset = () => {
    setTemp(20)
    setHistory([])
    localStorage.setItem('history', '[]')
  }

  return (
    <>
      <div className="app">
        <h1>Controlador de Temperatura con Historial</h1>
        <TemperatureDisplay temp={ temp }/>
        <div>
          <TemperatureControls 
            increaseTemp={ increaseTemp } 
            decreaseTemp={decreaseTemp} 
            reset={reset}
          />
        </div>
        <h3>Historial </h3>
        <ul>
          <HistoryList history={ history }/>
        </ul>
      </div>
    </>
  )
}
