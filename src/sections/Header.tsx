import { useEffect, useState } from 'react'
import { BookIcon } from '../icons/BookIcon'
import '../components/switcher.css'
import SelectFont from '../components/SelectFont'

function Header () {
  // @ts-expect-error parse exists in JSON
  const initialMode = () => JSON.parse(localStorage.getItem('mode')) ?? false
  const [mode, setMode] = useState(initialMode)
  const html = document.documentElement

  const handleDarkMode = () => {
    const newMode = !mode
    setMode(newMode)
    html.classList.toggle('dark', newMode)
    localStorage.setItem('mode', JSON.stringify(newMode))
  }

  useEffect(() => {
    html.classList.toggle('dark', mode)
  }, [mode])

  return (
    <header className='flex justify-between items-center pt-5 pb-7'>
      <BookIcon className='w-7 h-7'/>

      <nav className='flex gap-3 items-center'>
        <SelectFont />
        <div className='border-l pl-3 flex gap-3 items-center'>
          <label htmlFor='dark-mode' className="switch">
            <input id='dark-mode' checked={mode} onChange={handleDarkMode} className="checkbox" type="checkbox"/>
            <span className="slider"></span>
          </label>
          <i className={`fa-solid fa-xl ${mode ? 'fa-sun' : 'fa-moon'}`}></i>
        </div>
      </nav>

    </header>
  )
}

export default Header
