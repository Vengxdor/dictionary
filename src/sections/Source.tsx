import { useWordContext } from '../hooks/useWordContext'

function Source () {
  const { wordInfo } = useWordContext()
  return (
    <footer className='my-6 py-6 border-t border-white/10 dark:border-zinc-200'>
      {/* <hr className=''/> */}
      <h2 className='text-white/60  dark:text-zinc-400 text-lg'>Source</h2>

      {wordInfo.sourceUrls?.map((url, index) => (
        <a className='underline flex gap-2 items-center cursor-pointer' key={index} href={url}>
          {url}
          <i className="fa-solid fa-up-right-from-square opacity-50 fa-sm"></i>
        </a>
      ))}
    </footer>
  )
}

export default Source
