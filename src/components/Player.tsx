import { useState } from 'react'

type Props = {
  initialName: string
  symbol: string
}

export default function Player({ initialName, symbol }: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handleNameEdit(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value)
  }

  let playerNameMarkup = (
    <span className="w-24 leading-10 text-center">{playerName}</span>
  )
  if (isEditing) {
    playerNameMarkup = (
      <input
        onChange={handleNameEdit}
        className="w-24 leading-10 text-center bg-slate-800"
        type="text"
        value={playerName}
      />
    )
  }

  return (
    <li className="flex items-center gap-10">
      {playerNameMarkup}

      {symbol}
      <button
        className="hover:text-orange-500 duration-100"
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}
