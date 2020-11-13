import '@period-tracker-app/components/src/bootstrap'
import { AppRegistry, YellowBox } from 'react-native'
import { name as appName } from './app.json'
import App from '@period-tracker-app/components/src/components/App'

// ignore specific yellow box warnings
YellowBox.ignoreWarnings([
  'Require cycle:',
  'Warning: Async Storage has been extracted from react-native core',
])

AppRegistry.registerComponent(appName, () => App)
