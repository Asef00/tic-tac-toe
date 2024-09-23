export type Square = {
  row: number
  col: number
}

export type GameTurn = {
  square: Square
  player: 'x' | 'o'
}
