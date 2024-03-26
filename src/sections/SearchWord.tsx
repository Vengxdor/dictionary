import { FormEvent, useState } from 'react'
import { searchWord } from '../service/dictionarySearch'
import { useWordContext } from '../hooks/useWordContext'

function SearchWord () {
  const [newWord, setNewWord] = useState('')
  const { setWordInfo, setError } = useWordContext()

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (newWord.trim() === '') return
    try {
      const data = await searchWord(newWord)
      if (data?.title) {
        setError(data)
        return
      }
      setWordInfo(data)
      setError({ word: newWord })
      setNewWord('')
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <form onSubmit={handleSearch} className="flex rounded-lg bg-zinc-800 dark:bg-zinc-200/40">
      <input
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        className="bg-transparent p-2 outline-none flex-grow" placeholder="Search a word..." type="text" />
      <button className="fa-solid fa-search  p-3 text-dark-primary-400" type="submit"></button>
    </form>
  )
}

export default SearchWord
