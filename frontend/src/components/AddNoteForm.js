import React from 'react';
import Form from './Form'

const AddNoteForm = ({ onAddNote, onAddTags, tags }) => {

	const [noteName, setNoteName] = React.useState('');

	const handleAddNoteChange = (e) => {
		setNoteName(e.target.value);
	}


	function handleSubmit(e) {
		e.preventDefault();
		onAddTags({
			name: noteName.split(' ').filter(i => i.match(/#\S+/g)).map((el) => el.slice(1))

		}
		)
		onAddNote({
			name: noteName.replace(/#/g, ''),
		});
	}

	return (
		<Form onSubmit={handleSubmit} >
			<input id='addNote' type="text" className="form__input" placeholder="Введите заметку" autoComplete='off'
				name="addNote" required minLength="1" maxLength="30" onChange={handleAddNoteChange} value={noteName} />
		</Form>
	)
}

export default AddNoteForm;