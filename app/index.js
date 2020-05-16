import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthNavigation from './navigations/AuthNavigation';
import AppNavigation from './navigations/AppNavigation';
import DrawerNavigation from './navigations/DrawerNavigation';

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigation,
    App: AppNavigation,

  },
  {
    initialRouteName: 'Auth'
  }
)

const AppContainer = createAppContainer(SwitchNavigator)

export default AppContainer