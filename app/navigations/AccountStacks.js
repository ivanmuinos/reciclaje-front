import React, { useState, useEffect } from 'react';
import { Icon, Header, Image } from 'react-native-elements';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from "../screens/Account/Account";

import GreenPointUploadScreen1 from '../screens/Account/GreenPointUpload1';
import GreenPointUploadScreen2 from '../screens/Account/GreenPointUpload2';

import TakeAwayUpload1 from '../screens/Account/TakeAwayUpload1';
import TakeAwayUpload2 from '../screens/Account/TakeAwayUpload2';

import RenderLeft from '../components/Header/RenderLeft';
import RenderRight from '../components/Header/RenderRight';

const AccountScreenStacks = createStackNavigator({
    Account: {
        screen: AccountScreen,
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
    GreenPointUpload1: {
        screen: GreenPointUploadScreen1,
        navigationOptions: () => ({
            title: "Punto verde"
        })
    },
    GreenPointUpload2: {
        screen: GreenPointUploadScreen2,
        navigationOptions: () => ({
            title: "Punto verde"
        })
    },
    TakeAwayUpload1: {
        screen: TakeAwayUpload1,
        navigationOptions: () => ({
            title: "Take Away"
        })
    },
    TakeAwayUpload2: {
        screen: TakeAwayUpload2,
        navigationOptions: () => ({
            title: "Take Away"
        })
    }
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

export default AccountScreenStacks;