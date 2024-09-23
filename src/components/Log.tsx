type Props = {
  turns: string[]
}

export default function Log({ turns }: Props) {
  return (
    <ol>
      {turns.map((turn) => {
        return <li>{turn}</li>
      })}
    </ol>
  )
}
