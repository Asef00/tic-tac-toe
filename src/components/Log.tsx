import { GameTurn } from '../types/types'

type Props = {
  turns: GameTurn[]
}

export default function Log({ turns }: Props) {
  return (
    <ol>
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.col}, {turn.square.row}
          </li>
        )
      })}
    </ol>
  )
}
