import React from 'react'
import { Button, Input } from '@/components/index.ts'
import { ContextAuth } from '@/context/index.ts'
import styles from './style.module.css'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import { login } from '@/module/login/login.service.ts'
import { useForm } from 'react-hook-form'
import Snackbars from '@/components/SnackBar/SnackBar.tsx'

function LogIn (): JSX.Element {
  const { setAuth } = React.useContext(ContextAuth)
  const [token, setToken] = React.useState(false)
  const navigate = useNavigate()
  const [open, setOpen] = React.useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (d: any): void => {
    console.log(JSON.stringify((d)))
  }

  React.useEffect(() => {
    login()
      .then((res) => {
        setToken(res.status)
      })
      .catch(() => {
        setOpen(true)
      })
  }, [])

  const submit = (): void => {
    if (token) {
      navigate('songs')
      setAuth(true)
    }
  }

  return (
    <>
      {open ? <Snackbars /> : ''}
      <div className={styles.wrap}>
        <div>
          <img src={logo} alt={'logo'}/>
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
                Sing up
          </Button>
        </form>
      </div>
    </>
  )
}

export default LogIn
