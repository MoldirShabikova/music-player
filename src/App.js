import Player from "./components/Player";
import {useEffect, useState} from 'react'
function App() {

const [songs] =  useState([
  {
    title: 'Single Lady',
    artist: 'Mikana',
    image: "./images/shakira.jpeg",
    src: "./songs/shakira.mp3"
  },
  {
    title: 'Titaliya',
    artist: 'Grary',
    image: "./images/beyonce.jpeg",
    src: "./songs/Beyonce.mp3"
  },
  {
    title: 'Harry',
    artist: 'AStana',
    image: "./images/harry.jpeg",
    src: "./songs/harry.mp3"
  } 
])

const [currentSongIndex, setCurrentSongIndex]  = useState(0)
const [nextSongIndex, setNextSongIndex]  = useState(0)


useEffect(()=>{
setNextSongIndex(()=>{
  if(currentSongIndex + 1 > songs.length - 1){
    return 0
  }else {
    return currentSongIndex + 1
  }
})
},[currentSongIndex, songs.length])

  return (
    <div className="App">
<Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex}  
nextSongIndex={nextSongIndex} songs={songs}/>
    </div>
  );
}

export default App;
