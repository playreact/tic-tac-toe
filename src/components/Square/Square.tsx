import SoundButton from '../SoundButton'

interface SquareProps {
  value: string
  onSquareClick: () => void
  isWinningSquare: boolean | null
}

export default function Square({ value, onSquareClick, isWinningSquare = false }: SquareProps) {
  return (
    <SoundButton className={`btn btn-square text-lg ${isWinningSquare && 'btn-success'}`} onClick={onSquareClick}>
      {value}
    </SoundButton>
  )
}
