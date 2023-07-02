import React from 'react'
import { Button, Input } from '@components/index'
import { ContextAuth } from '../../context/Context'
import './style.css'
import { Link } from 'react-router-dom'

function LogIn (): JSX.Element {
  const { auth, setAuth } = React.useContext(ContextAuth)
  const [mail, setMail] = React.useState(false)
  const [password, setPassword] = React.useState(false)

  const checkin = (): void => {
    mail && password ? setAuth(true) : alert('try again')
  }

  const validationMail = (e: React.ChangeEvent<HTMLInputElement>): undefined | boolean => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const target = e.target.value
    if (target === null) return
    setMail(check.test(target))
    return check.test(target)
  }

  const validationPassword = (e: React.ChangeEvent<HTMLInputElement>): undefined | boolean => {
    const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    const target = e.target.value
    if (target === null) return
    setPassword(check.test(target))
    return check.test(target)
  }

  return (
    <div className="wrap-login">
      <div>
        <h3>Create your account</h3>
      </div>
      <Input
        style={{ marginTop: '10px', marginBottom: '10px' }}
        placeholder="Enter your mail or login"
        error={!mail}
        onChange={validationMail}
      />
      <Input
        style={{ marginTop: '10px', marginBottom: '10px' }}
        placeholder="Enter your password"
        type={'password'}
        error={!password}
        onChange={validationPassword}
      />
      <Button
        disabled={ !mail || !password}
        onClick={checkin}
      >
          <Link to={'/songs'} >
          Enter
          </Link>
      </Button>

    </div>
  )
}

export default LogIn
