const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

export default function GameBoard() {
  return (
    <ol className="grid gap-10 content-center justify-center">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol className="grid grid-cols-3 gap-10">
            {row.map((symbol, cellIndex) => (
              <li key={cellIndex}>
                <button className="w-24 h-24 bg-gray-500 hover:bg-gray-600 duration-100">
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
