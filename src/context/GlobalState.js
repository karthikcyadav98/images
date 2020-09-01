import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initState = {
	images: [
		{
			id: '1',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-great-wall-of-china.jpg.rend.hgtvcom.616.462.suffix/1491581549051.jpeg',
			name: 'Great Wall of China',
			location: 'China'
		},
		{
			id: '2',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-christ-the-redeemer.jpg.rend.hgtvcom.616.462.suffix/1491581548898.jpeg',
			name: 'Christ the Redeemer',
			location: 'Brazil'
		},
		{
			id: '3',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-machu-picchu.jpg.rend.hgtvcom.616.462.suffix/1491581548990.jpeg',
			name: 'Machu Picchu',
			location: 'Latin America'
		},
		{
			id: '4',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-chichen-itza.jpg.rend.hgtvcom.616.462.suffix/1491581548887.jpeg',
			name: 'Chichen Itza',
			location: 'Mexico'
		},
		{
			id: '5',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-roman-coloesseum.jpg.rend.hgtvcom.616.462.suffix/1491581548881.jpeg',
			name: 'The Roman Colosseum',
			location: 'Rome'
		},
		{
			id: '6',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-taj-mahal.jpg.rend.hgtvcom.616.462.suffix/1491581548979.jpeg',
			name: 'Taj Mahal',
			location: 'India'
		},
		{
			id: '7',
			path:
				'https://travel.home.sndimg.com/content/dam/images/travel/fullset/2015/10/12/new-seven-wonders-petra.jpg.rend.hgtvcom.616.462.suffix/1491581549062.jpeg',
			name: 'Petra',
			location: 'Jordan'
		}
	]
};

export const GlobalContext = createContext(initState);

const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	return <GlobalContext.Provider value={{images: state.images}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
