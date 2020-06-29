import React from 'react'
import { AppProvider } from './AppProvider'
import AppNavigator from '../navigators/AppNavigator'
import { configureStore } from '../redux/store'
import { setTopLevelNavigator } from '../services/navigationService'
import { notificationListener } from '../services/notifications'

const { persistor, store } = configureStore()

export default function App() {
  React.useEffect(() => {
    notificationListener()
  }, [])

  return (
    <AppProvider store={store} persistor={persistor}>
      <AppNavigator
        ref={navigatorRef => {
          setTopLevelNavigator(navigatorRef)
        }}
        key="app-navigator"
      />
    </AppProvider>
  )
}
