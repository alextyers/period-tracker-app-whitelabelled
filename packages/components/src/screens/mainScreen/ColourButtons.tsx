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
  useHistoryPrediction,
} from '../../components/context/PredictionProvider'
import moment from 'moment'
import { View, Platform } from 'react-native'
import { assets } from '../../assets/index'
import { useDisplayText } from '../../components/context/DisplayTextContext'
import { InformationButton } from '../../components/common/InformationButton'
import { decisionProcessNonPeriod, decisionProcessPeriod } from './predictionLogic/predictionLogic'
const minBufferBetweenCycles = 2

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
  const history = useHistoryPrediction()
  const selectedDayInfo = usePredictDay(inputDay)
  const isActive = useIsActiveSelector()
  const currentCycleInfo = useTodayPrediction()

  const minimizeToTutorial = () => {
    hide()
    setTimeout(
      () => {
        navigateToTutorial()
      },
      Platform.OS === 'ios' ? 500 : 300,
    )
  }

  if (inputDay === null) {
    return <View />
  }

  const errorCallBack = (err: string): any => {
    if (err) {
      setDisplayTextStatic(err)
    }
  }
  const actionPink = decisionProcessPeriod({
    inputDay,
    selectedDayInfo,
    currentCycleInfo,
    history,
    isActive,
    errorCallBack,
  })

  const actionBlue = decisionProcessNonPeriod({
    inputDay,
    selectedDayInfo,
    currentCycleInfo,
    history,
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
          zIndex: 99,
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
                inputDay.diff(moment().startOf('day'), 'days') === 0 &&
                inputDay.diff(selectedDayInfo.cycleStart, 'days') >=
                  selectedDayInfo.periodLength + minBufferBetweenCycles
              )
            }
            style={[
              !selectedDayInfo.onPeriod &&
              inputDay.diff(moment().startOf('day'), 'days') === 0 &&
              inputDay.diff(selectedDayInfo.cycleStart, 'days') >=
                selectedDayInfo.periodLength + minBufferBetweenCycles
                ? { opacity: 1 }
                : { opacity: 0.2 },
              themeName === 'desert' && { height: 65, width: 65 },
            ]}
            onPress={() => {
              dispatch({
                type: 'start-next-cycle',
                inputDay,
                errorCallBack,
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
                !selectedDayInfo.onPeriod && inputDay.diff(moment().startOf('day'), 'days') === 0
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
              if (actionPink) {
                dispatch({ type: actionPink.type, inputDay: actionPink.day, errorCallBack })
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
              if (actionBlue) {
                dispatch({
                  type: actionBlue.type,
                  inputDay: actionBlue.day,
                  errorCallBack,
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
