import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon, Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import GiftScreen from '../screens/Gift/Gift';
import GiftDetail from '../screens/Gift/GiftDetail';
import GiftRedeemedOk from '../screens/Gift/GiftRedeemedOk';

import { createDrawerNavigator } from '@react-navigation/drawer';

const GiftScreenStacks = createStackNavigator({
    Gift: {
        screen: GiftScreen,
        navigationOptions: ({ navigation }) => ({
            header: () => <Header 
                                leftComponent={() => renderMenuIcon(navigation)} 
                                centerComponent={{ text: 'Reciclaje App', style: { color: '#fff' } }}
                                rightComponent={() => renderAccountIcon()}
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


export default GiftScreenStacks;