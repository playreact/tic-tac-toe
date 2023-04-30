import React from 'react'
import Congrats from '../Congrats'
import Footer from '../Footer'
import Square from './GameSquare'
import BoardSizeButtons from './GameBoardSizeButtons'
import { calculateWinner } from '@/helpers'

interface BoardProps {
  squares: Array<string>
  boardSize: number
  isNextX: boolean
  onPlay: (nextSquares: Array<string>, location: number) => void
  onBoardSizeChange: (size: number) => void
}

const Board: React.FC<BoardProps> = ({ squares, boardSize, isNextX, onPlay, onBoardSizeChange }) => {
  const winnerInfo = calculateWinner(squares, boardSize)
  let status
  if (winnerInfo)
    status = `Winner - ${winnerInfo.winner}`
  else if (squares.every(square => square))
    status = 'Draw'
  else
    status = `Next Player - ${isNextX ? 'X' : 'O'}`

  function handleSquareClick(i: number) {
    if (calculateWinner(squares, boardSize) || squares[i])
      return

    const nextSquares = squares.slice()
    nextSquares[i] = isNextX ? 'X' : 'O'
    onPlay(nextSquares, i)
  }

  const rows = Array(boardSize).fill(null).map((_, i) => {
    const row = Array(boardSize).fill(null).map((_, j) => {
      const index = i * boardSize + j
      const isWinningSquare = winnerInfo && winnerInfo.winningSquares.includes(index)
      return <Square key={index} value={squares[index]} onSquareClick={() => handleSquareClick(index)} isWinningSquare={isWinningSquare} />
    })
    return <div key={i} className="flex gap-1">{row}</div>
  })

  return (
    <div className='flex flex-col gap-5'>
      {winnerInfo && <Congrats />}
      <div className='flex flex-col items-center justify-center gap-1'>{rows}</div>
      <BoardSizeButtons onBoardSizeChange={onBoardSizeChange} />
      <div className='text-center text-2xl font-bold'>{status}</div>
      <Footer />
    </div>
  )
}

export default Board
