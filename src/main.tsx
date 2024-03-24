import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { WordProvider } from './context/wordContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <WordProvider>
    <App />
  </WordProvider>
)
