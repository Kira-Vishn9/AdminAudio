import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextAuth } from '../src/context/Context'
import { LayoutDefault } from './component/Layout/LayoutDefault'
import Main from './page/Main'
import './App.css'
import LogIn from './component/LogIn/LogIn'
import { LayoutAuth } from './component/Layout/LautAuth'
import React from 'react'

function App (): JSX.Element {
  // auth - епременная, setAuth - () => void
  const [auth, setAuth] = React.useState('false')

  return (
    <ContextAuth.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<LayoutDefault><Main /></LayoutDefault>}></Route>
          {!auth
            ? (
              <Route path="/signin" element={<LayoutAuth><LogIn /></LayoutAuth> } />
              )
            : (
            <Route path="/signin" element={<LayoutDefault><LogIn /></LayoutDefault>} />
              )}
        </Routes>
      </BrowserRouter>
    </ContextAuth.Provider>
  )
}

export default App
