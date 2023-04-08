import SoundButton from '../SoundButton'

export default function BoardSizeButtonGroup({ onBoardSizeChange }: { onBoardSizeChange: (size: number) => void }) {
  return (
    <div className="btn-group grid grid-cols-3">
      <SoundButton className='btn btn-outline btn-sm' onClick={() => onBoardSizeChange(3)}>3</SoundButton>
      <SoundButton className='btn btn-outline btn-sm' onClick={() => onBoardSizeChange(4)}>4</SoundButton>
      <SoundButton className='btn btn-outline btn-sm' onClick={() => onBoardSizeChange(5)}>5</SoundButton>
    </div>
  )
}
