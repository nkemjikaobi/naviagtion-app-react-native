import { useEffect, useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	Image,
	View,
	TouchableOpacity,
} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default function Deals(props) {
	const [deals, setdeals] = useState([]);

	useEffect(() => {
		const fetchDeals = async () => {
			await fetch('https://bakesaleforgood.com/api/deals') // promis
				.then(response => response.json()) // string -> json object
				.then(data => setdeals(data)) // array of deals
				.catch(error => console.log(error));
		};
		fetchDeals();
	}, []);
	renderItem = data => {
		return (
			<TouchableOpacity
				onPress={() =>
					props.navigation.navigate('DealDetails', {
						singleDeal: data.item,
					})
				}
			>
				<Card>
					<View style={styles.user}>
						<Image
							style={styles.image}
							resizeMode='cover'
							source={{ uri: data.item.media[0] }}
						/>
						<Text
							style={[
								styles.name,
								{
									marginTop: 10,
									marginBottom: 10,
								},
							]}
						>
							{data.item.title}
						</Text>
						<Text style={styles.text}>{data.item.price}</Text>
					</View>
				</Card>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.container}>
			<FlatList data={deals} renderItem={item => this.renderItem(item)} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		marginLeft: 20,
		marginRight: 10,
		marginTop: 50,
	},
	text: {
		fontSize: 20,
	},
	image: {
		width: 300,
		height: 300,
	},
});
