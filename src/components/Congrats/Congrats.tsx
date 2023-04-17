import Confetti from 'react-confetti'
import { useSize } from 'ahooks'
import React from 'react'

const Congrats: React.FC = () => {
  const size = useSize(document.querySelector('body'))
  return (
    <Confetti width={size?.width} height={size?.height} numberOfPieces={500} recycle={false} />
  )
}

export default Congrats
