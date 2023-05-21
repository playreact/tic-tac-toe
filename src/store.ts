import { atom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

// const [boardSize, setBoardSize] = useLocalStorageState<number>('gameBoardSize', { defaultValue: 3 })
// const [history, setHistory] = useLocalStorageState<HistoryItem[]>('gameHistory', { defaultValue:  })
// const [currentMove, setCurrentMove] = useLocalStorageState<number>('gameCurrentMove', { defaultValue: 0 })
// const isNextX = currentMove % 2 === 0
// const currentSquares = history[currentMove].squares

export const boardSizeAtom = atom(3)

export const historyAtom = atomWithStorage(
  'history',
  get => [{ squares: Array(get(boardSizeAtom) * 2).fill(null), location: null }],
)
