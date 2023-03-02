
import './App.css'
import Phrase from './components/Phrase'
import phrasesj from "./data/phrases.json"
import { useState } from 'react'







function App() {
  const images =[
    "url(/backgrounds/image1.png)",
    "url(/backgrounds/image2.png)",
    "url(/backgrounds/image3.png)",
    "url(/backgrounds/image4.png)",
  ]
  const [cookie, setCookie]= useState(0)
  const [image, setImage] = useState(0)
  const changePhrase =()=>{
    if(cookie== (phrasesj.length-1)){
    setCookie(0)
  }else{
    setCookie(cookie + 1)
  }
}
const changeImage =()=>{
  if(image== (images.length-1)){
  setImage(0)
}else{
  setImage(image + 1)
}
}
const changes=()=>{
  changeImage();
  changePhrase();
}
  return (

    <div className="App" style={{backgroundImage: images[image]}}>
      <div className='cont'>
      <Phrase
      phraseData= {phrasesj[cookie]}
      />
      <button onClick={changes}><i className='bx bx-shuffle bx-tada' ></i></button>
      </div> 
      


   </div>
  )
}

export default App
