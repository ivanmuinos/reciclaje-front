import { createStackNavigator } from 'react-navigation-stack';
import AccountScreen from "../screens/Account/Account";
import GreenPointUploadScreen1 from '../screens/Account/GreenPointUpload1';
import GreenPointUploadScreen2 from '../screens/Account/GreenPointUpload2';

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
    }
});

export default AccountScreenStacks;