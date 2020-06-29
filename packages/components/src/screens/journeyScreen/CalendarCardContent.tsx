import React from 'react'
import { CalendarList } from '../../components/common/CalendarList'
import styled from 'styled-components/native'
import moment from 'moment'

export const CalendarCardContent = ({ setQuestionAnswer, answersData, questionAnswer, id }) => {
  return (
    <CalendarContainer>
      <CalendarList
        width={300}
        setInputDay={day => {
          const today = moment.utc().startOf('day')
          if (parseInt(day.format('YYYYMMDD'), 10) > parseInt(today.format('YYYYMMDD'), 10)) {
            setQuestionAnswer({
              data: answersData.data.map(item =>
                item.id === id
                  ? {
                      ...item,
                      answer: today.format('DD-MMM-YYYY'),
                    }
                  : item,
              ),
            })
            return
          }
          setQuestionAnswer({
            data: answersData.data.map(item =>
              item.id === id
                ? {
                    ...item,
                    answer: day.format('DD-MMM-YYYY'),
                  }
                : item,
            ),
          })
        }}
        highlightedDates={{
          [moment.utc(questionAnswer, 'DD-MMM-YYYY').format('YYYY-MM-DD')]: {
            color: '#E3629B',
            startingDay: true,
            endingDay: true,
          },
        }}
      />
    </CalendarContainer>
  )
}
const CalendarContainer = styled.View`
  height: 360;
  width: 300;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: auto;
  margin-bottom: auto;
`
