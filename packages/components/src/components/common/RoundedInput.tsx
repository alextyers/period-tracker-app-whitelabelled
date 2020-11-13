import React from 'react'
import styled from 'styled-components/native'

export const RoundedInput = props => {
  return (
    <FormContainer>
      <TextInput {...props.inputProps} />
    </FormContainer>
  )
}

const FormContainer = styled.View`
  background-color: #fff;
  padding-horizontal: 42;
  elevation: 2;
  margin-horizontal: 2;
  flex: 1;
  border-radius: 50;
  height: 46;
  justify-content: center;
`

const TextInput = styled.TextInput`
  font-size: 16;
  border-width: 0;
  padding-vertical: 0;
`
