import React from 'react'
import SoundButton from '../SoundButton'

interface SquareProps {
  value: string
  onSquareClick: () => void
  isWinningSquare: boolean | null
}

const Square: React.FC<SquareProps> = ({ value, onSquareClick, isWinningSquare = false }) => {
  return (
    <SoundButton className={`btn-square btn-lg btn text-lg ${isWinningSquare && 'btn-success'}`} onClick={onSquareClick}>
      {value}
    </SoundButton>
  )
}

export default Square
