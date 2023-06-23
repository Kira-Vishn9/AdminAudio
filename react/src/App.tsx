import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextAuth } from '../src/context/Context'
import { RootLayout } from './component/Layout/RootLayout'
import Main from './page/Main'
import './App.css'
import LogIn from './component/LogIn/LogIn'

// modules
import { Songs } from './module/song'

import React from 'react'

function App (): JSX.Element {
  // auth - епременная, setAuth - () => void
  const [auth, setAuth] = React.useState(true)

  return (
    <ContextAuth.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <RootLayout>
          {auth
            ? (<Routes>
              <Route path="/main" element={<Main />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/signin" element={<LogIn /> } />
            </Routes>)
            : (
              <Routes>
                <Route path="*" element={<LogIn /> } />
              </Routes>)
          }

        </RootLayout>
      </BrowserRouter>
    </ContextAuth.Provider>
  )
}

export default App
