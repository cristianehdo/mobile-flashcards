import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NewDeck from './components/NewDeck'
import DecksList from './components/DecksList'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Decks" component={DecksList} />
          <Tab.Screen name="Add" component={NewDeck} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}


