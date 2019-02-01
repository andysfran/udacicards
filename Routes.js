import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import DeckScreen from './screens/DeckScreen';
import NewDeckScreen from './screens/NewDeck';
import NewQuestionScreen from './screens/NewQuestion';
import QuizScreen from './screens/QuestionsScreen';

const Stack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Details: {
      screen: DeckScreen
    },
    NewDeck: {
      screen: NewDeckScreen
    },
    NewQuestion: {
      screen: NewQuestionScreen
    },
    Quiz: {
      screen: QuizScreen
    }
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(Stack);
