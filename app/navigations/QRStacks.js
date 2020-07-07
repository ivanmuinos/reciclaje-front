import React, { useState, useEffect } from 'react';
import { Icon, Header, Image } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import QRScreen from "../screens/QR/QR";
import PointsObtainedScreen from '../screens/QR/PointsObtained';

import RenderLeft from '../components/Header/RenderLeft';
import RenderRight from '../components/Header/RenderRight';

const QRScreenStacks = createStackNavigator({
    QR: {
        screen: QRScreen,
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
    PointsObtained: {
        screen: PointsObtainedScreen,
        navigationOptions: () => ({
            title: "Puntos obtenidos correctamente",
            cardStyle: {
                backgroundColor: "white",
            }
        })
    },
});
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

export default QRScreenStacks;