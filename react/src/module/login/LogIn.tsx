import React from 'react'
import { Button, Input } from '@/component'
import { ContextAuth } from '../../context/Context.tsx'
import './style.css'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import { login } from '@/module/login/login.service.ts'
import { useForm } from 'react-hook-form'

function LogIn (): JSX.Element {
  const { setAuth } = React.useContext(ContextAuth)
  const [mail, setMail] = React.useState(false)
  const [password, setPassword] = React.useState(false)
  const [token, setToken] = React.useState(false)
  const [istoken, setIsToken] = React.useState(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (d) => {
    console.log(JSON.stringify((d)))
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

  const submit = () => {
    if (token) {
      navigate('songs')
      setAuth(true)
    }
  }

  return (
    <div className="wrap-login">
      <div>
        <img src={logo}/>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Login
          <Input
            sx={{ marginTop: '10px', marginBottom: '10px' }}
            {...register('login', { required: true, pattern: /^\S+@\S+$/i })}
            placeholder="Enter your login"
            type="text"
            error={(errors.login != null)}
          />
        </label>
        <label>
          Password
          <Input
            sx={{ marginTop: '10px', marginBottom: '10px' }}
            placeholder="Enter your password"
            {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/ })}
            type={'password'}
            error={(errors.password != null)}
          />
        </label>
        <label>
          Token
          <Input
            sx={{ marginTop: '10px', marginBottom: '10px' }}
            {...register('token', { required: true, minLength: 6 })}
            placeholder="Enter token"
            error={(errors.token != null)}
          />
        </label>
          <Button
            type="submit"
            sx={{ border: 1 }}
            onClick={submit}
          >
              Enter
        </Button>
      </form>
    </div>
  )
}

export default LogIn

// const checkin = (): void => {
//   mail && password && token ? setAuth(true) : alert('try again')
// }
//
// const validationMail = (e: React.ChangeEvent<HTMLInputElement>): undefined | boolean => {
//   const check = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//   const target = e.target.value
//   if (target === null) return
//   setMail(check.test(target))
//   return check.test(target)
// }
// const validationPassword = (e: React.ChangeEvent<HTMLInputElement>): undefined | boolean => {
//   const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
//   const target = e.target.value
//   if (target === null) return
//   setPassword(check.test(target))
//   return check.test(target)
// }
// const validationToken = (e: React.ChangeEvent<HTMLInputElement>): boolean | undefined => {
//   const target = e.target.value
//   if (target === null) return undefined
//   setIsToken(target.length >= 6)
// }
