import React from 'react';

import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet } from 'react-native';
import HomeScreenStacks from './HomeStacks';
import MapScreenStacks from './MapStacks';
import QrScreenStacks from './QRStacks';
import GiftScreenStacks from './GiftStacks';
import AccountScreenStacks from './AccountStacks';


const NavigationStacks = createBottomTabNavigator({
    Home:{
        screen: HomeScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Informacion",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="home"
                    size={20}
                    color={tintColor}
                />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
            },
        })
    },
    Map:{
        screen: MapScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Puntos Verdes",
            tabBarIcon: ({tintColor}) => (
                <Icon
                type="font-awesome"
                name="map-marker"
                size={20}
                color={tintColor}
            />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
            },
        })
    },
    Qr:{
        screen: QrScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "QR",
            tabBarIcon: ({tintColor}) => (
                <Icon
                type="font-awesome"
                name="qrcode"
                size={20}
                color={tintColor}
            />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
            },
        })
    },
    Gift:{
        screen: GiftScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Premios",
            tabBarIcon: ({tintColor}) => (
                <Icon
                type="font-awesome"
                name="gift"
                size={20}
                color={tintColor}
            />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
            },
        })
    },
    Account:{
        screen: AccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Mi Cuenta",
            tabBarIcon: ({tintColor}) => (
                <Icon
                type="font-awesome"
                name="user"
                size={20}
                color={tintColor}
            />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
            },
        })
    },


});


export default createAppContainer(NavigationStacks);


