import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthContext from '../src/context/Context'
import { LayoutDefault } from './component/Layout/LayoutDefault'
import Main from './page/Main'
import './App.css'
import LogIn from './component/LogIn/LogIn'
import { LayoutAuth } from './component/Layout/LautAuth'
import React from 'react'
// Todo: make something
function App (): JSX.Element {
  // auth - епременная, setAuth - () => void
  const [auth, setAuth] = React.useState(false)

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<LayoutDefault><Main /> </LayoutDefault>} />
          {auth
            ? (
              <Route path="/LOGIN" element={<LayoutAuth><LogIn /></LayoutAuth> } />
              )
            : (
            <Route path="/LOGIN" element={<LayoutDefault children={LogIn} />} />
              )}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App
