import './src/styles/page.scss';

import React from 'react';
import ReactDOM from 'react-dom';

import Wizard from './src/components/wizard/Wizard'

class Layout extends React.Component {
	render() {
		return (
			<div>
				<Wizard />
			</div>
		)
	}
}

const app = document.getElementById('app');
ReactDOM.render(<Layout />, app);
