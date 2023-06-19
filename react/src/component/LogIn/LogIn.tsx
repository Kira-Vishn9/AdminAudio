import React from 'react'
import { Button, Input } from '../index'
// import { ContextAuth } from '../../context/Context'
import './style.css'

function LogIn (): JSX.Element {
  // const { auth, setAuth } = React.useContext(ContextAuth)
  const [mail, setMail] = React.useState(false)
  const [password, setPassword] = React.useState(false)
  // need help!!!
  // const checkin = (): void => {
  //   console.log('hi')
  // }

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
      <Button
        color="primary"
        size="medium"
        variant="outlined"
      >
        Enter
      </Button>
      <Input
        style={{ marginTop: '10px', marginBottom: '10px' }}
        placeholder="Enter your mail or login"
        error={!mail}
        onChange={validationMail}
      />
      <Input
        style={{ marginTop: '10px', marginBottom: '10px' }}
        placeholder="Enter your password"
        error={!password}
        onChange={validationPassword}
      />
    </div>
  )
}

export default LogIn
