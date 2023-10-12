import { useEffect, useState } from 'react';
import {
	FlatList,
	StyleSheet,
	Text,
	Image,
	View,
	ScrollView,
} from 'react-native';

export default function DealDetails({ route }) {
	const [deal, setdeal] = useState(null);

	useEffect(() => {
		const fetchDealDetail = async id => {
			fetch(`https://bakesaleforgood.com/api/deals/${id}`)
				.then(response => response.json()) // string -> json object
				.then(data => setdeal(data)) // array of deals
				.catch(error => console.log(error));
		};
		if (route.params.singleDeal.key)
			fetchDealDetail(route.params.singleDeal.key);
	}, [route]);

	return (
		<ScrollView style={styles.container}>
			<Image source={{ uri: deal?.media[0] }} style={styles.image} />
			<Text style={[styles.text, { fontStyle: 700, margin: 8 }]}>
				{deal?.title}
			</Text>
			<View
				style={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text style={[styles.text, { margin: 10, color: 'purple' }]}>
					In stock: {deal?.availableQuantity}
				</Text>
				<Text style={styles.text}>${deal?.price}</Text>
			</View>
			<Text
				style={[
					styles.text,
					{
						fontStyle: 'italic',
						fontSize: 14,
					},
				]}
			>
				{deal?.description}
			</Text>
			<Text
				style={[
					styles.text,
					{
						fontSize: 14,
						margin: 10,
					},
				]}
			>
				Donate to this charity: {deal?.charity?.name}
			</Text>
		</ScrollView>
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
		width: 350,
		height: 300,
		borderRadius: 7,
		marginBottom: 15,
	},
});
