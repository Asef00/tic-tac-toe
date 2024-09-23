import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'

function App() {
  const [activePlayer, setActivePlayer] = useState('x')

  function handlePlayerChange() {
    setActivePlayer((prevPlayer) => {
      if (prevPlayer === 'x') return 'o'
      else return 'x'
    })
  }

  return (
    <main>
      <div className="rounded-lg bg-black p-5 mb-10">
        {/* players */}
        <ol className="flex gap-10 justify-center mb-10">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        {/* game board */}
        <GameBoard
          changePlayer={handlePlayerChange}
          activePlayer={activePlayer}
        />
      </div>
      log
    </main>
  )
}

export default App
