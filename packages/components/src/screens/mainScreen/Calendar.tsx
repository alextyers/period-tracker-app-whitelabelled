import React from 'react'
import { Animated, Easing, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'
import { BackgroundTheme } from '../../components/layout/BackgroundTheme'
import { Text, TextWithoutTranslation } from '../../components/common/Text'
import {
  useCalculateStatusForDateRange,
  usePredictDay,
  useTodayPrediction,
} from '../../components/context/PredictionProvider'
import { useDisplayText } from '../../components/context/DisplayTextContext'
import { ColourButtons } from './ColourButtons'
import { Header } from '../../components/common/Header'
import { CalendarList } from '../../components/common/CalendarList'
import { useCheckDayWarning } from '../../hooks/usePredictionWarnings'
import { ThemedModal } from '../../components/common/ThemedModal'
import { navigateAndReset, navigate } from '../../services/navigationService'
import { SpinLoader } from '../../components/common/SpinLoader'
import { assets } from '../../assets'
import { translate } from '../../i18n'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

// const calendarHeight = 0.71 * height
const calendarWidth = 0.95 * width

const startDate = moment().startOf('day').subtract(24, 'months')
const endDate = moment().startOf('day').add(12, 'months')

export const Calendar = () => {
  const highlightedDates = useCalculateStatusForDateRange(startDate, endDate)
  const [isVisible, setIsVisible] = React.useState(false)
  const [opacity, setOpacity] = React.useState(1)
  const [calendarText, setCalendarText] = React.useState(null)
  const [inputDay, setInputDay] = React.useState(moment().startOf('day'))
  const animateControl = new Animated.Value(0)
  const { text: displayedText } = useDisplayText()
  const [loading, setLoading] = React.useState(false)
  const currentDayInfo = usePredictDay(inputDay)
  const currentCycleInfo = useTodayPrediction()

  const navigateToTutorial = () => {
    setLoading(true)
    requestAnimationFrame(() => {
      navigateAndReset('TutorialFirstStack', null)
    })
  }

  const manageNavigationToDayCards = () => {
    setIsVisible(false)
    if (inputDay.diff(moment().startOf('day'), 'days') <= 0) {
      navigate('DayScreen', { data: currentDayInfo })
    }
    setCalendarText(translate(`too_far_ahead`))
  }

  const manageAnimationToColourButtons = () => {
    // @TODO: may cause issues on never started period state (check)
    // if (
    //   inputDay.diff(currentCycleInfo.cycleStart, 'days') < -14 &&
    //   currentCycleInfo.cycleDay !== 0
    // ) {
    //   setIsVisible(false)
    //   setCalendarText(translate(`too_far_behind`))
    //   return
    // }
    AnimateOffScreen()
  }

  React.useEffect(() => {
    setCalendarText(displayedText)
  }, [displayedText])

  React.useEffect(() => {
    const intervalId = setTimeout(() => {
      setCalendarText(null)
    }, 3000)
    return () => {
      clearTimeout(intervalId)
    }
  }, [calendarText])

  // This was to get around the opacity overlaying from modal dismissing. This will cause a re render on dismiss to ensure the next open has the buttons visible
  React.useEffect(() => {
    if (isVisible === true) {
      setOpacity(1)
    }
  }, [isVisible])

  const AnimateOffScreen = () => {
    Animated.timing(animateControl, {
      duration: 500,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      setOpacity(0)
    })
  }

  const positionY = animateControl.interpolate({
    inputRange: [0, 1],
    outputRange: [0, height],
  })

  const positionYLower = animateControl.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -height],
  })

  const positionX = animateControl.interpolate({
    inputRange: [0, 1],
    outputRange: [width, 0],
  })

  return (
    <BackgroundTheme>
      <Header screenTitle="calendar" />
      <Container>
        <CalendarContainer>
          <CalendarList
            highlightedDates={highlightedDates}
            setInputDay={(day) => {
              setInputDay(day)
              setIsVisible(true)
            }}
            width={calendarWidth}
          />
        </CalendarContainer>
      </Container>
      {calendarText !== null && (
        <CalendarText>
          <Dialog>
            <TextWithoutTranslation>{calendarText}</TextWithoutTranslation>
          </Dialog>
          <Triangle />
        </CalendarText>
      )}
      <ThemedModal {...{ isVisible, setIsVisible }}>
        <Animated.View style={{ opacity, transform: [{ translateY: positionYLower }] }}>
          <LongButton onPress={() => manageNavigationToDayCards()}>
            <Mask resizeMode="contain" source={assets.static.icons.undoOval}>
              <InnerText style={{ fontSize: 14, color: '#f49200' }}>to_daily_card</InnerText>
            </Mask>
          </LongButton>
        </Animated.View>
        <Animated.View style={{ opacity, transform: [{ translateY: positionY }] }}>
          <LongButton onPress={() => manageAnimationToColourButtons()}>
            <Mask resizeMode="contain" source={assets.static.icons.undoOval}>
              <InnerText style={{ fontSize: 14, color: '#e3629b' }}>change_period</InnerText>
            </Mask>
          </LongButton>
        </Animated.View>
        <Animated.View
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            transform: [{ translateX: positionX }],
          }}
        >
          <ColourButtons
            onPress={() => setIsVisible(false)}
            navigateToTutorial={navigateToTutorial}
            inputDay={inputDay}
            hide={() => setIsVisible(false)}
          />
        </Animated.View>
      </ThemedModal>
      <SpinLoader isVisible={loading} setIsVisible={setLoading} text="please_wait_tutorial" />
    </BackgroundTheme>
  )
}

const Container = styled.View`
  height: 90%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
const CalendarText = styled.View`
  position: absolute;
  width: 50%;
  elevation: 5;
  z-index: 100;
  left: 25%;
  top: 20;
`
const CalendarContainer = styled.View`
  height: 400;
  width: ${calendarWidth};
  align-self: center;
  align-items: center;
  justify-content: center;
  background-color: #ffff;
  border-radius: 10;
  elevation: 5;
  border-width: 0;
  overflow: hidden;
`

const Dialog = styled.View`
  padding-horizontal: 16;
  padding-vertical: 10;
  border-radius: 14;
  background: #ffffff;
  elevation: 3;
  position: relative;
`

const Triangle = styled.View`
  flex-direction: row;
  width: 0;
  height: 0;
  background-color: transparent;
  border-style: solid;
  border-top-width: 22;
  border-right-width: 13;
  border-bottom-width: 0;
  border-left-width: 0;
  border-top-color: white;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
  position: relative;
  left: 20;
  z-index: 100;
`
const LongButton = styled.TouchableOpacity`
  height: 70;
  width: 270;
  margin-top: 20;
  align-items: center;
  align-self: center;
  justify-content: center;
`
const Mask = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`
const InnerText = styled(Text)`
  color: white;
  font-size: 14;
  position: absolute;
  text-align: center;
  font-family: Roboto-Black;
`
