import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from './globalStyles.js'
import { Global } from '@emotion/react'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Global styles={GlobalStyles} />
    <App />
  </StrictMode>,
)
