import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './main.js';

render((
	<BrowserRouter>
		<Main />
	</BrowserRouter>
), document.getElementById('app'));