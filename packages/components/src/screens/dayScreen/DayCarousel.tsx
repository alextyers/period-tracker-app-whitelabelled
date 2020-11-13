import React from 'react'
import _ from 'lodash'
import { FlatList, Dimensions } from 'react-native'
import { DayCarouselItem } from './DayCarouselItem'
import { useDispatch } from 'react-redux'
import * as actions from '../../redux/actions'
import { NoteCard } from './NoteCard'
import { QuizCard } from './QuizCard'
import { DidYouKnowCard } from './DidYouKnowCard'
import { SurveyCard } from './SurveyCard'
import { useSelector } from '../../hooks/useSelector'
import * as selectors from '../../redux/selectors'
import { useTextToSpeechHook } from '../../hooks/useTextToSpeechHook'
import { translate } from '../../i18n'
import { ThemedModal } from '../../components/common/ThemedModal'
import { ColourButtons } from '../mainScreen/ColourButtons'
import { SpinLoader } from '../../components/common/SpinLoader'
import { navigateAndReset } from '../../services/navigationService'

const screenWidth = Dimensions.get('window').width

export function DayCarousel({ navigation, dataEntry }) {
  const dispatch = useDispatch()
  const [textToSpeak, setTextToSpeak] = React.useState([])
  const [isVisible, setIsVisible] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [tempCardName, setTempCardName] = React.useState(null)
  const [tempCardAnswer, setTempCardAnswer] = React.useState(null)
  const unansweredSurveys = useSelector(selectors.surveysWithoutAnswersSelector)
  const answeredSurvey = useSelector(state => selectors.surveyAnswerByDate(state, dataEntry.date))
  const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
  const userID = useSelector(selectors.currentUserSelector).id
  const cards = {
    ...((!_.isEmpty(unansweredSurveys) || answeredSurvey) && { survey: null }),
    ...(dataEntry.date.day() % 2 === 0 && !dataEntry.onPeriod && { quiz: null }), // this is to change the order of cards based on the day (it alternates between days and when on periods the quiz cards should go to the end)
    ...(dataEntry.date.day() % 2 !== 0 && !dataEntry.onPeriod && { didYouKnow: null }),
    mood: {
      happy: '😊',
      blah: '😑',
      sad: '😔',
      stressed: '😤',
      worried: '😟',
      fabulous: '😎',
    },
    body: {
      tired: '💤',
      cramps: '💥',
      bloating: '🎈',
      spots: '💢',
      headache: '⚡',
      sore_breasts: '🍒',
    },
    activity: {
      exercise: '🏃',
      'healthy food': '🍏',
      'good sleep': '🛏️',
      socialising: '👋',
      "couldn't sleep": '😴',
      'unhealthy food': '🍰',
    },
    flow: {
      none: '🌂',
      spotting: '🔹',
      light: '💧',
      medium: '💦',
      heavy: '☔',
    },
    ...(dataEntry.date.day() % 2 === 0 && dataEntry.onPeriod && { quiz: null }),
    ...(dataEntry.date.day() % 2 !== 0 && dataEntry.onPeriod && { didYouKnow: null }),
    notes: null,
  }

  React.useEffect(() => {
    const dayCardText = Object.keys(cards).reduce((acc, item) => {
      let heading = ''
      let caption = ''
      let subheading = ''
      if (item === 'quiz') {
        heading = translate('quiz')
        caption = translate('daily_quiz_content')
        return acc.concat([heading, caption])
      }
      if (item === 'didYouKnow') {
        heading = translate('didYouKnow')
        caption = translate('daily_didYouKnow_content')
        return acc.concat([heading, caption])
      }
      if (item === 'survey') {
        heading = translate('survey')
        caption = translate('daily_survey_content')
        return acc.concat([heading, caption])
      }
      if (item === 'notes') {
        return acc
      }
      heading = translate(item)
      caption = translate(contentText[item])
      subheading = translate(headingText[item])
      const emojis = Object.keys(cards[item]).map(key => translate(key))
      return acc.concat([heading, caption, subheading, ...emojis])
    }, [])
    setTextToSpeak(dayCardText)
  }, [])

  useTextToSpeechHook({ navigation, text: textToSpeak })

  const navigateToTutorial = () => {
    setLoading(true)
    requestAnimationFrame(() => {
      navigateAndReset('TutorialFirstStack', null)
    })
  }
  return (
    <>
      <FlatList
        horizontal={true}
        decelerationRate={0}
        snapToInterval={0.9 * screenWidth + 15}
        snapToAlignment={'center'}
        pagingEnabled={true}
        data={Object.keys(cards)}
        keyExtractor={(_ignore, index) => index.toString()}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item, index }) => {
          if (item === 'notes') {
            return <NoteCard dataEntry={dataEntry} />
          }
          if (item === 'quiz') {
            return <QuizCard index={index} dataEntry={dataEntry} />
          }
          if (item === 'didYouKnow') {
            return <DidYouKnowCard index={index} />
          }
          if (item === 'survey') {
            return (
              <SurveyCard dataEntry={dataEntry} index={index} answeredSurvey={answeredSurvey} />
            )
          }
          return (
            <DayCarouselItem
              index={index}
              content={cards[item]}
              cardName={item}
              dataEntry={dataEntry}
              onPress={(cardName, answer) => {
                if (
                  // To change period based on flow input
                  ((answer === 'light' || answer === 'medium' || answer === 'heavy') &&
                    !dataEntry.onPeriod) ||
                  ((answer === 'none' || answer === 'spotting') && dataEntry.onPeriod)
                ) {
                  setTempCardName(cardName)
                  setTempCardAnswer(answer)
                  setIsVisible(true)
                  return
                }
                dispatch(
                  actions.answerDailyCard({
                    cardName,
                    answer,
                    userID,
                    utcDateTime: dataEntry.date,
                    mutuallyExclusive: cardName === 'flow',
                  }),
                )
              }}
            />
          )
        }}
        style={{ width: screenWidth }}
        showsHorizontalScrollIndicator={false}
      />
      <ThemedModal {...{ isVisible, setIsVisible }}>
        <ColourButtons
          isDayCard
          navigateToTutorial={navigateToTutorial}
          inputDay={dataEntry.date}
          hide={() => {
            setIsVisible(false)
            dispatch(
              actions.answerDailyCard({
                cardName: tempCardName,
                answer: tempCardAnswer,
                userID,
                utcDateTime: dataEntry.date,
                mutuallyExclusive: tempCardName === 'flow',
              }),
            )
          }}
          onPress={() => {
            setIsVisible(false)
          }}
        />
      </ThemedModal>
      <SpinLoader isVisible={loading} setIsVisible={setLoading} text="please_wait_tutorial" />
    </>
  )
}

const contentText = {
  mood: 'daily_mood_content',
  body: 'daily_body_content',
  activity: 'daily_activity_content',
  flow: 'daily_flow_content',
  survey: 'daily_survey_content',
  notes: 'daily_notes_content',
}
const headingText = {
  mood: 'daily_mood_heading',
  body: 'daily_body_heading',
  activity: 'daily_activity_heading',
  flow: 'daily_flow_heading',
  survey: 'daily_survey_heading',
  notes: 'daily_notes_heading',
}
