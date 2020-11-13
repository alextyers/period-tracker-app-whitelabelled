import React from 'react'
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import { TextWithoutTranslation, Text } from '../../components/common/Text'
import { EmojiSelector } from '../../components/common/EmojiSelector'
import { TitleText } from '../../components/common/TitleText'
import { useSelector } from '../../hooks/useSelector'
import _ from 'lodash'
import * as selectors from '../../redux/selectors'
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'

const deviceWidth = Dimensions.get('window').width

function useSurvey(answeredSurvey) {
  const unansweredSurveys = useSelector(selectors.surveysWithoutAnswersSelector)
  const randomSurvey = React.useMemo(() => {
    return _.sample(unansweredSurveys)
  }, [unansweredSurveys])
  return answeredSurvey || randomSurvey
}

export const SurveyCard = React.memo<{ dataEntry: any; index: number; answeredSurvey: any }>(
  ({ dataEntry, answeredSurvey, index }) => {
    const userID = useSelector(selectors.currentUserSelector).id
    const dispatch = useDispatch()
    const selectedSurvey = useSurvey(answeredSurvey)

    const SurveyContent = () => {
      if (answeredSurvey) {
        return (
          <EmojiContainer>
            <EmojiSelector
              color={'#e3629b'}
              isActive={true}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: 30,
                width: '100%',
                marginRight: 10,
                marginBottom: 20,
              }}
              title={answeredSurvey.answer}
              maskStyle={{ flexDirection: 'row' }}
              emojiStyle={{ fontSize: 14 }}
              textStyle={{
                width: '85%',
                fontSize: 11,
                fontFamily: 'Roboto-Black',
                color: '#e3629b',
                marginLeft: 5,
                textAlign: 'left',
              }}
              emoji={''}
            />
            <ContentTextNoTranslations>{answeredSurvey.response}</ContentTextNoTranslations>
          </EmojiContainer>
        )
      }

      return selectedSurvey.answers.map((item, ind) => {
        if (item.text === 'NA') return <Empty />
        return (
          <EmojiContainer key={ind}>
            <EmojiSelector
              color="pink"
              onPress={() =>
                dispatch(
                  actions.answerSurvey({
                    id: selectedSurvey.id,
                    answerID: ind + 1,
                    question: selectedSurvey.question,
                    answer: item.text,
                    response: selectedSurvey.response,
                    userID,
                    utcDateTime: dataEntry.date,
                  }),
                )
              }
              isActive={false}
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                height: 30,
                width: '100%',
                marginRight: 10,
                marginBottom: 4,
              }}
              title={item.text}
              maskStyle={{ flexDirection: 'row' }}
              emojiStyle={{ fontSize: 13 }}
              textStyle={{
                width: '85%',
                fontSize: 11,
                fontFamily: 'Roboto-Black',
                color: '#f49200',
                marginLeft: 5,
                textAlign: 'left',
              }}
              emoji={item.emoji}
            />
          </EmojiContainer>
        )
      })
    }

    return (
      <SurveyCardContainer
        style={{
          width: 0.9 * deviceWidth,
          height: '95%',
          alignSelf: 'center',
          marginLeft: index === 0 ? 15 : 5,
        }}
      >
        <Row style={{ height: '35%', justifyContent: 'flex-start', flexDirection: 'column' }}>
          <TitleText size={26} style={{ height: 50 }}>
            survey
          </TitleText>
          <ContentText>daily_survey_content</ContentText>
        </Row>
        <Row style={{ marginBottom: 10 }}>
          <InnerTitleText>{selectedSurvey.question}</InnerTitleText>
        </Row>
        <Row style={{ flexDirection: 'column' }}>
          <SurveyContent />
        </Row>
      </SurveyCardContainer>
    )
  },
)

const Empty = styled.View``

const SurveyCardContainer = styled.View`
  background-color: #fff;
  border-radius: 10;
  elevation: 5;
  margin-horizontal: 10;
  padding-horizontal: 40;
  padding-vertical: 30;
`

const Row = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

const EmojiContainer = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`

const InnerTitleText = styled(TextWithoutTranslation)`
  flex: 1;
  font-size: 19;
  margin-bottom: 5;
  color: #f49200;
  font-family: Roboto-Black;
`

const ContentText = styled(Text)`
  width: 100%;
  color: #4d4d4d;
  font-size: 12;
  text-align: justify;
`

const ContentTextNoTranslations = styled(TextWithoutTranslation)`
  width: 100%;
  color: #4d4d4d;
  font-size: 12;
  text-align: justify;
`
