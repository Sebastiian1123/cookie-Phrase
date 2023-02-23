import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import CardSong from './components/CardSong'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App">
    <Button
     texto="CANCELAR" />
    </div>
    <button
     texto="CANCELAR" />
   <div className='CardSong'>
    <CardSong
      title="All The Pain"
      genero="Rock Alternativo"
      album= "I The Mask"
      banda="In Flames"/>
      <CardSong
      title="Sharp Edges"
      genero="Rock Melodico"
      album= "In The End"
      banda="Linkin Park"/>
   </div>
   <div>

   </div>
    </>
  )
}

export default App
