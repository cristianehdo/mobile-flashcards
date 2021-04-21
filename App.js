import React, { Component } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import { setLocalNotification } from './utils/helpers'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import NewDeck from './components/NewDeck'
import DecksList from './components/DecksList'
import Deck from './components/Deck'
import NewCard from './components/NewCard'
import Quiz from './components/Quiz'

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const MainStackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Decks" component={DecksList} />
      <Stack.Screen name="Deck" component={Deck} />
      <Stack.Screen name="NewCard" component={NewCard} />
      <Stack.Screen name="Quiz" component={Quiz} />
    </Stack.Navigator>
  )
}
class App extends Component{
  componentDidMount() {
    setLocalNotification()
  }
  render() {
    return (
      <Provider store={createStore(reducer, middleware)}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Decks" component={MainStackNavigation} />
            <Tab.Screen name="Add" component={NewDeck} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App
