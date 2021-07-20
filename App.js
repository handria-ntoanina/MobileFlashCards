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
import { primary, primaryDark, primaryText } from './utils/colors'
import Constants from 'expo-constants'

const AppStatusBar = ({ backgroundColor, ...props }) => {
  return (<View style={{ backgroundColor, height: Constants.statusBarHeight }}>
    <StatusBar backgroundColor={backgroundColor} {...props} />
  </View>)
}


const Stack = createStackNavigator()

const store = createStore(reducer, middleware)
export default function App() {
  const getScreenOptions = (title) => {
    return {
      title, headerTitleAlign: 'center',
      headerStyle: { backgroundColor: primary },
      headerTintColor: primaryText,
    }
  }

  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <AppStatusBar backgroundColor={primaryDark} />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="HomeTab" component={HomeTab} options={getScreenOptions('Flash Cards')} />
            <Stack.Screen name="DeckDetails" component={DeckDetails} options={getScreenOptions('Deck Details')} />
            <Stack.Screen name="AddCard" component={AddCard} options={getScreenOptions('Adding a Card')} />
            <Stack.Screen name="Quiz" component={Quiz} options={getScreenOptions('Running a Quiz')} />
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
