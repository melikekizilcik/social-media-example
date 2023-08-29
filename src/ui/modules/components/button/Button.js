import React from "react";

import "./button.css";

function Button(props) {
	const { children, status, variant } = props;

	return (
		<button {...props} className={`custom-btn ${status} ${variant}`}>
			{children}
		</button>
	);
}

export default Button;
