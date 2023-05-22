import React from 'react'
import SoundButton from '../SoundButton'

interface MoveListToggleProps {
  isAscending: boolean
  onToggle: () => void
}

const MoveListToggle: React.FC<MoveListToggleProps> = ({ isAscending, onToggle }) => {
  return (
    <SoundButton className="btn-accent btn text-lg" onClick={onToggle}>
      {isAscending ? 'descending' : 'ascending'}
    </SoundButton>
  )
}

export default MoveListToggle
