import React from 'react';
import Main from './components/Main/Main';
import './config/I18n/index';
import store from './config/Redux/Redux';
import { Provider } from 'react-redux';

function App() {
	return (
		<Provider store={store}>
			<div>
				<Main />
			</div>
		</Provider>
	);
}

export default App;
