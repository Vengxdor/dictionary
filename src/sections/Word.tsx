import { DictionaryRes } from '../service/dictionarySearch'

function Word ({ word }: {word: DictionaryRes}) {
  return (
    <header className="flex justify-between items-center my-5">
      <div>
        <h2 className="text-3xl">{word.word}</h2>
        <p className="text-dark-primary-400 dark:text-primary-400">{word.phonetic}</p>
      </div>
      <button className="bg-dark-primary-500/50 w-11 h-11 rounded-full cursor-pointer dark:bg-primary-200 flex justify-center items-center">
        <i className="fa-solid fa-play text-dark-primary-400 dark:text-primary-400"></i>
      </button>
    </header>
  )
}

export default Word
