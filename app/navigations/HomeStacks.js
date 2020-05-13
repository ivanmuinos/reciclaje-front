import React, { useState, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon, Header } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from "../screens/Home";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";

const HomeScreenStacks = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: () => ({
            header: () => <Header 
                                leftComponent={{ icon: 'menu', color: '#fff' }} 
                                centerComponent={{ text: 'Reciclaje App', style: { color: '#fff' } }}
                                rightComponent={() => renderAccountIcon()}
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
export default HomeScreenStacks;

