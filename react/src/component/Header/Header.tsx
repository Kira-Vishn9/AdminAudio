import { Button } from '@components/index'
import { Link } from 'react-router-dom'
import React from 'react'
import logo from '@/assets/logo.svg'
import './style.css'

export function Header (): JSX.Element {
  return (
    <div className="header">
      <Link to="/songs">
        <span>
          <img src={logo}/>
        </span>
      </Link>
      <Link to="/signin">
        <Button color="primary" size="medium" variant="outlined">
          LOGOUT
        </Button>
      </Link>
    </div>
  )
}
