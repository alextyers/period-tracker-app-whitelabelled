import React from 'react'
import { assets } from '../../assets/index'
import styled from 'styled-components/native'
import { TextWithoutTranslation, Text } from './Text'

function useStatusForSource(isOnPeriod, isOnFertile) {
  if (isOnPeriod) return assets.static.dayBadge.onPeriod
  if (isOnFertile) return assets.static.dayBadge.onFertile
  return assets.static.dayBadge.default
}

export const DayBadge = ({ dataEntry, style, fontSizes }) => {
  const source = useStatusForSource(dataEntry.onPeriod, dataEntry.onFertile)
  return (
    <Background resizeMode="contain" style={style} source={source}>
      <DayText style={{ fontSize: fontSizes.small, textTransform: 'capitalize' }}>day</DayText>
      <NumberText style={{ fontSize: fontSizes.big }}>
        {dataEntry.cycleDay === 0 ? '-' : dataEntry.cycleDay}
      </NumberText>
    </Background>
  )
}

const Background = styled.ImageBackground`
  width: 90;
  height: 40;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 18;
`

const NumberText = styled(TextWithoutTranslation)`
  color: white;
  font-size: 28;
  font-family: Roboto-Black;
`

const DayText = styled(Text)`
  color: white;
  font-size: 28;
  font-family: Roboto-Black;
`
