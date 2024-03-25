import { useEffect, useState } from 'react'
import { BookIcon } from '../icons/BookIcon'
import './switcher.css'
import SelectFont from './SelectFont'

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
    <header className='flex justify-between items-center py-3'>
      <BookIcon className='w-7 h-7'/>

      <div className='flex gap-3 items-center'>
        <SelectFont />
        <div className='border-l pl-3 flex gap-3 items-center'>
          <label className="switch">
            <input checked={mode} onChange={handleDarkMode} className="checkbox" type="checkbox"/>
            <span className="slider"></span>
          </label>
          <i className={`fa-solid fa-xl ${mode ? 'fa-sun' : 'fa-moon'}`}></i>
        </div>
      </div>
    </header>
  )
}

export default Header
