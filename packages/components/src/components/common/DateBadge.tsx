import React from 'react'
import { assets } from '../../assets/index'
import styled from 'styled-components/native'
import { useTheme } from '../context/ThemeContext'
import { translate } from '../../i18n'

function useStatusForSource(isOnPeriod, isOnFertile, themeName) {
  const themeIcon = switcher(themeName)
  if (isOnPeriod) return assets.static.icons[themeIcon].period
  if (isOnFertile) return assets.static.icons[themeIcon].fertile
  return assets.static.icons[themeIcon].nonPeriod
}

function switcher(value) {
  switch (value) {
    case 'mosaic':
      return 'stars'
    case 'desert':
      return 'circles'
    default:
      return 'clouds'
  }
}

export function DateBadge({ dataEntry, style, textStyle = null }) {
  const { id: themeName } = useTheme()
  const source = useStatusForSource(dataEntry.onPeriod, dataEntry.onFertile, themeName)
  const cloudAdjust =
    themeName !== 'mosaic' && themeName !== 'desert' ? { left: -3 } : { fontSize: 8, right: -2 }
  return (
    <Background
      resizeMode="contain"
      style={[
        style,
        themeName === 'mosaic' && { height: 52, width: 52 },
        themeName === 'desert' && { height: 40, width: 40 },
      ]}
      source={source}
    >
      <DateText style={[textStyle, cloudAdjust]}>
        {`${dataEntry.date.format('DD')}\n${translate(dataEntry.date.format('MMM'))}`}
      </DateText>
    </Background>
  )
}

const Background = styled.ImageBackground`
  width: 55;
  height: 55;
  justify-content: center;
  align-items: center;
`

const DateText = styled.Text`
  align-items: center;
  text-align: center;
  width: 100%;
  color: white;
  font-size: 10;
  font-family: Roboto-Black;
`
