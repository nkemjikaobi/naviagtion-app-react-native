import { StyleSheet, Text, View } from 'react-native';
import BagList from './components/BagList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BagDetails from './components/BagDetails';
import Userslists from './components/Users';
import Deals from './components/Deals';
import DealDetails from './components/DealDetails';

export default function App() {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	function BagStack() {
		return (
			<Stack.Navigator>
				<Stack.Screen name='BagList' component={BagList} />
				<Stack.Screen name='BagDetails' component={BagDetails} />
			</Stack.Navigator>
		);
	}

	function DealStack() {
		return (
			<Stack.Navigator>
				<Stack.Screen name='AllDeals' component={Deals} />
				<Stack.Screen name='DealDetails' component={DealDetails} />
			</Stack.Navigator>
		);
	}
	return (
		<NavigationContainer>
			<Tab.Navigator>
				<Tab.Screen name='Bags' component={BagStack} />
				<Tab.Screen name='Users' component={Userslists} />
				<Tab.Screen name='Deals' component={DealStack} />
			</Tab.Navigator>
		</NavigationContainer>
	);
}
