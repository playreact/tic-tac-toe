import ButtonWithSound from '../ButtonWithSound'

interface MoveListToggleProps {
  isAscending: boolean
  onToggle: () => void
}

export default function MoveListToggle({ isAscending, onToggle }: MoveListToggleProps) {
  return (
    <ButtonWithSound className="btn btn-accent" onClick={onToggle}>
      {isAscending ? 'descending' : 'ascending'}
    </ButtonWithSound>
  )
}
