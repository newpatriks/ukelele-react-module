import React, { useState } from 'react'
import CHORDS from '../src/ukelele-chords.js'
import Ukelele from '../src/ukelele.jsx'

function App() {
  const [currentChord, setCurrentChord] = useState('A')

  return (
    <div>
      <select onChange={(e) => setCurrentChord(e.target.value)} value={currentChord}>
        {Object.keys(CHORDS).map(key => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>
      <Ukelele chord={currentChord} width={400} height={200} />
    </div>
  )
}

export default App
