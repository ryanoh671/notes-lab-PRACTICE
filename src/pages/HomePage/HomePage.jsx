import { useState } from 'react';

export default function HomePage({notes, addNote}) {
  const [newNote, setNewNote] = useState({
    text: ''
  });

  function handleChange(evt) {
    const newNoteData = {...newNote, [evt.target.name]: evt.target.value}
    setNewNote(newNoteData);
  }

  function handleAddNote(evt) {
    evt.preventDefault();
    addNote(newNote);
    setNewNote({text: ''})
  }

  return (
    <>
      <h1>HomePage</h1>
      <form onSubmit={handleAddNote}>
        <label>Add Note Here</label>
        <input type="text" name="text" value={newNote.text} onChange={handleChange} placeholder="Add Notes Here" />
        <button type="submit">ADD NOTE</button>
      </form>
      <ul>
            {notes.map(n => (<li key={n._id}>{n.text}</li>))}
      </ul>
    </>
  );
}