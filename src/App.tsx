import { useWordContext } from './hooks/useWordContext'
import Header from './sections/Header'
import Noun from './sections/Noun'
import SearchWord from './sections/SearchWord'
import Source from './sections/Source'
import Verb from './sections/Verb'
import Word from './sections/Word'

function App () {
  const { wordInfo } = useWordContext()

  return (
    <div className='w-11/12 mx-auto'>
      <Header />
      <SearchWord />

      <main>
        <Word word={wordInfo} />
        <Noun />
        <Verb />
        <Source />
      </main>
    </div>
  )
}

export default App
