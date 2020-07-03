import { createStackNavigator } from 'react-navigation-stack';
import QRScreen from "../screens/QR/QR";
import PointsObtainedScreen from '../screens/QR/PointsObtained';

const QRScreenStacks = createStackNavigator({
    QR: {
        screen: QRScreen,
        navigationOptions: () => ({
            title: "QR"
        })
    },
    PointsObtained: {
        screen: PointsObtainedScreen,
        navigationOptions: () => ({
            title: "Puntos obtenidos correctamente"
        })
    },
});

export default QRScreenStacks;