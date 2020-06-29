import React from 'react'
import styled from 'styled-components/native'
import { useTheme } from '../../components/context/ThemeContext'
import { Text } from '../../components/common/Text'
import {
  usePredictionDispatch,
  usePredictDay,
  useTodayPrediction,
  useUndoPredictionEngine,
  useIsActiveSelector,
} from '../../components/context/PredictionProvider'
import moment from 'moment'
import { View } from 'react-native'
import { assets } from '../../assets/index'
import { useDisplayText } from '../../components/context/DisplayTextContext'
import { InformationButton } from '../../components/common/InformationButton'

const maxAdjustableDaysFromStart = 40

function useStatusForSource(themeName) {
  switch (themeName) {
    case 'mosaic':
      return assets.static.icons.stars
    case 'desert':
      return assets.static.icons.circles
    default:
      return assets.static.icons.clouds
  }
}

export function ColourButtons({
  inputDay,
  isDayCard = false,
  hide,
  navigateToTutorial = () => null,
  onPress = () => null,
}) {
  const { id: themeName } = useTheme()

  const source = useStatusForSource(themeName)
  const { setDisplayTextStatic } = useDisplayText()
  const dispatch = usePredictionDispatch()
  const undoFunc = useUndoPredictionEngine()
  const selectedDayInfo = usePredictDay(inputDay)
  const isActive = useIsActiveSelector()
  const currentCycleInfo = useTodayPrediction()

  const minimizeToTutorial = () => {
    hide()
    navigateToTutorial()
  }

  if (inputDay === null) {
    return <View />
  }

  const actionPink = decisionProcess({
    inputDay,
    period: true,
    selectedDayInfo,
    currentCycleInfo,
    isActive,
  })

  const actionBlue = decisionProcess({
    inputDay,
    period: false,
    selectedDayInfo,
    currentCycleInfo,
    isActive,
  })

  return (
    <Container activeOpacity={1} onPress={onPress}>
      <InformationButton
        style={{
          position: 'absolute',
          alignItems: 'center',
          top: 10,
          left: 10,
          flexDirection: 'row',
        }}
        label="tutorial_launch_label"
        onPress={() => minimizeToTutorial()}
      />
      <InstructionText>
        {isDayCard ? 'are_you_on_period' : 'user_input_instructions'}
      </InstructionText>
      <Row style={{ marginBottom: 20 }}>
        <Column>
          <Button
            disabled={
              !(
                !selectedDayInfo.onPeriod &&
                inputDay.diff(moment.utc().startOf('day'), 'days') === 0
              )
            }
            style={[
              !selectedDayInfo.onPeriod && inputDay.diff(moment.utc().startOf('day'), 'days') === 0
                ? { opacity: 1 }
                : { opacity: 0.2 },
              themeName === 'desert' && { height: 65, width: 65 },
            ]}
            onPress={() => {
              dispatch({
                type: 'start-next-cycle',
                inputDay,
              })
              hide()
            }}
          >
            <Mask resizeMode="contain" source={source.period} />
          </Button>
          <InnerText
            style={{
              top: -50,
              opacity:
                !selectedDayInfo.onPeriod &&
                inputDay.diff(moment.utc().startOf('day'), 'days') === 0
                  ? 1
                  : 0.2,
            }}
          >
            {isDayCard ? 'start_new' : 'start_early_button'}
          </InnerText>
        </Column>
        <Column>
          <Button
            style={[
              { marginHorizontal: 10 },
              !selectedDayInfo.onPeriod ? { opacity: 1 } : { opacity: 0.2 },
              themeName === 'desert' && { height: 65, width: 65, marginHorizontal: 30 },
            ]}
            disabled={selectedDayInfo.onPeriod}
            onPress={() => {
              const shouldSkipDispatch = errorCheck(
                actionPink.day,
                selectedDayInfo,
                setDisplayTextStatic,
                currentCycleInfo,
                'pink',
              )
              if (!shouldSkipDispatch) {
                dispatch({ type: actionPink.type, inputDay: actionPink.day })
              }
              hide()
            }}
          >
            <Mask resizeMode="contain" source={source.period} />
          </Button>
          <InnerText style={{ top: -50, opacity: !selectedDayInfo.onPeriod ? 1 : 0.2 }}>
            period
          </InnerText>
        </Column>
        <Column>
          <Button
            style={[
              selectedDayInfo.onPeriod ? { opacity: 1 } : { opacity: 0.2 },
              themeName === 'desert' && { height: 65, width: 65 },
            ]}
            disabled={!selectedDayInfo.onPeriod}
            onPress={() => {
              const shouldSkipDispatch = errorCheck(
                actionBlue.day,
                selectedDayInfo,
                setDisplayTextStatic,
                currentCycleInfo,
                'blue',
              )
              if (!shouldSkipDispatch) {
                dispatch({
                  type: actionBlue.type,
                  inputDay: actionBlue.day,
                })
              }
              hide()
            }}
          >
            <Mask resizeMode="contain" source={source.nonPeriod} />
          </Button>
          <InnerText style={{ top: -50, opacity: selectedDayInfo.onPeriod ? 1 : 0.2 }}>
            {isDayCard ? 'no_day' : 'non_period'}
          </InnerText>
        </Column>
      </Row>
      {!isDayCard && (
        <Row>
          <LongButton
            onPress={() => {
              undoFunc()
              hide()
            }}
          >
            <Mask resizeMode="contain" source={assets.static.icons.undoOval}>
              <InnerText style={{ fontSize: 14, color: '#f49200' }}>undo</InnerText>
            </Mask>
          </LongButton>
        </Row>
      )}
    </Container>
  )
}

function errorCheck(
  inputDay,
  selectedDayInfo,
  setDisplayTextStatic,
  currentCycleInfo,
  buttonColour,
) {
  const diffFromStart = inputDay.diff(currentCycleInfo.cycleStart, 'days')
  if (currentCycleInfo.cycleDay === 0) {
    // account for the non period mode
    if (diffFromStart < 0) {
      const initialToBe = -diffFromStart + 5 // defaulted to 5
      if (initialToBe >= 10) {
        setDisplayTextStatic('period_too_long')
        return true
      }
    }
    return false
  }

  if (
    diffFromStart > currentCycleInfo.cycleLength &&
    buttonColour === 'blue' &&
    diffFromStart <= maxAdjustableDaysFromStart
  ) {
    // this allows the user to move the next period up to the max adjustable range
    return false
  }

  if (diffFromStart > maxAdjustableDaysFromStart && currentCycleInfo.cycleDay !== 0) {
    // this will throw an alert for days past the max adjustable days
    setDisplayTextStatic('too_far_ahead')
    return true
  }

  const periodLengthToBe =
    diffFromStart < 0 ? -diffFromStart + currentCycleInfo.periodLength - 1 : diffFromStart
  // console.warn(['to be', periodLengthToBe])
  if (periodLengthToBe >= 10) {
    setDisplayTextStatic('period_too_long')
    return true
  }

  if (diffFromStart < 0 && selectedDayInfo.cycleDay < 15 && selectedDayInfo.cycleDay !== 0) {
    // cant reduce period to less than 14 days
    setDisplayTextStatic('too_far_behind')
    return true
  }
  return false
}

function decisionProcess({ inputDay, period, selectedDayInfo, currentCycleInfo, isActive }) {
  const diffFromStart = inputDay.diff(currentCycleInfo.cycleStart, 'days')
  if (!isActive && diffFromStart >= 0) {
    if (period) {
      return {
        type: 'adjust-mens-end',
        day: inputDay,
      }
    }
    if (!period) {
      return {
        type: 'adjust-mens-end',
        day: inputDay.clone().subtract(1, 'days'),
      }
    }
  }
  if (period) {
    // period button
    if ((diffFromStart < 0 && selectedDayInfo.cycleDay > 14) || selectedDayInfo.cycleDay === 0) {
      // cant reduce period to less than 14 days into the previous cycle and if current length is more than 10
      return { type: 'current-start-adjust', day: inputDay }
    }
    return { type: 'adjust-mens-end', day: inputDay }
  }
  // non period button
  if (diffFromStart >= currentCycleInfo.cycleLength) {
    return {
      type: 'future-start-adjust',
      day: inputDay.clone().add(1, 'days'),
    }
  }

  if (diffFromStart === 0 || diffFromStart <= 1) {
    // Only adjust 2 day forward at a time
    const cycleLengthToBe = selectedDayInfo.cycleLength - selectedDayInfo.cycleDay
    if (cycleLengthToBe > 14) {
      // only will move if the cycle length that will be adjusted is still bigger than 14
      return {
        type: 'current-start-adjust',
        day: inputDay.clone().add(1, 'days'),
      }
    }
  }
  return {
    type: 'adjust-mens-end',
    day: inputDay.clone().subtract(1, 'days'),
  }
}

const Container = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const Button = styled.TouchableOpacity`
  height: 85;
  width: 85;
  align-items: center;
  justify-content: center;
`

const LongButton = styled.TouchableOpacity`
  height: 90;
  width: 120;
  margin-top: 20;
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

const InstructionText = styled(Text)`
  color: white;
  font-size: 14;
  width: 80%;
  margin-bottom: 75;
  text-align: center;
  font-family: Roboto-Black;
`

const Mask = styled.ImageBackground`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`

const Column = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
