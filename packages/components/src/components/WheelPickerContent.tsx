import React from 'react'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { translate } from '../i18n'
import { Platform } from 'react-native'
export const WheelPickerContent = ({
  optionsRange,
  optionsUnit,
  setQuestionAnswer,
  answersData,
  questionAnswer,
  id,
}) => {
  return (
    <WheelPicker
      style={{
        marginTop: 'auto',
        marginBottom: 'auto',
        width: 300,
        height: 200,
      }}
      itemTextSize={18}
      selectedItemTextSize={18}
      itemStyle={{ height: Platform.OS === 'ios' ? 150 : 50 }}
      data={optionsRange.map(
        option =>
          `${option} ${option === 1 ? translate(optionsUnit[0]) : translate(optionsUnit[1])}`,
      )}
      onTouchStart={() => false}
      selectedItem={questionAnswer}
      initPosition={questionAnswer}
      onItemSelected={index =>
        setQuestionAnswer({
          data: answersData.data.map(item => (item.id === id ? { ...item, answer: index } : item)),
        })
      }
    />
  )
}
