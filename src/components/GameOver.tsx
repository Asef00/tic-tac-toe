type Props = {
  winner?: string
}

export default function GameOver({ winner }: Props) {
  return (
    <div className="top-0 left-0 right-0 rounded-lg absolute w-full h-full bg-orange-900/95 flex items-center justify-center flex-col gap-4">
      <h2 className="text-5xl">Game Over!</h2>
      {winner ? <p>{winner} won!</p> : <p>It's a draw!</p>}
      <button className="bg-white text-black rounded px-5 py-1 hover:bg-orange-400 duration-100">
        Rematch
      </button>
    </div>
  )
}
