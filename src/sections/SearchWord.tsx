import { FormEvent, useState } from 'react'
import { searchWord } from '../service/dictionarySearch'

function SearchWord () {
  const [newWord, setNewWord] = useState('')
  const handleSearch = async (e: FormEvent) => {
    e.preventDefault()
    if (newWord.trim() === '') return

    const data = await searchWord(newWord)
    // Store the word in localStorage.
    localStorage.setItem('word', JSON.stringify(data))
    setNewWord('')
  }
  return (
    <form onSubmit={handleSearch} className="flex bg-zinc-800 rounded-lg">
      <input
        value={newWord}
        onChange={(e) => setNewWord(e.target.value)}
        className="bg-transparent p-2 outline-none flex-grow" placeholder="Search a word..." type="text" />
      <button className="fa-solid fa-search  p-3 text-dark-primary-400" type="submit"></button>
    </form>
  )
}

export default SearchWord
