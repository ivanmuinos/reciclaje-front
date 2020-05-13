import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { Icon, Header } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import GiftScreen from "../screens/Gift";

const GiftScreenStacks = createStackNavigator({
    Gift: {
        screen: GiftScreen,
        navigationOptions: () => ({
            header: () => <Header 
                                leftComponent={{ icon: 'menu', color: '#fff' }} 
                                centerComponent={{ text: 'Reciclaje App', style: { color: '#fff' } }}
                                rightComponent={() => renderAccountIcon()}
                          />,
        })
    },
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

export default GiftScreenStacks;