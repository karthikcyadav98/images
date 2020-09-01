import React, {useContext, useState, useEffect} from 'react';
import {GlobalContext} from '../context/GlobalState';
import {SafeAreaView, FlatList} from 'react-native';
import {Card, Paragraph, Searchbar} from 'react-native-paper';

const HomePage = () => {
	const {images} = useContext(GlobalContext);

	const [searchText, setSearchText] = useState('');
	const [imageData, setImageData] = useState(images);

	console.log('akjd', images);

	const onChangeSearch = text => {
		console.log('ajhagdjhagjd', text);
		setSearchText(text);
		setImageData(
			images.filter(item =>
				Object.keys(item.name).some(
					k =>
						item.name.toLowerCase().includes(text.toLowerCase()) ||
						item.location.toLowerCase().includes(text.toLowerCase())
				)
			)
		);
	};

	return (
		<SafeAreaView>
			<Searchbar
				onChangeText={e => onChangeSearch(e)}
				// value={searchQuery}
				placeholder="Search"
			/>
			<FlatList
				data={imageData}
				keyExtractor={item => item.id}
				renderItem={({item}) => (
					<Card>
						<Card.Cover source={{uri: item.path}} />
						<Card.Title title={item.name} subtitle={item.frecipecode} />
						<Card.Content>
							<Paragraph>Location: {item.location}</Paragraph>
						</Card.Content>
					</Card>
				)}
			/>
		</SafeAreaView>
	);
};

export default HomePage;
