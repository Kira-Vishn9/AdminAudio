import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextAuth } from '@/context/Context.tsx'
import { RootLayout } from './component/Layout/RootLayout'
import './App.css'
import LogIn from './component/LogIn/LogIn'
import { Songs } from './module/song'

import React from 'react'
import AddSong from '@/module/song/views/AddSong.tsx'
import Song from '@/module/song/views/Song.tsx'

const NotFound = () => <div>404</div>

function App (): JSX.Element {
  const [auth, setAuth] = React.useState(false)

  return (
    <ContextAuth.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <RootLayout>
          {auth
            ? (<Routes>
              <Route path="/songs" element={<Songs />} />
              <Route path="/song/:id" element={<Song />} />
              {/* <Route path="/signin" element={<LogIn /> } /> */}
              <Route path="/newsong" element={<AddSong /> } />
              <Route path="*" element={<NotFound /> } />
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
