import React, { useState, useEffect } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from "../screens/Home/Home";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";

const HomeScreenStacks = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: () => <Header 
                                containerStyle={styles.headerContainer}
                                centerComponent={{ text: '1200 Puntos', style: { color: '#fff', fontWeight: "bold", fontSize: 17 } }}
                          />,
        })
    },

},
{
    initialRouteName: 'Home'
}

);

const renderAccountIcon = () => {
    return (
        <TouchableOpacity onPress={ () => {console.log('Boton mi cuenta presionado')}}>
                <Icon
                    type="material-community"
                    name="account"
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

export default HomeScreenStacks;

