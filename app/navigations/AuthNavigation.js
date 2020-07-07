import { createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Account/Login';
import Register from '../screens/Account/Register';

const AuthNavigation = createStackNavigator(
    {
        Login: { 
            screen: Login,
            navigationOptions: () => ({
                cardStyle:{
                    backgroundColor: "white",
                }
            })
        },
        Register: { screen: Register }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none'
    }
)

export default AuthNavigation;