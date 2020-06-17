import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from "../screens/Account/Account";

import GreenPointUploadScreen1 from '../screens/Account/GreenPointUpload1';
import GreenPointUploadScreen2 from '../screens/Account/GreenPointUpload2';

import TakeAwayUpload1 from '../screens/Account/TakeAwayUpload1';
import TakeAwayUpload2 from '../screens/Account/TakeAwayUpload2';

const AccountScreenStacks = createStackNavigator({
    Account: {
        screen: AccountScreen,
        navigationOptions: () => ({
            title: "Mi cuenta"
        })
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

export default AccountScreenStacks;