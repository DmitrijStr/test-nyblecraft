import React from 'react';

const Button = ({onButtonClick, buttonClassName, title}) => {
	return <button className={buttonClassName} onClick={onButtonClick}>{title}</button>
}

export default Button;
