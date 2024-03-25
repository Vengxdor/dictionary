import { useContext } from 'react'
import { WordContext } from '../context/wordContext'

export function useWordContext () {
  const context = useContext(WordContext)

  if (!context) {
    throw new Error('useWordContext must be used within a WordContextProvider')
  }

  return context
}
