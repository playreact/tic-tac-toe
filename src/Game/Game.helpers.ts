export interface WinnerInfo {
  winner: string
  winningSquares: Array<number>
}

function calculateLines(size: number) {
  const lines = []

  for (let i = 0; i < size; i++) {
    const row = []
    const column = []
    for (let j = 0; j < size; j++) {
      row.push(i * size + j)
      column.push(j * size + i)
    }
    lines.push(row)
    lines.push(column)
  }

  const diagonal1 = []
  const diagonal2 = []
  for (let i = 0; i < size; i++) {
    diagonal1.push(i * size + i)
    diagonal2.push((i + 1) * size - i - 1)
  }
  lines.push(diagonal1)
  lines.push(diagonal2)

  return lines
}

export function calculateWinner(squares: Array<string>, size: number): WinnerInfo | null {
  const lines = calculateLines(size)

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (squares[line[0]] && line.every(index => squares[index] === squares[line[0]])) {
      return {
        winner: squares[line[0]],
        winningSquares: line,
      }
    }
  }
  return null
}
