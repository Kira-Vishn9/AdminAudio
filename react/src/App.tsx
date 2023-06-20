import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextAuth } from '../src/context/Context'
import { LayoutDefault } from './component/Layout/LayoutDefault'
import { RootLayout } from './component/Layout/RootLayout'
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
        <RootLayout>
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/signin" element={<LogIn /> } />
          {/* {!auth */}
          {/*   ? ( */}
          {/*     <Route path="/main" element={<Main />}></Route> */}
          {/*     ) */}
          {/*   : ( */}
          {/*     <Route path="/main" element={<LayoutDefault><Main /></LayoutDefault>}></Route> */}
          {/*     )} */}

          {/* {!auth */}
          {/*   ? ( */}
          {/*     <Route path="/signin" element={<LayoutAuth><LogIn /></LayoutAuth> } /> */}
          {/*     ) */}
          {/*   : ( */}
          {/*   <Route path="/signin" element={<LayoutDefault><LogIn /></LayoutDefault>} /> */}
          {/*     )} */}
        </Routes>
        </RootLayout>
      </BrowserRouter>
    </ContextAuth.Provider>
  )
}

export default App
