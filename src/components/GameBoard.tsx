type Props = {
  board: Array<Array<'x' | 'o' | null>>
  onChangePlayer: (c: number, r: number) => void
}

export default function GameBoard({ board, onChangePlayer }: Props) {
  function handleCellClick(rowIndex: number, colIndex: number) {
    onChangePlayer(colIndex, rowIndex)
  }

  return (
    <ol className="grid gap-10 content-center justify-center">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="grid grid-cols-3 gap-10">
            {row.map((symbol, cellIndex) => (
              <li key={cellIndex}>
                <button
                  disabled={symbol !== null}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
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
