import React from 'react';

import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreenStacks from './HomeStacks';
import MapScreenStacks from './MapStacks';
import QrScreenStacks from './QRStacks';
import GiftScreenStacks from './GiftStacks';

const NavigationStacks = createBottomTabNavigator({
    Home:{
        screen: HomeScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Inicio",
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    type="material-community"
                    name="home"
                    size={22}
                    color={tintColor}
                />
            )
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
                size={22}
                color={tintColor}
            />
            )
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
                size={22}
                color={tintColor}
            />
            )
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
                size={22}
                color={tintColor}
            />
            )
        })
    },


});

export default createAppContainer(NavigationStacks);


