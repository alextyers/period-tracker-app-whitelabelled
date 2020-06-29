import React from 'react'
import styled from 'styled-components/native'
import { assets } from '../../assets/index'
import { Text } from '../../components/common/Text'

export const Switcher = ({ value = false, onSwitch }) => {
  return (
    <Row>
      <Col>
        <Button
          activeOpacity={0.9}
          style={{ backgroundColor: value ? '#A2C72D' : '#EDEDED' }}
          onPress={() => onSwitch(true)}
        >
          <Background source={assets.static.icons.roundedMask}>
            <Icon source={assets.static.icons.tick} style={{ opacity: value ? 1 : 0.6 }} />
          </Background>
        </Button>
        <Label>on</Label>
      </Col>
      <Col>
        <Button
          activeOpacity={0.9}
          style={{ backgroundColor: value ? '#EDEDED' : '#E3629B' }}
          onPress={() => onSwitch(false)}
        >
          <Background source={assets.static.icons.roundedMask}>
            <Icon resizeMode="contain" source={assets.static.icons.closeLine} />
          </Background>
        </Button>
        <Label>off</Label>
      </Col>
    </Row>
  )
}

const Row = styled.View`
  flex-direction: row;
`

const Col = styled.View`
  margin-horizontal: 3;
`

const Button = styled.TouchableOpacity`
  width: 32;
  height: 32;
  border-radius: 32;
`

const Background = styled.ImageBackground`
  width: 32;
  height: 32;
  justify-content: center;
  align-items: center;
`

const Label = styled(Text)`
  font-size: 8;
  text-align: center;
`

const Icon = styled.Image`
  width: 21;
  height: 16;
`
