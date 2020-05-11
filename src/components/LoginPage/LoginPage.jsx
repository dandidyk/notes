import React from 'react'
import s from './style.module.scss'
import auth from '../../auth'

const LoginPage = ({ history }) => {
  return (
    <button
      className={s.button}
      onClick={() => {
        auth.login(() => {
          history.push('/')
        })
      }}
    >
      Login
    </button>
  )
}

export default LoginPage
