import { useState } from 'react'
import SoundButton from '../SoundButton'
import type { HistoryItem } from '../Game'
import MoveListToggle from './MoveListToggle'

interface MoveListProps {
  history: Array<HistoryItem>
  boardSize: number
  currentMove: number
  onMoveClick: (move: number) => void
}

export default function MoveList({ history, boardSize, currentMove, onMoveClick }: MoveListProps) {
  const [isAscending, setIsAscending] = useState<boolean>(true)

  const moves: Array<JSX.Element> = history
    .map(({ location }, move) => {
      const description = move > 0
        ? `Go to move #${move} (${Math.floor(location! / boardSize) + 1}, ${(location! % boardSize) + 1})`
        : 'Go to game start'
      const isActive = move === currentMove

      return (
      <SoundButton key={location} className={`btn normal-case ${isActive && 'text-accent'}`} onClick={() => onMoveClick(move)}>
        {description}
      </SoundButton>
      )
    })
    .filter((_, index) => index === 0 || (index >= history.length - 10 && index <= history.length - 1))

  if (!isAscending)
    moves.reverse()

  return (
    <div className='btn-group btn-group-vertical'>
      <div className='btn no-animation normal-case'>
        {`You are at move #${currentMove}`}
      </div>
      {moves}
      <MoveListToggle isAscending={isAscending} onToggle={() => setIsAscending(!isAscending)} />
    </div>
  )
}
