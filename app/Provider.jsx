'use clienst'
import React from 'react'
import { ThemeProvider } from 'next-themes'

export default function Provider({children}) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
    <div>
        {children}
    </div>
    </ThemeProvider>
  )
}
