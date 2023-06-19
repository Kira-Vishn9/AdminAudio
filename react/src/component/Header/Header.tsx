import { Button } from '../index'
import { Link, useLocation } from 'react-router-dom'
import React from 'react'
import AuthContext from '../../context/Context'
import './style.css'

export function Header (): JSX.Element {
  const location = useLocation()
  const { auth, setAuth } = React.useContext(AuthContext)

  console.log(auth)
  console.log(setAuth)

  return (
    <div className="header">
      <Link to="/main">
        <span>logo</span>
      </Link>

      <Link to="/LOGIN">
        <Button color="primary" size="medium" variant="outlined">
          {location.pathname === '/LOGIN' ? 'Sign in' : 'Sign up'}
        </Button>
      </Link>
    </div>
  )
}
