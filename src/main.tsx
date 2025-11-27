import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DataContextComponent } from './context/dataContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataContextComponent>
      <App />
    </DataContextComponent>
  </StrictMode>,
)
