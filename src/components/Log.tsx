import { GameTurn } from '../types/types'

type Props = {
  turns: GameTurn[]
}

export default function Log({ turns }: Props) {
  return (
    <ol>
      {turns.map((turn) => {
        return (
          <li>
            {turn.player} moved on col {turn.square.col} | row {turn.square.row}
          </li>
        )
      })}
    </ol>
  )
}
