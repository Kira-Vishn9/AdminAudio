import React from 'react'
import { Button, Input } from '@/component'
import { ContextAuth } from '../../context/Context.tsx'
import './style.css'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import { login } from '@/module/login/login.service.ts'

function LogIn (): JSX.Element {
  const { setAuth } = React.useContext(ContextAuth)
  const [mail, setMail] = React.useState(false)
  const [password, setPassword] = React.useState(false)
  const [token, setToken] = React.useState(false)
  const [istoken, setIsToken] = React.useState(false)

  const checkin = (): void => {
    mail && password && token ? setAuth(true) : alert('try again')
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
  const validationToken = (e: React.ChangeEvent<HTMLInputElement>): boolean | undefined => {
    const target = e.target.value
    if (target === null) return undefined
    setIsToken(target.length >= 6)
  }

  React.useEffect(() => {
    login()
      .then((res) => {
        setToken(res.status)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <div className="wrap-login">
      <div>
        <img src={logo}/>
      </div>
      <Input
        style={{ marginTop: '10px', marginBottom: '10px' }}
        placeholder="Enter your login"
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
      <Input
        style={{ marginTop: '10px', marginBottom: '10px' }}
        placeholder="Enter token"
        error={!istoken}
        onChange={validationToken}
      />
      <Button
        sx={{ border: 1 }}
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
