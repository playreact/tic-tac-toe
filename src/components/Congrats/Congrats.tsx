import Confetti from 'react-confetti'
import { useScreen } from 'usehooks-ts'

const Congrats: React.FC = () => {
  const screen = useScreen()
  return (
    <Confetti width={screen?.width} height={screen?.height} numberOfPieces={500} recycle={false} />
  )
}

export default Congrats
