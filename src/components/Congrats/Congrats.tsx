import Confetti from 'react-confetti'
import { useSize } from 'ahooks'

export default function Congrats() {
  const size = useSize(document.querySelector('body'))
  return (
    <Confetti width={size?.width} height={size?.height} numberOfPieces={500} recycle={false} />
  )
}
