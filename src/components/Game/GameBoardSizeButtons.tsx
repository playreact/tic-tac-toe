import React from 'react'
import SoundButton from '../SoundButton'

interface BoardSizeButtonsProps {
  onBoardSizeChange: (size: number) => void
}

const BoardSizeButtons: React.FC<BoardSizeButtonsProps> = ({ onBoardSizeChange }) => {
  return (
    <div className="btn-group grid grid-cols-3">
      <SoundButton className='btn btn-outline text-lg' onClick={() => onBoardSizeChange(3)}>3</SoundButton>
      <SoundButton className='btn btn-outline text-lg' onClick={() => onBoardSizeChange(4)}>4</SoundButton>
      <SoundButton className='btn btn-outline text-lg' onClick={() => onBoardSizeChange(5)}>5</SoundButton>
    </div>
  )
}

export default BoardSizeButtons
