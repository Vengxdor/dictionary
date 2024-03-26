import { createContext, useEffect, useState } from 'react'
import { DictionaryRes } from '../service/dictionarySearch'

interface WordContextType {
  wordInfo: DictionaryRes;
  setWordInfo: React.Dispatch<React.SetStateAction<DictionaryRes>>;
  error: DictionaryRes
  setError: React.Dispatch<React.SetStateAction<DictionaryRes>>;
}

export const WordContext = createContext<WordContextType>({
  wordInfo: {},
  setWordInfo: () => {},
  error: {},
  setError: () => {}
})

type Props = {
    children: JSX.Element;
};

export function WordProvider ({ children }: Props) {
  const storageWord = localStorage.getItem('word')
  // @ts-expect-error parse exist in Json.
  const initialWordInfo: WordInfo = JSON.parse(storageWord) || {}

  const [wordInfo, setWordInfo] = useState<DictionaryRes>(initialWordInfo)
  const [error, setError] = useState({})

  useEffect(() => {
    if (!wordInfo) return
    localStorage.setItem('word', JSON.stringify(wordInfo))
  }, [wordInfo])

  return (
    <WordContext.Provider value={{ wordInfo, setWordInfo, error, setError }}>
      {children}
    </WordContext.Provider>
  )
}
