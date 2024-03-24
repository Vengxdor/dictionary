import { useEffect, useState } from 'react'

function SelectFont () {
  const html = document.documentElement
  const storageFont = localStorage.getItem('font')
  const [font, setFont] = useState(storageFont ?? 'serif')

  const handleFont = (value:string) => {
    setFont(value)
    localStorage.setItem('font', value)
  }

  useEffect(() => {
    // Create a css property to store the font.
    html.style.setProperty('--current-font', font)
  }, [font])

  return (
    <select value={font} onChange={(e) => handleFont(e.target.value)} className='bg-transparent dark:text-black outline-none' name="fonts">
      <option className='text-black' value="serif">Serif</option>
      <option className='text-black' value="sans-serif">Sans Serif</option>
      <option className='text-black' value="monospace">Monospace</option>
    </select>
  )
}

export default SelectFont
