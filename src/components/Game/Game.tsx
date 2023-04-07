import { useLocalStorageState } from 'ahooks'
import ThemeChange from '../ThemeChange'
import Board from './GameBoard'
import MoveList from './GameMoveList'
import { BoardSizeButtons } from './GameBoardSizeButtons'

export interface HistoryItem {
  squares: Array<string>
  location: number | null
}

export default function Game() {
  const [boardSize, setBoardSize] = useLocalStorageState<number>('gameBoardSize', { defaultValue: 3 })
  const [history, setHistory] = useLocalStorageState<HistoryItem[]>('gameHistory', { defaultValue: [{ squares: Array(boardSize * boardSize).fill(null), location: null }] })
  const [currentMove, setCurrentMove] = useLocalStorageState<number>('gameCurrentMove', { defaultValue: 0 })
  const isNextX = currentMove % 2 === 0
  const currentSquares = history[currentMove].squares

  function handlePlay(nextSquares: Array<string>, location: number): void {
    const nextHistory = [...history.slice(0, currentMove + 1), { squares: nextSquares, location }]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function handleBoardSizeChange(size: number) {
    setBoardSize(size)
    setHistory([{ squares: Array(size * size).fill(null), location: null }])
    setCurrentMove(0)
  }

  return (
    <div className="flex min-h-screen justify-center font-serif">
      <div className='flex flex-col gap-2.5 my-8 mx-4'>
        <Board squares={currentSquares} boardSize={boardSize} isNextX={isNextX} onPlay={handlePlay} />
        <BoardSizeButtons onBoardSizeChange={handleBoardSizeChange} />
        <ThemeChange />
      </div>
      <div className="my-12 mx-4">
        <MoveList history={history} boardSize={boardSize} currentMove={currentMove} onMoveClick={(nextMove: number) => setCurrentMove(nextMove)} />
      </div>
    </div>
  )
}
