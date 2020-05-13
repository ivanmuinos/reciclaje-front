import { createStackNavigator } from 'react-navigation-stack';
import MapScreen from "../screens/Map";

const MapScreenStacks = createStackNavigator({
    Map: {
        screen: MapScreen,
        navigationOptions: () => ({
            title: "Map"
        })
    },
});

export default MapScreenStacks;