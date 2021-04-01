import React from 'react'
import styled from 'styled-components/native'
import { BackgroundTheme } from '../components/layout/BackgroundTheme'
import { Header } from '../components/common/Header'
import { DayBadge } from '../components/common/DayBadge'
import { DateBadge } from '../components/common/DateBadge'
import { DayCarousel } from './dayScreen/DayCarousel'
import { BackOneScreen } from '../services/navigationService'
import { useKeyboardController } from '../hooks/useKeyboardController'
import { InformationButton } from '../components/common/InformationButton'
import { assets } from '../assets'
import { usePredictDay } from '../components/context/PredictionProvider'

export function DayScreen({ navigation }) {
  const temp = navigation.getParam('data')
  const dataEntry = usePredictDay(temp.date)

  const { keyboardIsOpen, dismiss } = useKeyboardController()
  const goBack = () => {
    if (keyboardIsOpen) {
      return dismiss()
    }

    return BackOneScreen()
  }

  return (
    <BackgroundTheme>
      <InfoSection>
        {dataEntry.onFertile && (
          <InformationButton
            icon={assets.static.icons.infoBlue}
            iconStyle={{ height: 25, width: 25 }}
            style={{
              marginTop: 'auto',
              marginBottom: 'auto',
              marginRight: 10,
            }}
          />
        )}
        <DateBadge style={{ width: 60, height: 60, marginRight: 10 }} dataEntry={dataEntry} />
        <DayBadge
          style={{ width: 90, height: 50 }}
          fontSizes={{ small: 16, big: 24 }}
          dataEntry={dataEntry}
        />
      </InfoSection>
      <Header onPressBackButton={goBack} screenTitle={''} showScreenTitle={false} />
      <DayCarouselSection>
        <DayCarousel navigation={navigation} dataEntry={dataEntry} />
      </DayCarouselSection>
    </BackgroundTheme>
  )
}

const DayCarouselSection = styled.View`
  width: 100%;
  flex: 1;
  padding-bottom: 25;
`

const InfoSection = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 8;
  right: 30;
`
