import React, { useState } from 'react'
import { Ukelele, CHORDS } from '../src/index'

type View = 'selector' | 'all'

function App() {
  const [currentChord, setCurrentChord] = useState('A')
  const [view, setView] = useState<View>('selector')

  return (
    <div>
      <div style={{ textAlign: 'center', paddingTop: '40px' }}>
        <button onClick={() => setView('selector')} disabled={view === 'selector'}>
          Chord Selector
        </button>
        <button onClick={() => setView('all')} disabled={view === 'all'} style={{ marginLeft: '8px' }}>
          All Chords
        </button>
      </div>

      {view === 'selector' ? (
        <>
          <select
            onChange={(e) => setCurrentChord(e.target.value)}
            value={currentChord}
          >
            {Object.keys(CHORDS).map((key) => (
              <option key={key} value={key}>{key}</option>
            ))}
          </select>
          <Ukelele chord={currentChord} width={400} height={200} />
        </>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.keys(CHORDS).map((key) => (
            <div key={key} style={{ textAlign: 'center', margin: '10px' }}>
              <p style={{ marginBottom: 0 }}>{key}</p>
              <Ukelele chord={key} width={400} height={200} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default App
