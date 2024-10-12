import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import {KalumApp} from './KalumApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <KalumApp />
  </StrictMode>,
)
