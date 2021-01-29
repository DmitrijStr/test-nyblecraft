import React from 'react';

const Input = ({ children, onSubmit }) => {
	return (
		<div className='form-container'>
			<form className="form" method="GET" noValidate onSubmit={onSubmit}>
				{children}
				<button className="button form__button" type="submit">
					Save
				</button>
			</form>
		</div>
	)
}

export default Input;