import { act, useState } from 'react'

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

type Props = {
  activePlayer: string
  changePlayer: () => void
}

export default function GameBoard({ activePlayer, changePlayer }: Props) {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  function handleCellClick(
    rowIndex: number,
    colIndex: number,
    cellValue: string | null
  ) {
    if (cellValue === null) {
      setGameBoard((prevGameBoard) => {
        //deep copy
        const updatedBoard = [
          ...prevGameBoard.map((innerArray) => [...innerArray]),
        ]
        updatedBoard[rowIndex][colIndex] = activePlayer
        return updatedBoard
      })
      changePlayer()
    }
  }

  return (
    <ol className="grid gap-10 content-center justify-center">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="grid grid-cols-3 gap-10">
            {row.map((symbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  onClick={() => handleCellClick(rowIndex, cellIndex, symbol)}
                  className="w-24 h-24 text-6xl bg-gray-500 hover:bg-gray-600 duration-100"
                >
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  )
}
