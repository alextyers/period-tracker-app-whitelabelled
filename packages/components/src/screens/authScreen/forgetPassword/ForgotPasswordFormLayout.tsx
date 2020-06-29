import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../../../components/common/Text'

export function ForgotPasswordFormLayout({ children, onSubmit }) {
  return (
    <Container>
      <Container
        style={{
          height: 180,
          backgroundColor: 'white',
          paddingHorizontal: 15,
          elevation: 4,
        }}
      >
        {children}
      </Container>
      {onSubmit && (
        <Touchable onPress={onSubmit}>
          <HeaderText>confirm</HeaderText>
        </Touchable>
      )}
    </Container>
  )
}

const Container = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Touchable = styled.TouchableOpacity`
  height: 80;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const HeaderText = styled(Text)<{ expanded: boolean }>`
  font-size: 16;
  text-align: center;
  align-self: center;
  color: ${props => (props.expanded ? `#fff` : `#000`)};
  font-family: Roboto-Black;
`
