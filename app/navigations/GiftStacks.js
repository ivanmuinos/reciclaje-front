import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {  Icon, Header } from 'react-native-elements';
import { StyleSheet,TouchableOpacity } from 'react-native';
import GiftScreen from '../screens/Gift/Gift';
import GiftDetail from '../screens/Gift/GiftDetail';
import GiftRedeemedOk from '../screens/Gift/GiftRedeemedOk';

import { createDrawerNavigator } from '@react-navigation/drawer';

const GiftScreenStacks = createStackNavigator({
    Gift: {
        screen: GiftScreen,
        navigationOptions: ({ navigation }) => ({
            header: () => <Header 
                                containerStyle={styles.headerContainer}
                                centerComponent={{ text: '1500 Hojas', style: { color: '#fff', fontWeight: "bold", fontSize: 17 } }}
                          />,
        })
        
    },
    GiftDetail: {
        screen: GiftDetail,
        navigationOptions: () => ({
            title: "Detalle"
        })
    },
    GiftRedeemedOk: {
        screen: GiftRedeemedOk,
        navigationOptions: () => ({
            title: "Canje exitoso"
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
    headerContainer:{
        shadowOffset: {
            height: 1,
            width: 1,
        },
        shadowOpacity: 0.5,
        backgroundColor: "#49AD26"
        
    }
    
})

export default GiftScreenStacks;