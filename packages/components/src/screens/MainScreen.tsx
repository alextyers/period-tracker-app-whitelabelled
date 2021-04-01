import React from 'react'
import { Platform } from 'react-native'
import { BackgroundTheme } from '../components/layout/BackgroundTheme'
import { CircleProgress } from './mainScreen/CircleProgress'
import styled from 'styled-components/native'
import { CircularSelection } from './mainScreen/wheelCarousel/CircularSelection'
import { Carousel } from './mainScreen/wheelCarousel/Carousel'
import { CenterCard } from './mainScreen/CenterCard'
import { Avatar } from '../components/common/Avatar/Avatar'
import { useTheme } from '../components/context/ThemeContext'
import { navigate } from '../services/navigationService'
import { useInfiniteScroll } from './mainScreen/wheelCarousel/useInfiniteScroll'
import { useTextToSpeechHook } from '../hooks/useTextToSpeechHook'
import { mainScreenSpeech } from '../config'
import { useTodayPrediction } from '../components/context/PredictionProvider'
import { useRandomText } from '../hooks/useRandomText'
import { InformationButton } from '../components/common/InformationButton'
import { assets } from '../assets'

export function MainScreen({ navigation }) {
  const theme = useTheme()
  const todayInfo = useTodayPrediction()
  // @TODO: careful note here, may be worth the performance increase though May not work with Memo now
  useRandomText({ navigation })
  useTextToSpeechHook({ navigation, text: mainScreenSpeech({ todayInfo }) })

  return <MainScreenActual key={theme.id} />
}

const MainScreenActual = React.memo(() => {
  const { data, index, isActive, currentIndex, absoluteIndex } = useInfiniteScroll()
  const { onFertile } = useTodayPrediction()
  return (
    <BackgroundTheme>
      <TopSeparator>
        {onFertile && (
          <InformationButton
            icon={assets.static.icons.infoBlue}
            iconStyle={{ height: 25, width: 25 }}
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              marginRight: 20,
              alignSelf: 'flex-end',
            }}
          />
        )}
      </TopSeparator>
      <MiddleSection>
        <AvatarSection>
          <CircleProgress
            isCalendarTextVisible={true}
            onPress={() => navigate('Calendar', null)}
            fillColor="#FFC900"
            emptyFill="#F49200"
            style={{ alignSelf: 'flex-start', marginLeft: 15, zIndex: 999 }}
          />
          <Avatar style={{ position: 'absolute', top: Platform.OS === 'ios' ? 180 : 150 }} />
        </AvatarSection>
        <WheelSection>
          <CircularSelection {...{ data, index, isActive, currentIndex, absoluteIndex }} />
          <CenterCard />
        </WheelSection>
      </MiddleSection>
      <CarouselSection>
        <Carousel {...{ index, data, isActive, currentIndex, absoluteIndex }} />
      </CarouselSection>
    </BackgroundTheme>
  )
})

const TopSeparator = styled.View`
  height: 10%;
  width: 100%;
  z-index: 9998;
`
const MiddleSection = styled.View`
  height: 60%;
  width: 100%;
  flex-direction: row;
`
const AvatarSection = styled.View`
  height: 100%;
  width: 35%;
  justify-content: flex-start;
  z-index: 9999;
`
const WheelSection = styled.View`
  height: 100%;
  width: 65%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
const CarouselSection = styled.View`
  height: 30%;
  padding-bottom: 20;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`
