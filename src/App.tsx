import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'
import { useState } from 'react'
import Log from './components/Log'
import { GameTurn } from './types/types'
import { WINNING_COMBINATIONS } from './data'
import GameOver from './components/GameOver'

const initialGameBoard: Array<Array<'x' | 'o' | null>> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns: GameTurn[]) {
  let currentPlayer = 'x'
  if (gameTurns.length && gameTurns[0].player === 'x') currentPlayer = 'o'

  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([] as GameTurn[])

  function handleRematch() {
    setGameTurns([])
  }

  // computed active player
  const activePlayer = deriveActivePlayer(gameTurns)
  //clone a deep copy
  const gameBoard = [...initialGameBoard.map((innerArray) => [...innerArray])]
  //filling into the gameBoard
  for (const turn of gameTurns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  //check if we have winners
  let winner
  for (const combination of WINNING_COMBINATIONS) {
    const square1Symbol = gameBoard[combination[0].col][combination[0].row]
    const square2Symbol = gameBoard[combination[1].col][combination[1].row]
    const square3Symbol = gameBoard[combination[2].col][combination[2].row]

    if (
      square1Symbol &&
      square1Symbol === square2Symbol &&
      square1Symbol === square3Symbol
    )
      winner = square1Symbol
  }

  const hasDraw = !winner && gameTurns.length === 9

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
      <div className="rounded-lg bg-black p-5 mb-10 relative">
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
          board={gameBoard}
        />
        {/* game over */}
        {(winner || hasDraw) && (
          <GameOver winner={winner} onRematch={handleRematch} />
        )}
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
