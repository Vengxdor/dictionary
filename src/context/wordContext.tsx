import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react'

interface WordContextValue {
  word: string;
  setWord: Dispatch<SetStateAction<string>>;
}

export const WordContext = createContext<WordContextValue>({
  word: '',
  setWord: () => {}
})

export const WordProvider = ({ children }: {children: ReactNode}) => {
  const [word, setWord] = useState('')
  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  )
}
