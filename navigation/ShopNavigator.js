import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';

import ProductOverviewScreen, { screenOptions } from '../screens/shop/ProductOverviewScreen';
import Colors from '../constants/Colors';
import { Platform, SafeAreaView, View, Button, Text } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import ProductDetailsScreen, { productDetailsScreenOptions } from '../screens/shop/ProductDetailsScreen';
import CartScreen, { cartScreenOptions } from '../screens/shop/CartScreen';
import OrderScreen, { ordersScreenOptions } from '../screens/shop/OrdersScreen';
import UserProductsScreen, { userProductsScreenOptions } from '../screens/user/UserProductsScreen';
import EditProductScreen, { editScreenOptions } from '../screens/user/EditProductScreen';
import AuthScreen, { authScreenOptions } from '../screens/user/AuthScreen';
import StartupScreen from '../screens/StartupScreen';
import { useDispatch } from 'react-redux';
import { logout } from '../store/actions/auth';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const defaltNavOptions = {
	headerStyle          : {
		backgroundColor :

				Platform.OS === 'android' ? Colors.primary :
				''
	},
	headerBackTitleStyle : {
		fontFamily : 'ubuntu'
	},
	headerTitleStyle     : {
		fontFamily : 'ubuntu-bold'
	},
	headerTintColor      :

			Platform.OS === 'android' ? 'white' :
			Colors.primary
};

const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
	return (
		<ProductsStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<ProductsStackNavigator.Screen
				name="ProductsOverview"
				component={ProductOverviewScreen}
				options={screenOptions}
			/>
			<ProductsStackNavigator.Screen
				name="ProductDetail"
				component={ProductDetailsScreen}
				options={productDetailsScreenOptions}
			/>
			<ProductsStackNavigator.Screen name="Cart" component={CartScreen} options={cartScreenOptions} />
		</ProductsStackNavigator.Navigator>
	);
};

// const ProductsNavigatorE = createStackNavigator(
// 	{
// 		ProductsOverview : ProductOverviewScreen,
// 		ProductDetail    : ProductDetailsScreen,
// 		Cart             : CartScreen
// 	},
// 	{
// 		navigationOptions        : {
// 			drawerIcon : (drawerConfig) => (
// 				<Ionicons
// 					name={

// 							Platform.OS === 'android' ? 'md-cart' :
// 							'ios-cart'
// 					}
// 					color={drawerConfig.tintColor}
// 					size={23}
// 				/>
// 			)
// 		},
// 		defaultNavigationOptions : defaltNavOptions
// 	}
// );

const OrdersStackNavigator = createStackNavigator();

export const OrdersNavigator = () => {
	return (
		<OrdersStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<OrdersStackNavigator.Screen name="Orders" component={OrderScreen} options={ordersScreenOptions} />
		</OrdersStackNavigator.Navigator>
	);
};

// const OrdersNavigator = createStackNavigator(
// 	{
// 		Orders : OrderScreen
// 	},
// 	{
// 		navigationOptions        : {
// 			drawerIcon : (drawerConfig) => (
// 				<Ionicons
// 					name={

// 							Platform.OS === 'android' ? 'md-list' :
// 							'ios-list'
// 					}
// 					color={drawerConfig.tintColor}
// 					size={23}
// 				/>
// 			)
// 		},
// 		defaultNavigationOptions : defaltNavOptions
// 	}
// );

const AdminStackNavigator = createStackNavigator();

export const AdminNavigator = () => {
	return (
		<AdminStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<AdminStackNavigator.Screen
				name="UserProducts"
				component={UserProductsScreen}
				options={userProductsScreenOptions}
			/>
			<AdminStackNavigator.Screen name="EditProduct" component={EditProductScreen} options={editScreenOptions} />
		</AdminStackNavigator.Navigator>
	);
};

// const AdminNavigator = createStackNavigator(
// 	{
// 		UserProducts : UserProductsScreen,
// 		EditProduct  : EditProductScreen
// 	},
// 	{
// 		navigationOptions        : {
// 			drawerIcon : (drawerConfig) => (
// 				<Ionicons
// 					name={

// 							Platform.OS === 'android' ? 'md-create' :
// 							'ios-create'
// 					}
// 					color={drawerConfig.tintColor}
// 					size={23}
// 				/>
// 			)
// 		},
// 		defaultNavigationOptions : defaltNavOptions
// 	}
// );

const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
	const dispatch = useDispatch();
	return (
		<ShopDrawerNavigator.Navigator
			drawerContent={(props) => {
				return (
					<View style={{ flex: 1, paddingTop: 30 }}>
						<SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
							<DrawerItemList {...props} />
							{/* <View > */}
							<TouchableWithoutFeedback
								style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10 }}
								onPress={() => {
									dispatch(logout());
									// props.navigation.navigate('Auth');
								}}
							>
								<AntDesign name="logout" size={24} color="black" style={{ marginLeft: 15 }} />
								<Text style={{ fontFamily: 'ubuntu-bold', marginLeft: 28 }}>Logout</Text>
							</TouchableWithoutFeedback>
						</SafeAreaView>
					</View>
				);
			}}
			drawerContentOptions={{
				activeTintColor : Colors.primary
			}}
		>
			<ShopDrawerNavigator.Screen
				name="Products"
				component={ProductsNavigator}
				options={{
					drawerIcon : (props) => (
						<Ionicons
							name={

									Platform.OS === 'android' ? 'md-cart' :
									'ios-cart'
							}
							color={props.color}
							size={23}
						/>
					)
				}}
			/>
			<ShopDrawerNavigator.Screen
				name="Orders"
				component={OrdersNavigator}
				options={{
					drawerIcon : (props) => (
						<Ionicons
							name={

									Platform.OS === 'android' ? 'md-list' :
									'ios-list'
							}
							color={props.color}
							size={23}
						/>
					)
				}}
			/>
			<ShopDrawerNavigator.Screen
				name="Admin"
				component={AdminNavigator}
				options={{
					drawerIcon : (props) => (
						<Ionicons
							name={

									Platform.OS === 'android' ? 'md-create' :
									'ios-create'
							}
							color={props.color}
							size={23}
						/>
					)
				}}
			/>
		</ShopDrawerNavigator.Navigator>
	);
};
// const ShopNavigator = createDrawerNavigator(
// 	{
// 		Products : ProductsNavigator,
// 		Orders   : OrdersNavigator,
// 		Admin    : AdminNavigator
// 	},
// 	{
// 		contentOptions   : {
// 			activeTintColor : Colors.primary
// 		},
// 		contentComponent : (props) => {
// 			const dispatch = useDispatch();
// 			return (
// 				<View style={{ flex: 1, paddingTop: 30 }}>
// 					<SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
// 						<DrawerNavigatorItems {...props} />
// 						{/* <View > */}
// 						<TouchableWithoutFeedback
// 							style={{ alignItems: 'center', flexDirection: 'row', marginTop: 10 }}
// 							onPress={() => {
// 								dispatch(logout());
// 								props.navigation.navigate('Auth');
// 							}}
// 						>
// 							<AntDesign name="logout" size={24} color="black" style={{ marginLeft: 15 }} />
// 							<Text style={{ fontFamily: 'ubuntu-bold', marginLeft: 28 }}>Logout</Text>
// 						</TouchableWithoutFeedback>
// 					</SafeAreaView>
// 				</View>
// 			);
// 		}
// 	}
// );

const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
	return (
		<AuthStackNavigator.Navigator screenOptions={defaltNavOptions}>
			<AuthStackNavigator.Screen name="Auth" component={AuthScreen} options={authScreenOptions} />
		</AuthStackNavigator.Navigator>
	);
};

// const AuthNavigator = createStackNavigator(
// 	{
// 		Auth : AuthScreen
// 	},
// 	{
// 		defaultNavigationOptions : defaltNavOptions
// 	}
// );

// const MainNavigator = createSwitchNavigator({
// 	Startup : StartupScreen,
// 	Auth    : AuthNavigator,
// 	Shop    : ShopNavigator
// });

// export default createAppContainer(MainNavigator);
