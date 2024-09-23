import { GameTurn } from '../types/types'

const initialGameBoard: Array<Array<'x' | 'o' | null>> = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

type Props = {
  turns: GameTurn[]
  onChangePlayer: (c: number, r: number) => void
}

export default function GameBoard({ turns, onChangePlayer }: Props) {
  const gameBoard = initialGameBoard

  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square

    gameBoard[row][col] = player
  }

  function handleCellClick(
    rowIndex: number,
    colIndex: number,
    cellValue: 'x' | 'o' | null
  ) {
    if (cellValue === null) {
      onChangePlayer(colIndex, rowIndex)
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
                  className="w-24 h-24 uppercase text-6xl font-bold bg-gray-500 hover:bg-gray-600 duration-100"
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
