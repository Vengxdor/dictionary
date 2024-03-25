import { useWordContext } from './hooks/useWordContext'
import Header from './sections/Header'
import Meanings from './sections/Meanings'
import SearchWord from './sections/SearchWord'
import Source from './sections/Source'
import Word from './sections/Word'

function App () {
  const { wordInfo } = useWordContext()
  return (
    <div className='w-11/12 mx-auto md:w-10/12 lg:w-8/12 xl:w-1/2'>
      <Header />
      <SearchWord />

      <main>
        {wordInfo.word
          ? (
            <>
              <Word />
              <Meanings />
              <Source />
            </>
          )
          : <h3 className='p-6 flex justify-center items-center'>Please Search a word</h3>
        }

      </main>
    </div>
  )
}

export default App
