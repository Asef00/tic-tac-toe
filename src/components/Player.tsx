import { useState } from 'react'

type Props = {
  initialName: string
  symbol: 'x' | 'o'
  isActive: boolean
  onNameChange: (name: string) => void
}

export default function Player({
  initialName,
  symbol,
  isActive,
  onNameChange,
}: Props) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(initialName)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPlayerName(event.target.value)
    onNameChange(event.target.value)
  }

  let playerNameMarkup = (
    <span className="w-24 leading-10 text-center">{playerName}</span>
  )
  if (isEditing) {
    playerNameMarkup = (
      <input
        onChange={handleNameChange}
        className="w-24 leading-10 text-center bg-slate-800"
        type="text"
        value={playerName}
      />
    )
  }

  return (
    <li
      className={`flex items-center gap-10 rounded-sm duration-100 ${
        isActive ? 'outline outline-orange-400' : ''
      }`}
    >
      {playerNameMarkup}

      {symbol}
      <button
        className="hover:text-orange-500 duration-100 px-4"
        onClick={handleEditClick}
      >
        {isEditing ? 'Save' : 'Edit'}
      </button>
    </li>
  )
}
