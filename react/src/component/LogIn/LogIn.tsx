import { Button, Input } from '../index'
import React from 'react'
import './style.css'

function LogIn (): JSX.Element {
  // const [auth, setAuth] = useContext(AuthContext);
  const [mail, setMail] = React.useState(false)
  const [password, setPassword] = React.useState(false)

  // const checkValidnoth = () => {
  //   console.log(auth)
  // }

  const validationMail = (e: InputEvent) => {
    const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const target = e?.target
    if (target === null) return
    if (target instanceof HTMLInputElement) {
      setMail(check.test(target.value))
      return check.test(target.value)
    }
  }

  const validationPassword = (e: InputEvent) => {
    const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
    const target = e.target
    if (target === null) return
    if (target instanceof HTMLInputElement) {
      setPassword(check.test(target.value))
      return check.test(target.value)
    }
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
        error={!password}
        onChange={validationPassword}
      />
      <Button
        color="primary"
        size="medium"
        variant="outlined"
      >
        Enter
      </Button>
    </div>
  )
}

export default LogIn
