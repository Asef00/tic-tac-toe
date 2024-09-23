import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Log from './components/Log'
import { GameTurn } from './types/types'

function deriveActivePlayer(gameTurns: GameTurn[]) {
  let currentPlayer = 'x'
  if (gameTurns.length && gameTurns[0].player) currentPlayer = 'o'

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([] as GameTurn[])

  const activePlayer = deriveActivePlayer(gameTurns)

  function handlePlayerMove(colIndex: number, rowIndex: number) {
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns)

      return [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ]
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
            symbol="x"
          />
          <Player
            isActive={activePlayer === 'o'}
            initialName="Player 2"
            symbol="o"
          />
        </ol>
        {/* game board */}
        <GameBoard
          onChangePlayer={(c: number, r: number) => handlePlayerMove(c, r)}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
