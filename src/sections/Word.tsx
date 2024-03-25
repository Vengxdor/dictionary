import { useWordContext } from '../hooks/useWordContext'

function Word () {
  const { wordInfo } = useWordContext()

  const handleAudio = () => {
    let pronuntation: string | undefined = ''

    wordInfo.phonetics?.forEach(item => {
      if (item.audio !== '') {
        pronuntation = item.audio
      }
    })

    const audio = new Audio(pronuntation)
    audio.play()
  }
  return (
    <header className="flex justify-between items-center my-5">
      <div>
        <h2 className="text-3xl">{wordInfo.word}</h2>
        <p className="text-dark-primary-400 dark:text-primary-400">{wordInfo.phonetic}</p>
      </div>
      <button onClick={handleAudio} className="bg-dark-primary-500/50 w-11 h-11 rounded-full cursor-pointer dark:bg-primary-200 flex justify-center items-center">
        <i className="fa-solid fa-play text-dark-primary-400 dark:text-primary-400"></i>
      </button>
    </header>
  )
}

export default Word
