import './App.css'
import CharacterCounter from './components/CharacterCounter/CharacterCounter';

function App() {

  return (
    <div>

      <CharacterCounter 
      minWords={0} 
      maxWords={1000} 
      targetReadingTime={5} 
      />

    </div>
  )
}

export default App
