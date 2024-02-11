'use client'
import { ThemeProvider, useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

type TProps = {
  children: React.ReactNode
}

export function Providers({ children }: TProps) {
  return (
    <ThemeProvider
      themes={[
        'light',
        'dark',
        'bumblebee',
        'emerald',
        'corporate',
        'synthwave',
        'retro',
        'cyberpunk',
        'valentine',
        'halloween',
        'garden',
        'forest',
        'aqua',
        'lofi',
        'pastel',
        'fantasy',
        'wireframe',
        'black',
        'luxury',
        'dracula',
        'cmyk',
        'autumn',
        'business',
        'acid',
        'lemonade',
        'night',
        'coffee',
        'winter',
      ]}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  )
}

const useMode = () => {
  const { themes, theme, setTheme, forcedTheme, systemTheme, resolvedTheme } =
    useTheme()
  const [lightMode, setLightMode] = useState(true)
  const [hydrationError, setHydrationError] = useState(false)

  useEffect(() => {
    if (theme === 'light') {
      setLightMode(true)
    } else if (theme === 'dark') {
      setLightMode(false)
    }
  }, [theme])

  useEffect(() => {
    setHydrationError(true)
  }, [])

  return {
    lightMode,
    themes,
    theme,
    setTheme,
    forcedTheme,
    systemTheme,
    resolvedTheme,
    hydrationError,
  }
}
export default useMode
