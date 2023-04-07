import ButtonWithSound from './ButtonWithSound'

export function BoardSizeButtons({ onBoardSizeChange }: { onBoardSizeChange: (size: number) => void }) {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      <ButtonWithSound className='btn btn-outline btn-sm' onClick={() => onBoardSizeChange(3)}>3</ButtonWithSound>
      <ButtonWithSound className='btn btn-outline btn-sm' onClick={() => onBoardSizeChange(4)}>4</ButtonWithSound>
      <ButtonWithSound className='btn btn-outline btn-sm' onClick={() => onBoardSizeChange(5)}>5</ButtonWithSound>
    </div>
  )
}
