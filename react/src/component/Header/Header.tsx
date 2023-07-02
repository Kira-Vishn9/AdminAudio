import { Button } from '@components/index'
import { Link } from 'react-router-dom'
import React from 'react'
import logo from '@/assets/logo.svg'
import './style.css'
import { ContextAuth } from '@/context/Context.tsx'

export function Header (): JSX.Element {
  const { setAuth } = React.useContext(ContextAuth)
  return (
    <div className="header">
      <Link to="/songs">
        <span>
          <img src={logo}/>
        </span>
      </Link>
      <Link to="/signin">
        <Button
          onClick={() => { setAuth(false) }}
          color="primary" size="medium" variant="outlined">
          LOGOUT
        </Button>
      </Link>
    </div>
  )
}
