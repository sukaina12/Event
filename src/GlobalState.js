import React, { createContext, useState } from 'react'
import EventAPI from './API/EventAPI'

export const GlobalState = createContext()

export const DataProvider = ({ children }) => {

    const state = {
        EventAPI: EventAPI()
    }


    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}