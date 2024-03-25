import { useWordContext } from '../hooks/useWordContext'

function Source () {
  const { wordInfo } = useWordContext()
  console.log(wordInfo)
  return (
    <footer className='mt-6 pt-6 border-t border-white/10 dark:border-zinc-200'>
      {/* <hr className=''/> */}
      <h2 className='text-white/60  dark:text-zinc-400 text-lg'>Source</h2>

      {wordInfo.sourceUrls?.map((url, index) => (
        <a className='underline' key={index} href={url}>{url}</a>
      ))}
    </footer>
  )
}

export default Source
