import React from 'react';

const Tag = ({ tag, onTagClick }) => {

	const handleTagClick = () => {
		onTagClick(tag.title)
	}

	return (
		<button className='button tags__button' onClick={handleTagClick}>
			<p className='tags__title'>{tag.title}</p>

		</button>
	)
}

export default Tag;
