import React, { useState, useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import EditNoteForm from './components/EditeNoteForm';
import Note from './components/Note';
import Tag from './components/Tag';
const notesData = require('./components/data/noteData.json');

function App() {
  const [notes, getNotes] = useState([])
  const [tags, getTags] = useState([])
  const [selectedNote, setSelectedNote] = useState({});
  const [isEditNoteInputOpen, setEditNoteInputOpen] = useState(false)

  useEffect(_ => {
    getInitialNotes()
  }, [])

  const getInitialNotes = () => {
    const notes = notesData.initialNotes.map((el) => ({
      _id: el.id,
      name: el.name,
      tags: el.tags
    }))
    getNotes(notes)
    const tags = notesData.tags.map((el) => ({
      _id: el.id,
      title: el.name
    }))
    getTags(tags)
  }

  const handleNoteDelete = (id) => {
    getNotes(notes.filter(note => note._id !== id))
  }

  const handleNoteEdit = (note) => {
    setEditNoteInputOpen(true)
    setSelectedNote(note)
  }

  const handleAddNote = (newNote) => {
    newNote._id = notes.length + 1;
    getNotes([...notes, newNote])
  }

  const handleAddTags = (newTag) => {
    if (newTag.name.length !== 0) {
      newTag._id = tags.length + 1;
      newTag.title = newTag.name
      getTags([...tags, newTag])
    }
  }

  const handleNoteFilter = (tag) => {
    let res = [];
    notes.forEach((i) => {
      console.log(i)
      if (i.name.includes(tag)) res.push(i)
    })
    getNotes(res)
  }

  const handleUpdateNote = (newData) => {
    const editedNoteList = notes.map((el) => {
      if (el._id === newData.id) {
        console.log(newData)
        console.log(el)
        return { ...el, name: newData.name }
      }
      return el
    })
    console.log(editedNoteList)
    getNotes(editedNoteList)
  }

  const closeEditInput = () => {
    setEditNoteInputOpen(false)
    setSelectedNote({})
  }

  return (
    <div className="page">
      <div className="page__content">
        <header className="header">
          <h1 className="header__title">Notes</h1>
        </header>
        <main className="content">
          <AddNoteForm
            onAddNote={handleAddNote}
            onAddTags={handleAddTags}
          />
          <div className='tags'>
            {tags.map((tag) => (
              <Tag
                key={tag._id}
                tag={tag}
                onTagClick={handleNoteFilter}
              />
            ))}
          </div>
          <EditNoteForm
            note={selectedNote}
            isOpen={isEditNoteInputOpen}
            onClose={closeEditInput}
            onEditNote={handleUpdateNote}
          />
          <section className="notes-container">
            {notes.map((note) => (
              <Note
                key={note._id}
                note={note}
                onNoteDelete={handleNoteDelete}
                onNoteEdit={handleNoteEdit}
              />
            ))}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App;
