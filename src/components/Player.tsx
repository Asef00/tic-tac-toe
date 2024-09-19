import { useState } from 'react'

type Props = {
  name: string
  symbol: string
}

export default function Player({ name, symbol }: Props) {
  const [isEditing, setIsEditing] = useState(false)

  function handleEditClick() {
    setIsEditing((editing) => !editing)
  }

  let playerName = <span className="w-24 leading-10 text-center">{name}</span>
  if (isEditing) {
    playerName = (
      <input
        className="w-24 leading-10 text-center bg-slate-800"
        type="text"
        value={name}
      />
    )
  }

  return (
    <li className="flex items-center gap-10">
      {playerName}

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
