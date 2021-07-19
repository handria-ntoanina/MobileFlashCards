import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import middleware from './middleware'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeTab from './components/HomeTab'
import DeckDetails from './components/DeckDetails'
import AddCard from './components/AddCard'
import Quiz from './components/Quiz'
import { primaryDark } from './utils/colors'

const Stack = createStackNavigator()

const store = createStore(reducer, middleware)
export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={primaryDark} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeTab" component={HomeTab} options={{headerShown: false}}/>
            <Stack.Screen name="DeckDetails" component={DeckDetails}/>
            <Stack.Screen name="AddCard" component={AddCard}/>
            <Stack.Screen name="Quiz" component={Quiz}/>
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
