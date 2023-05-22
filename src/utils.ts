import type React from 'react'
import { useEffect, useRef, useState } from 'react'

type SerializeFunction<T> = (value: T) => string
type DeserializeFunction<T> = (value: string) => T

export function useLocalStorageState<T>(
  key: string,
  defaultValue: T | (() => T),
  {
    serialize = JSON.stringify as SerializeFunction<T>,
    deserialize = JSON.parse as DeserializeFunction<T>,
  } = {},
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage)
      }
      catch (error) {
        window.localStorage.removeItem(key)
      }
    }
    return typeof defaultValue === 'function' ? (defaultValue as () => T)() : defaultValue
  })

  const prevKeyRef = useRef<string>(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key)
      window.localStorage.removeItem(prevKey)

    prevKeyRef.current = key
    window.localStorage.setItem(key, serialize(state))
  }, [key, state, serialize])

  return [state, setState]
}
