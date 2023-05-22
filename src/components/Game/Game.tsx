import React from 'react'
import { useLocalStorage } from 'usehooks-ts'
import MoveList from './MoveList'
import Board from './GameBoard'

export interface HistoryItem {
  squares: Array<string>
  location: number
}

const Game: React.FC = () => {
  const [boardSize, setBoardSize] = useLocalStorage<number>('gameBoardSize', 3)
  const [history, setHistory] = useLocalStorage<HistoryItem[]>('gameHistory', [{ squares: Array(boardSize ** 2).fill(null), location: 0 }])
  const [currentMove, setCurrentMove] = useLocalStorage<number>('gameCurrentMove', 0)
  const isNextX = currentMove % 2 === 0
  const currentSquares = history[currentMove].squares

  function handlePlay(nextSquares: Array<string>, location: number): void {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, location }]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function handleBoardSizeChange(size: number) {
    setBoardSize(size)
    setHistory([{ squares: Array(size * size).fill(null), location: 0 }])
    setCurrentMove(0)
  }

  return (
    <div className="m-10 flex min-h-screen flex-col items-center gap-10 font-serif sm:flex-row sm:items-start sm:justify-center ">
      <Board squares={currentSquares} boardSize={boardSize} isNextX={isNextX} onPlay={handlePlay} onBoardSizeChange={handleBoardSizeChange} />
      <MoveList history={history} boardSize={boardSize} currentMove={currentMove} onMoveClick={(nextMove: number) => setCurrentMove(nextMove)} />
    </div>
  )
}

export default Game
