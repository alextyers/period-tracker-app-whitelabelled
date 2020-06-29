import * as React from 'react'
import { Dimensions, View, ActivityIndicator } from 'react-native'
import Animated from 'react-native-reanimated'
import { transformOrigin } from 'react-native-redash'
import { CircularElement } from './CircularElement'
import { PanGesture } from './PanGesture'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ColourButtons } from '../ColourButtons'
import { useSelector } from '../../../hooks/useSelector'
import * as selectors from '../../../redux/selectors'
import { navigateAndReset } from '../../../services/navigationService'
import styled from 'styled-components/native'
import { Text } from '../../../components/common/Text'
import { useCheckDayWarning } from '../../../hooks/usePredictionWarnings'
import { ThemedModal } from '../../../components/common/ThemedModal'
import { SpinLoader } from '../../../components/common/SpinLoader'

const { interpolate } = Animated
const height = 0.55 * Dimensions.get('window').height
const width = 0.65 * Dimensions.get('window').width
const D = height / 1.6
const innerR = D / 2

export function CircularSelection({
  data,
  index,
  isActive,
  currentIndex,
  absoluteIndex,
  disableInteraction = false,
}) {
  const [isVisible, setIsVisible] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const l = Math.sin(Math.PI / data.length)
  const r = (innerR * l) / (1 - l)
  const R = innerR + 2 * r
  const cx = width / 2 - r
  const cy = R - r
  const segment = (2 * Math.PI) / data.length
  const rotateZ = interpolate(index, {
    inputRange: [0, data.length],
    outputRange: [0, -2 * Math.PI],
  })
  const isTutorialOneOn = useSelector(selectors.isTutorialOneActiveSelector)
  const checkIfWarning = useCheckDayWarning()
  // automatically close the modal if the wheel start scrolling
  React.useEffect(() => {
    setIsVisible(false)
  }, [currentIndex])

  const navigateToTutorial = () => {
    setLoading(true)
    requestAnimationFrame(() => {
      navigateAndReset('TutorialFirstStack', null)
    })
  }

  return (
    <>
      <View style={{ height, width }}>
        <Animated.View
          style={[
            {
              position: 'absolute',
              left: 2 * r,
              right: -2 * r,
              top: -10,
              bottom: 10,
            },
            {
              transform: transformOrigin(0, R - height / 2, {
                // @ts-ignore
                rotateZ,
              }),
            },
          ]}
        >
          {data.map((dataEntry, key) => {
            return (
              <View
                {...{ key }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  transform: [
                    { translateX: cx },
                    { translateY: cy },
                    { rotateZ: `${key * segment - 0.5 * Math.PI}rad` }, // change the rotation of the circle by 90 degrees so active index is far left
                    { translateY: -cy },
                  ],
                }}
              >
                <CircularElement
                  segment={segment}
                  radius={r}
                  currentIndex={key}
                  {...{ isActive, index, dataEntry }}
                />
              </View>
            )
          })}
        </Animated.View>
        {!disableInteraction && (
          <PanGesture
            isX={false}
            ratio={(2 * width) / (data.length / 2)} // the 3 is slowing the rotation speed so no crazy rotations are possible
            {...{ isActive, absoluteIndex }}
          >
            <TouchableOpacity
              onPress={() => {
                if (isTutorialOneOn) {
                  navigateToTutorial()
                  return
                }
                if (checkIfWarning(data[currentIndex].date)) return
                setIsVisible(true)
              }}
              style={{
                height: 60,
                width: 80,
                marginTop: cy,
              }}
            />
          </PanGesture>
        )}
        <ThemedModal {...{ isVisible, setIsVisible }}>
          <ColourButtons
            navigateToTutorial={navigateToTutorial}
            inputDay={data[currentIndex].date}
            hide={() => setIsVisible(false)}
            onPress={() => setIsVisible(false)}
          />
        </ThemedModal>
      </View>
      <SpinLoader isVisible={loading} setIsVisible={setLoading} text="please_wait_tutorial" />
    </>
  )
}
