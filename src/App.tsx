import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Log from './components/Log'
import { GameTurn } from './types/types'

function App() {
  const [activePlayer, setActivePlayer] = useState('x')
  const [gameTurns, setGameTurns] = useState([] as GameTurn[])

  function handlePlayerMove(colIndex: number, rowIndex: number) {
    //change active player
    setActivePlayer((prevPlayer) => {
      if (prevPlayer === 'x') return 'o'
      else return 'x'
    })

    //log the activity
    setGameTurns((prevGameTurns) => {
      //compute current player to not mixing different states
      let currentPlayer = 'x'
      if (prevGameTurns.length && prevGameTurns[0].player) currentPlayer = 'o'

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
          onChangePlayer={(c: number, r: number) => handlePlayerMove(c, r)}
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
