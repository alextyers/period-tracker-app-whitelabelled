import React from 'react'
import styled from 'styled-components/native'
import { Text, TextWithoutTranslation } from '../../components/common/Text'
import { assets } from '../../assets/index'
import { translate } from '../../i18n/index'
import * as actions from '../../redux/actions/index'
import { useDispatch } from 'react-redux'
import moment from 'moment'
import { SpinLoader } from '../../components/common/SpinLoader'

export const FinalJourneyCard = ({ cards, questionAnswers, goToQuestion }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
  return (
    <FinalSurveyCard>
      <WhiteContainer>
        {cards.map((card, index) => {
          let questionAnswer = null
          if (card.answerType === 'string') {
            questionAnswer = translate(questionAnswers.data[index].answer)
          } else if (card.answerType === 'numeric') {
            questionAnswer = `${questionAnswers.data[index].answer + 1} ${translate(
              questionAnswers.data[index].answer === 0
                ? 'survey_option_unit_' + card.optionsUnit[0]
                : 'survey_option_unit_' + card.optionsUnit[1],
            )}`
          } else {
            questionAnswer =
              moment.utc(questionAnswers.data[index].answer, 'DD-MMM-YYYY').format('DD') +
              ' - ' +
              translate(
                moment.utc(questionAnswers.data[index].answer, 'DD-MMM-YYYY').format('MMM'),
              ) +
              ' ' +
              moment.utc(questionAnswers.data[index].answer, 'DD-MMM-YYYY').format('YYYY')
          }
          return (
            <ItemContainer key={index}>
              <ItemRow
                onPress={() => {
                  if (questionAnswers.data[0].answer === 'No' && index !== 0) return
                  goToQuestion(card.id)
                }}
              >
                <QuestionIcon source={card.image} />
                <QuestionArea>
                  <Question>{card.question}</Question>
                  <Answer style={{ opacity: questionAnswers.data[0].answer === 'No' ? 0.8 : 1 }}>
                    {questionAnswers.data[0].answer === 'No' && index !== 0
                      ? 'N/A'
                      : questionAnswer}
                  </Answer>
                </QuestionArea>
                <EditButton>
                  <EditIcon source={assets.static.icons.edit} />
                </EditButton>
              </ItemRow>
            </ItemContainer>
          )
        })}
      </WhiteContainer>
      <ButtonContainer>
        <TouchableOpacity
          onPress={() => {
            setLoading(true)
            requestAnimationFrame(() => {
              dispatch(actions.journeyCompletion(questionAnswers))
            })
          }}
        >
          <Title>confirm</Title>
        </TouchableOpacity>
      </ButtonContainer>
      <SpinLoader isVisible={loading} setIsVisible={setLoading} />
    </FinalSurveyCard>
  )
}

const FinalSurveyCard = styled.View`
  flex: 1;
  border-radius: 10;
  background-color: #fff;
  elevation: 4;
  margin-bottom: 60;
  margin-left: 20;
  margin-right: 20;
  margin-top: 10;
  justify-content: space-between;
`
const WhiteContainer = styled.View`
  flex: 1;
  background-color: #fff;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  elevation: 4;
`

const ItemContainer = styled.View`
  padding-horizontal: 36;
  justify-content: space-around;
`

const ItemRow = styled.TouchableOpacity`
  flex-direction: row;
  border-bottom-width: 1;
  border-bottom-color: #eaeaea;
  align-items: center;
  padding-bottom: 10;
  padding-top: 22;
`

const QuestionIcon = styled.Image`
  width: 44;
  height: 44;
`

const QuestionArea = styled.View`
  flex: 1;
`

const Question = styled(Text)`
  font-size: 12;
  padding-horizontal: 10;
  text-align: justify;
`

const Answer = styled(TextWithoutTranslation)`
  font-size: 16;
  font-family: Roboto-Black;
  padding-horizontal: 10;
`

const EditButton = styled.View`
  margin-right: -16;
`

const EditIcon = styled.Image`
  width: 30;
  height: 30;
`
const ButtonContainer = styled.View``

const TouchableOpacity = styled.TouchableOpacity`
  elevation: 2;
  padding-vertical: 12px;
  border-bottom-left-radius: 10;
  border-bottom-right-radius: 10;
  background-color: #efefef;
`

const Title = styled(Text)`
  color: #4a4a4a;
  text-align: center;
  font-family: Roboto-Black;
  font-size: 16;
  padding-vertical: 10;
`
