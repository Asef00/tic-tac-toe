import './App.css'
import Player from './components/Player'
import GameBoard from './components/GameBoard'

function App() {
  return (
    <main>
      <div className="rounded-lg bg-black p-5 mb-10">
        {/* players */}
        <ol className="flex gap-10 justify-center mb-10">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        {/* game board */}
        <GameBoard />
      </div>
      log
    </main>
  )
}

export default App
