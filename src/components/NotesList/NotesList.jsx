import React from 'react'
import s from './style.module.scss'
import NotesItem from '../NotesItem'

const NotesList = ({ notes, handleDelete }) => {
  return (
    <ul className={s.list}>
      {notes !== null ? (
        notes.map(({ id, title, text, date }) => (
          <NotesItem handleDelete={handleDelete} key={id} id={id} title={title} text={text} date={date} />
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </ul>
  )
}

export default NotesList
