import { useMemo, useState } from 'react'
import { createTheme } from '@mui/material/styles'
import { themeSettings } from './theme'
import './App.css'

function App() {
  const theme = useMemo(() => createTheme(themeSettings), [])

  return (
    <div className = "app">
      
    </div>
  )
}

export default App

