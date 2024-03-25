import Definitions from '../components/Definitions'
import { useWordContext } from '../hooks/useWordContext'

function Meanings () {
  const { wordInfo } = useWordContext()
  return (
    <section>
      <ul>
        {wordInfo.meanings?.map((item, index) => (
          <li key={index}>
            <header className='flex items-center gap-5'>
              <strong >{item.partOfSpeech}</strong>
              <div className='w-full h-[1px] rounded-full bg-zinc-700/50 dark:bg-zinc-200'></div>
            </header>

            <h3 className='mt-5 text-white/60 dark:text-zinc-400 text-lg'>Meaning</h3>

            <Definitions word={item}/>

            {item.synonyms?.length !== 0 && (
              <h3 className='my-5 text-white/60 flex gap-6'>Synonyms
                <span className='text-dark-primary-400 dark:text-primary-500 font-semibold'>
                  {item.synonyms}
                </span>
              </h3>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Meanings
