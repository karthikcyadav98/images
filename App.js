import React from 'react';
import {View, Text} from 'react-native';
import HomePage from './src/screens/HomePage';

import GlobalProvider from './src/context/GlobalState';

const App = () => {
	return (
		<GlobalProvider>
			<HomePage />
		</GlobalProvider>
	);
};

export default App;
