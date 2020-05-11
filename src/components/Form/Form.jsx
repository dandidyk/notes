import React, { useState } from 'react'
import s from './style.module.scss'

const Form = ({ handleAddNote }) => {
  const [form, setForm] = useState({ input: '', textarea: '' })
  const [error, setError] = useState(true)

  const onChange = (name) => (e) => {
    if (form.input.length < 3 || form.textarea.length < 3) {
      setError(true)
    } else {
      setError(false)
    }
    setForm({ ...form, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (error) return undefined

    handleAddNote({ title: form.input, text: form.textarea })
    setForm({ input: '', textarea: '' })
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      {error ? <p className={s.error}>Title and text lengths must be at least 3 symbols</p> : ''}

      <input placeholder='Note title' type='text' className={s.input} value={form.input} onChange={onChange('input')} />
      <textarea
        className={s.textarea}
        placeholder='Note text'
        rows='3'
        name='text'
        value={form.textarea}
        onChange={onChange('textarea')}
      ></textarea>
      <button className={s.button}>Add Note</button>
    </form>
  )
}

export default Form
