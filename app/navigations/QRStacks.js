import { createStackNavigator } from 'react-navigation-stack';
import QRScreen from "../screens/QR";

const QRScreenStacks = createStackNavigator({
    QR: {
        screen: QRScreen,
        navigationOptions: () => ({
            title: "QR"
        })
    },
});

export default QRScreenStacks;