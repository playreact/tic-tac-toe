import React from 'react'
import SoundButton from '../SoundButton'

interface BoardSizeButtonsProps {
  onBoardSizeChange: (size: number) => void
}

const BoardSizeButtons: React.FC<BoardSizeButtonsProps> = ({ onBoardSizeChange }) => {
  return (
    <div className="join grid grid-cols-3">
      <SoundButton className='btn-outline join-item btn text-lg' onClick={() => onBoardSizeChange(3)}>3</SoundButton>
      <SoundButton className='btn-outline join-item btn text-lg' onClick={() => onBoardSizeChange(4)}>4</SoundButton>
      <SoundButton className='btn-outline join-item btn text-lg' onClick={() => onBoardSizeChange(5)}>5</SoundButton>
    </div>
  )
}

export default BoardSizeButtons
