
import './App.css'
import Phrase from './components/Phrase'
import phrasesj from "./data/phrases.json"


function App() {
 

  return (

    <div className="App">
      
      <Phrase
      phraseData= {phrasesj[0]}
      />
         
      


   </div>
    
  )
}

export default App
