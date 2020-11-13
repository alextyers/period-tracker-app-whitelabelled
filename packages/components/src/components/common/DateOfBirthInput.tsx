import React from 'react'
import styled from 'styled-components/native'
import { WheelPicker } from 'react-native-wheel-picker-android'
import moment from 'moment'
import _ from 'lodash'
import { Text, TextWithoutTranslation } from './Text'
import { ThemedModal } from './ThemedModal'
import { translate } from '../../i18n'

const now = moment()
const currentYear = now.year()
const currentMonth = now.month()
const monthRange = moment.months()
const yearRange = _.range(currentYear, currentYear - 100).map(String)

export function DateOfBirthInput({ style, textStyle = null, label, onChange, value }) {
  const dateOfBirth = value && moment(value)
  const selectedMonth = dateOfBirth ? dateOfBirth.month() : currentMonth
  const selectedYear = dateOfBirth ? currentYear - dateOfBirth.year() : currentYear - 13
  const [isVisible, setIsVisible] = React.useState(false)
  const [monthSelected, setMonthSelected] = React.useState('')
  const [yearSelected, setYearSelected] = React.useState('')
  return (
    <>
      <FormControl style={style}>
        <Label>{label}</Label>
        <Input onPress={() => setIsVisible(true)}>
          <InputValue style={textStyle}>
            {dateOfBirth && translate(dateOfBirth.format('MMM')) + ' ' + dateOfBirth.format('YYYY')}
          </InputValue>
        </Input>
        <Underline />
      </FormControl>
      <ThemedModal {...{ isVisible, setIsVisible }}>
        <CardPicker>
          <Column>
            <WheelPicker
              style={{ width: '50%', height: 200 }}
              itemStyle={{ height: 44 }}
              selectedItem={selectedMonth}
              data={monthRange.map(item => `${translate(item)}`)}
              onItemSelected={option => setMonthSelected(monthRange[option])}
            />
            <WheelPicker
              style={{ width: '50%', height: 200 }}
              itemStyle={{ height: 44 }}
              selectedItem={selectedYear}
              data={yearRange}
              onItemSelected={option => setYearSelected(yearRange[option])}
            />
          </Column>
          <Confirm
            onPress={() => {
              onChange(moment(monthSelected + ' ' + yearSelected, 'MMMM YYYY').toISOString())
              setIsVisible(false)
            }}
          >
            <ConfirmText>confirm</ConfirmText>
          </Confirm>
        </CardPicker>
      </ThemedModal>
    </>
  )
}

const Column = styled.View`
  flex-direction: row;
  width: 100%;
`

const FormControl = styled.View`
  width: 150;
  margin-bottom: 10;
`

const Label = styled(Text)`
  color: #28b9cb;
  width: 150;
  font-size: 12;
`

const Input = styled.TouchableOpacity`
  width: 100%;
  height: 25;
`

const InputValue = styled(TextWithoutTranslation)`
  font-size: 16;
`

const Underline = styled.View`
  height: 1px;
  width: 100%;
  background: #eaeaea;
`

const Confirm = styled.TouchableOpacity`
  width: 200;
  height: 45;
  border-radius: 22.5;
  background-color: #a2c72d;
  align-items: center;
  justify-content: center;
  margin-bottom: 10;
  margin-top: 10;
`

const CardPicker = styled.View`
  width: 85%;
  height: 400;
  background-color: #fff;
  border-radius: 10;
  align-items: center;
  justify-content: center;
  align-self: center;
`
const ConfirmText = styled(Text)`
  font-family: Roboto-Black;
  font-size: 14;
  color: #fff;
`
