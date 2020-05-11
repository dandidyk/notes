import React from 'react'
import s from './style.module.scss'

const NotesItem = ({ id, title, text, date, handleDelete }) => {
  const formatedDate = date.toLocaleString()
  return (
    <li className={s.item}>
      <div className={s.item__title__wrap}>
        <h5 className={s.item__title}>{title}</h5>
        <span className={s.item__date}>{formatedDate}</span>
        <div className={s.item__delete} onClick={() => handleDelete(id)}>
          <i className='fas fa-trash'></i>
        </div>
      </div>
      <p className={s.item__text}>{text}</p>
    </li>
  )
}

export default NotesItem
