import ButtonWithSound from '../ButtonWithSound'

interface SquareProps {
  value: string
  onSquareClick: () => void
  isWinningSquare: boolean | null
}

export default function Square({ value, onSquareClick, isWinningSquare = false }: SquareProps) {
  return (
    <ButtonWithSound className={`btn btn-square text-lg ${isWinningSquare && 'btn-success'}`} onClick={onSquareClick}>
      {value}
    </ButtonWithSound>
  )
}
