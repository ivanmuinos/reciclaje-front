import { createStackNavigator } from 'react-navigation-stack';
import Account from "../screens/Account/Account";

const AccountScreenStacks = createStackNavigator({
    Account: {
        screen: Account,
        navigationOptions: () => ({
            title: "Mi cuenta"
        })
    },
});

export default AccountScreenStacks;