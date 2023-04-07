import ButtonWithSound from './ButtonWithSound'

interface MoveOrderToggleProps {
  isAscending: boolean
  onToggle: () => void
}

export default function MoveOrderToggle({ isAscending, onToggle }: MoveOrderToggleProps) {
  return (
    <ButtonWithSound className="btn btn-accent" onClick={onToggle}>
      {isAscending ? 'descending' : 'ascending'}
    </ButtonWithSound>
  )
}
