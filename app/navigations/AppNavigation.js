import React from 'react';

import { Icon, Image } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet  } from 'react-native';
import HomeScreenStacks from './HomeStacks';
import MapScreenStacks from './MapStacks';
import QrScreenStacks from './QRStacks';
import GiftScreenStacks from './GiftStacks';
import AccountScreenStacks from './AccountStacks';

const width = 35;
const height = 35;

const NavigationStacks = createBottomTabNavigator({
    Home: {
        screen: HomeScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Información",
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/img/navbar/info-icon.png')}
                    style={{ width: width, height: height, tintColor: tintColor }}
                />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
                style: styles.navbar,

            },
        })
    },
    Map: {
        screen: MapScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Puntos Verdes",
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/img/navbar/point-icon.png')}
                    style={{ width: width, height: height, tintColor: tintColor }}
                />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
                style: styles.navbar,
            },
        })
    },
    Qr: {
        screen: QrScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "QR",
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/img/navbar/qr-icon.png')}
                    style={{ width: width, height: height, tintColor: tintColor }}
                />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
                style: styles.navbar,
            },
        })
    },
    Gift: {
        screen: GiftScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Premios",
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/img/navbar/gift-icon.png')}
                    style={{ width: width, height: height, tintColor: tintColor }}
                />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
                style: {
                    height: 60,
                }
            },
        })
    },
    Account: {
        screen: AccountScreenStacks,
        navigationOptions: () => ({
            tabBarLabel: "Mi Cuenta",
            tabBarIcon: ({ tintColor }) => (
                <Image
                    source={require('../../assets/img/navbar/account-icon.png')}
                    style={{ width: width, height: height, tintColor: tintColor }}
                />
            ),
            tabBarOptions: {
                activeTintColor: '#49AD26',
                style: styles.navbar,
            },
        })
    },


});


const styles = StyleSheet.create({
    navbar:{
        height: 60,
        backgroundColor: "white",
        borderTopColor: "white",
        shadowRadius: 2,
        shadowOffset: {
          width: 0,
          height: -10,
        },
        shadowColor: '#000000',
        elevation: 10,
    }
})
export default createAppContainer(NavigationStacks);


