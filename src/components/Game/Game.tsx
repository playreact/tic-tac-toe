import { useLocalStorageState } from 'ahooks'
import Board from '../Board'
import MoveList from '../MoveList'

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
    <div className="m-8 gap-8 flex flex-col min-h-screen items-center font-serif sm:flex-row sm:items-start sm:justify-center ">
      <Board squares={currentSquares} boardSize={boardSize} isNextX={isNextX} onPlay={handlePlay} onBoardSizeChange={handleBoardSizeChange} />
      <MoveList history={history} boardSize={boardSize} currentMove={currentMove} onMoveClick={(nextMove: number) => setCurrentMove(nextMove)} />
    </div>
  )
}
