import React from 'react';
import ReactDOM from 'react-dom';
import './dist/index.css';
import Calculator from './components/Calculator';

ReactDOM.render(
	<React.StrictMode>
		<Calculator />
	</React.StrictMode>,
	document.getElementById('app')
);
