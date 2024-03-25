import Header from './sections/Header'
import Meanings from './sections/Meanings'
import SearchWord from './sections/SearchWord'
import Source from './sections/Source'
import Word from './sections/Word'

function App () {
  return (
    <div className='w-11/12 mx-auto'>
      <Header />
      <SearchWord />

      <main>
        <Word />
        <Meanings />
        <Source />
      </main>
    </div>
  )
}

export default App
