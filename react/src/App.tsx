import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ContextAuth, ModalContext } from '@/context'
import { RootLayout } from '@/components/Layout/RootLayout'
import LogIn from '@/module/login/LogIn.tsx'
import Songs from '@/module/song/views/Songs.tsx'

import { Combiner } from '@/components'

import { CreateSong, Song } from '@/module/song/index.ts'

const NotFound = (): JSX.Element => <div>404</div>

function App (): JSX.Element {
  const [auth, setAuth] = React.useState(true)
  const [modal, setModal] = React.useState<string>('')
  const [payload, setPayload] = React.useState<any>(null)

  const onShow = (name: string, payload: any) => {
    setModal(name)
    setPayload(payload)
  }

  return (
    <ContextAuth.Provider value={{ auth, setAuth }}>
      <BrowserRouter>
        <RootLayout>
          {auth
            ? (
              <ModalContext.Provider value={{ modal, show: onShow, close: () => { setModal('') }, payload }}>
                <Routes>
                  <Route path="/songs" element={<Songs />} />
                  <Route path="/song/:id" element={<Song />} />
                  <Route path="/newsong" element={<CreateSong /> } />
                  <Route path="*" element={<NotFound /> } />
                </Routes>

                <Combiner />
              </ModalContext.Provider>
              )
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
