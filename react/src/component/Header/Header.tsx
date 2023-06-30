import { Button } from '@components/index'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import logo from '@/assets/logo.svg'
import './style.css'

export function Header (): JSX.Element {
  const location = useLocation()
  // const { auth, setAuth } = React.useContext(ContextAuth)

  return (
    <div className="header">
      <Link to="/main">
        <span>
          <img src={logo}/>
        </span>
      </Link>
      <Link to="/signin">
        <Button color="primary" size="medium" variant="outlined">
          {location.pathname === '/signin' ? 'Sign in' : 'Sign up'}
        </Button>
      </Link>
    </div>
  )
}
