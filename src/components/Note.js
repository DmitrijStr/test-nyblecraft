import React from 'react';
import Button from './Button';

const Note = ({note, onNoteDelete, onNoteEdit}) => {

	const handleDeleteClick = () => {
		onNoteDelete(note._id);
	}

	const handleEditClick = () => {
		onNoteEdit(note);
	}

	return <div className='note'>
		<span className='note__text'>{note.name}</span>
		<span className='note__tags'>{note.tags}</span>

		<Button onButtonClick={handleDeleteClick} title='Delete' buttonClassName='button note__button'></Button>
		<Button onButtonClick={handleEditClick} title='Edit' buttonClassName='button note__button'></Button>
	</div>
}

export default Note;
