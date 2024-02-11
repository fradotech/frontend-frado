'use client'
import React from 'react'

type TProps = {
  children: React.ReactNode
}

interface contextProps {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const GlobalContext = React.createContext<contextProps>({
  value: 'light',
  setValue: () => {},
})

export const GlobalProvider = ({ children }: TProps) => {
  const [value, setValue] = React.useState('light')

  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => React.useContext(GlobalContext)
