import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
//import Auth from "./components/Auth"
import Header from './'
import { DataProvider } from './GlobalState'

function App() {
    return (
        <DataProvider>
            <Router>
                <div className="App">


                </div>
            </Router>
        </DataProvider>
    )
}

export default App