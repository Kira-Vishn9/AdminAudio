import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextAuth } from '../src/context/Context'
import { RootLayout } from './component/Layout/RootLayout'
import Main from './page/Main'
import './App.css'
import LogIn from './component/LogIn/LogIn'

import React from 'react'

function App (): JSX.Element {
  // auth - епременная, setAuth - () => void
  const [auth, setAuth] = React.useState(false)

  return (
    <ContextAuth.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <RootLayout>
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/signin" element={<LogIn /> } />
        </Routes>
        </RootLayout>
      </BrowserRouter>
    </ContextAuth.Provider>
  )
}

export default App
