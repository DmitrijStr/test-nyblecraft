import React from 'react';
import Form from './Form'

const EditNoteForm = ({ note, isOpen, onClose, onEditNote }) => {

	const [updatedName, setUpdatedName] = React.useState("") 

	function handleSubmit(e) {
		e.preventDefault();
		onEditNote({
			id: note._id,
			name: updatedName
		})
	}

	function handleNoteChange(e) {
		setUpdatedName(e.target.value)
	}

	return (
		<div className={`form_type_editNote ${isOpen && 'form_type_open'}`}>
			<Form onSubmit={handleSubmit}>
				<input id='editNote' type="text" className="editNote" autoComplete='off'
					name="editNote" required minLength="1" maxLength="30" defaultValue={note.name} onChange={handleNoteChange} />
			</Form>
			<button className='button' type="button" onClick={onClose}>Close
			</button>
		</div>
	)
}

export default EditNoteForm;