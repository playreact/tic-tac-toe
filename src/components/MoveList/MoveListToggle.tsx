import SoundButton from '../SoundButton'

interface MoveListToggleProps {
  isAscending: boolean
  onToggle: () => void
}

export default function MoveListToggle({ isAscending, onToggle }: MoveListToggleProps) {
  return (
    <SoundButton className="btn btn-accent" onClick={onToggle}>
      {isAscending ? 'descending' : 'ascending'}
    </SoundButton>
  )
}
