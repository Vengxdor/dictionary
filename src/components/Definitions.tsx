import { Meaning } from '../service/dictionarySearch'

type Props = {
  word: Meaning
}
function Definitions ({ word }: Props) {
  return (
    <ul className='list-disc block pl-10 marker:text-primary-500'>
      {
        word.definitions?.map((def, index) => (
          <li className='my-3' key={index}>{def.definition}</li>
        ))
      }
    </ul>
  )
}

export default Definitions
