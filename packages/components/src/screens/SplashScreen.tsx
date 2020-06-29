import React from 'react'
import { BackgroundTheme } from '../components/layout/BackgroundTheme'
import { PageContainer } from '../components/layout/PageContainer'
import { assets } from '../assets/index'
import styled from 'styled-components/native'
import { useSelector, useDispatch } from 'react-redux'
import * as selectors from '../redux/selectors'
import * as actions from '../redux/actions'
import { navigateAndReset } from '../services/navigationService'
import { Animated, Easing } from 'react-native'
import {
  createNotificationChannel,
  setScheduledNotification,
  cancelAllScheduledNotifications,
} from '../services/notifications'
import moment from 'moment'
import { translate } from '../i18n'
import firebase from 'react-native-firebase'
import DeviceInfo from 'react-native-device-info'
import { useAlert } from '../components/context/AlertContext'
import { httpClient } from '../services/HttpClient'

export function SplashScreen() {
  const dispatch = useDispatch()
  const user = useSelector(selectors.currentUserSelector)
  const Alert = useAlert()

  const locale = useSelector(selectors.currentLocaleSelector)
  const hasOpened = useSelector(selectors.hasOpenedSelector)
  const currentAppVersion = useSelector(selectors.currentAppVersion)
  const currentFirebaseToken = useSelector(selectors.currentFirebaseToken)
  const hasPasswordRequestOn = useSelector(selectors.isLoginPasswordActiveSelector)
  const [animatedValue] = React.useState(new Animated.Value(0))

  async function syncAllNotifications() {
    const now = moment()
    await cancelAllScheduledNotifications()
    await setScheduledNotification({
      time: now.clone().add(7, 'days'),
      title: translate('notification_1_title'),
      body: translate('notification_1_body'),
    })
    await setScheduledNotification({
      time: now.clone().add(14, 'days'),
      title: translate('notification_2_title'),
      body: translate('notification_2_body'),
    })
    await setScheduledNotification({
      time: now.clone().add(21, 'days'),
      title: translate('notification_3_title'),
      body: translate('notification_3_body'),
    })
    await setScheduledNotification({
      time: now.clone().add(30, 'days'),
      title: translate('notification_4_title'),
      body: translate('notification_4_body'),
    })
    await setScheduledNotification({
      time: now.clone().add(60, 'days'),
      title: translate('notification_5_title'),
      body: translate('notification_5_body'),
    })
    await setScheduledNotification({
      time: now.clone().add(90, 'days'),
      title: translate('notification_6_title'),
      body: translate('notification_6_body'),
    })
  }

  async function checkForPermanentAlerts() {
    const versionName = DeviceInfo.getVersion()
    try {
      const { message = '', isPermanent = false } = await httpClient.getPermanentAlert(
        versionName,
        locale,
        user,
      )
      if (message !== '') {
        Alert.showDissolveAlert(message, isPermanent)
      }
    } catch {
      // do nothing
    }
  }

  React.useEffect(() => {
    checkForPermanentAlerts()
    createNotificationChannel()
    syncAllNotifications()
    firebase.messaging().unsubscribeFromTopic('oky_en_notifications')
    firebase.messaging().unsubscribeFromTopic('oky_id_notifications')
    firebase.messaging().unsubscribeFromTopic('oky_mn_notifications')
    firebase.messaging().subscribeToTopic(`oky_${locale}_notifications`)
    if (currentAppVersion !== DeviceInfo.getVersion()) {
      dispatch(actions.setUpdatedVersion())
    }
    if (currentFirebaseToken === null) {
      dispatch(actions.requestStoreFirebaseKey())
    }
    Spin()
    requestAnimationFrame(() => {
      if (!hasOpened) {
        navigateAndReset('OnboardingScreen', null)
        return
      }
      if (user) {
        if (hasPasswordRequestOn) {
          navigateAndReset('PasswordRequestScreen', null)
          return
        }
        navigateAndReset('MainStack', null)
        return
      }
      navigateAndReset('LoginStack', null)
    })

    return () => {
      animatedValue.stopAnimation()
    }
  }, [])

  const Spin = () => {
    Animated.timing(animatedValue, {
      duration: 50000,
      toValue: 36000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start()
  }

  const rotation = animatedValue.interpolate({
    inputRange: [0, 36000],
    outputRange: ['0deg', '36000deg'],
  })

  return (
    <BackgroundTheme>
      <PageContainer>
        <Container>
          <Face resizeMode="contain" source={assets.static.spin_load_face} />
          <AnimatedContainer
            style={{
              transform: [{ rotate: rotation }],
            }}
          >
            <Spinner resizeMode="contain" source={assets.static.spin_load_circle} />
          </AnimatedContainer>
        </Container>
      </PageContainer>
    </BackgroundTheme>
  )
}

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Face = styled.Image`
  height: 120;
  width: 120;
  align-self: center;
`
const Spinner = styled.Image`
  height: 123;
  width: 123;
`

const AnimatedContainer = styled(Animated.View)`
  height: 123;
  width: 123;
  position: absolute;
  align-self: center;
`
