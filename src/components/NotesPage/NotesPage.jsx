import React, { useState, useEffect } from 'react'
import NotesList from '../NotesList'
import Form from '../Form'

const data = [
  {
    date: new Date(),
    title: 'Note title 1',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 1
  },
  {
    date: new Date(),
    title: 'Note title 2',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 2
  },
  {
    date: new Date(),
    title: 'Note title 3',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 3
  },
  {
    date: new Date(),
    title: 'Note title 4',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 4
  },
  {
    date: new Date(),
    title: 'Note title 5',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 5
  },
  {
    date: new Date(),
    title: 'Note title 6',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 10
  },
  {
    date: new Date(),
    title: 'Note title 7',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 6
  },
  {
    date: new Date(),
    title: 'Note title 8',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 7
  },
  {
    date: new Date(),
    title: 'Note title 9',
    text:
      'lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem',
    id: 8
  }
]

const NotesPage = () => {
  const [notes, setNotes] = useState(null)

  const handleDeleteNote = (deleteId) => {
    setNotes((notes) => notes.filter(({ id }) => id !== deleteId))
  }
  const handleAddNote = ({ title, text }) => {
    const newNote = {
      title,
      text,
      id: notes.length + 100, // for real app server create unique id
      date: new Date()
    }
    setNotes([newNote, ...notes])
  }

  useEffect(() => {
    setTimeout(setNotes(data), 200)
  }, [])

  return (
    <>
      <Form handleAddNote={handleAddNote} />
      <NotesList handleDelete={handleDeleteNote} notes={notes} />
    </>
  )
}

export default NotesPage
