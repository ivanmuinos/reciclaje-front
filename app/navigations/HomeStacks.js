import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Header, Image } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from "../screens/Home/Home";
import LoginScreen from "../screens/Account/Login";
import RegisterScreen from "../screens/Account/Register";

import RecycleScreen from "../screens/Home/Learning/Recycle";
import EnviromentScreen from "../screens/Home/Learning/Enviroment";
import GreenPointScreen from "../screens/Home/Learning/GreenPoint";
import RecycleProcessScreen from "../screens/Home/Learning/RecycleProcess";
import PlasticReduction from "../screens/Home/Learning/PlasticReduction";

import RenderLeft from '../components/Header/RenderLeft';
import RenderRight from '../components/Header/RenderRight';

const HomeScreenStacks = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: ({navigation}) => ({
            header: (navigation) => <Header
                containerStyle={styles.headerContainer}
                rightComponent={<RenderRight navigation={navigation}/>}
                leftComponent={<RenderLeft navigation={navigation}/>}
            />,
            cardStyle: {
                backgroundColor: "white",
            }
        }),

    },
    Recycle: {
        screen: RecycleScreen,
        navigationOptions: () => ({
            title: "Reciclaje en casa"
        })
    },
    Enviroment: {
        screen: EnviromentScreen,
        navigationOptions: () => ({
            title: "Medio Ambiente"
        })
    },
    GreenPoint: {
        screen: GreenPointScreen,
        navigationOptions: () => ({
            title: "Puntos Verdes"
        })
    },
    RecycleProcess: {
        screen: RecycleProcessScreen,
        navigationOptions: () => ({
            title: "Proceso de reciclaje"
        })
    },
    PlasticReduction: {
        screen: PlasticReduction,
        navigationOptions: () => ({
            title: "Reducción de plástico"
        })
    },

},
    {
        initialRouteName: 'Home'
    }

);

const renderLeft = () => {


}

const renderRight = () => {
 
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
    img: {
        borderRadius: 35,
        borderWidth: 2,
        padding: 12,
        borderColor: "white",
        backgroundColor: "white",
    },
    hello: {
        marginTop: "15%",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 20,
        color: "gray",
    },
    name: {
        marginTop: "15%",
        marginLeft: 5,
        fontSize: 20,
        fontWeight: "bold",
        color: "#A6CB12",
    },
    points: {
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 35,
        padding: 10,
        borderColor: "white",
        marginRight: 20,
    }

})

export default HomeScreenStacks;

