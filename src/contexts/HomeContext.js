import React from "react"
import { createContext, useContext, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext({})

export const useAppContextHome = () => {
    return useContext(AppContext)
}

export const AppContextHome = ({children}) => {
    const [wishtlistLocal, setwishtlistLocal] = useState([])

    const getData = () => {
        AsyncStorage.getItem('wishtlist').then(data => {
          if (data !== null) {
            setwishtlistLocal(JSON.parse(data))
          }
        })
    }
    getData()

    const AppContextValue = {
        message: 'Afakah Work',
        wishtlistLocal,
        setwishtlistLocal
    }

    return <AppContext.Provider value={AppContextValue}>{children}</AppContext.Provider>
}
