import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DeckScreen from './screens/DeckScreen';

const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DeckScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Stack);
