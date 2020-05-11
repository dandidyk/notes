import React, { useEffect, useState } from 'react'
import s from './style.module.scss'
import NotesPage from './components/NotesPage'
import LoginPage from './components/LoginPage'

import { ProtectedRoute } from './ProtectedRoute'

import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className={s.app}>
      <div className={s.app__wrap}>
        <h1 className={s.app__title}>Notes</h1>
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <ProtectedRoute exact path='/' component={NotesPage} />
        </Switch>
      </div>
    </div>
  )
}

export default App
