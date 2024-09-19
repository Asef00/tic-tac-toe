import { useState } from 'react'
import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {
  const [player1, setPlayer1] = useState('Player 1')
  const [player2, setPlayer2] = useState('Player 2')

  return (
    <main>
      <div className="rounded-lg bg-black p-5 mb-10">
        {/* players */}
        <ol className="flex gap-10 justify-center mb-10">
          <Player initialName={player1} symbol="X" />
          <Player initialName={player2} symbol="O" />
        </ol>
        {/* game board */}
        <GameBoard />
      </div>
      log
    </main>
  )
}

export default App
