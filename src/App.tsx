import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Log from './components/Log'

function App() {
  const [activePlayer, setActivePlayer] = useState('x')
  const [gameTurns, setGameTurns] = useState([] as string[])

  function handlePlayerMove() {
    //change active player
    setActivePlayer((prevPlayer) => {
      if (prevPlayer === 'x') return 'o'
      else return 'x'
    })
    //log the activity
    setGameTurns((prevGameTurns) => {
      return ['new turn', ...prevGameTurns]
    })
  }

  return (
    <main>
      <div className="rounded-lg bg-black p-5 mb-10">
        {/* players */}
        <ol className="flex gap-10 justify-center mb-10">
          <Player
            isActive={activePlayer === 'x'}
            initialName="Player 1"
            symbol="X"
          />
          <Player
            isActive={activePlayer === 'o'}
            initialName="Player 2"
            symbol="O"
          />
        </ol>
        {/* game board */}
        <GameBoard
          changePlayer={handlePlayerMove}
          activePlayer={activePlayer}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
