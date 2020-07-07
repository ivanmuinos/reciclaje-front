
import React, { useState, useEffect } from 'react';
import { Icon, Header, Image } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet,TouchableOpacity } from 'react-native';
import GiftScreen from '../screens/Gift/Gift';
import GiftDetail from '../screens/Gift/GiftDetail';
import GiftRedeemedOk from '../screens/Gift/GiftRedeemedOk';

import RenderLeft from '../components/Header/RenderLeft';
import RenderRight from '../components/Header/RenderRight';

import { createDrawerNavigator } from '@react-navigation/drawer';

const GiftScreenStacks = createStackNavigator({
    Gift: {
        screen: GiftScreen,
        navigationOptions: ({navigation}) => ({
            header: (navigation) => <Header
                containerStyle={styles.headerContainer}
                rightComponent={<RenderRight navigation={navigation}/>}
                leftComponent={<RenderLeft navigation={navigation}/>}
            />,
            cardStyle: {
                backgroundColor: "white",
            }
        })
        
    },
    GiftDetail: {
        screen: GiftDetail,
        navigationOptions: () => ({
            title: "Detalle",
        })
    },
    GiftRedeemedOk: {
        screen: GiftRedeemedOk,
        navigationOptions: () => ({
            title: "Canje exitoso",
            cardStyle: {
                backgroundColor: "white",
            }
        })
     }
});


const renderMenuIcon = (navigation) => {
    return (
        <TouchableOpacity onPress={ () => navigation.openDrawer()}>
                <Icon
                    type="material-community"
                    name="menu"
                    size={22}
                    color="#fff"
                />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 80,
        backgroundColor: "white",
    },
    containerLeftHeader: {
        flexDirection: 'row',
        marginBottom: 20,
    },

})

export default GiftScreenStacks;