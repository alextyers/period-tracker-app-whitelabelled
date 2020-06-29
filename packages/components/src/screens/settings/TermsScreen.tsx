import React from 'react'
import styled from 'styled-components/native'
import { BackgroundTheme } from '../../components/layout/BackgroundTheme'
import { Header } from '../../components/common/Header'
import { Text } from '../../components/common/Text'
import { useTextToSpeechHook } from '../../hooks/useTextToSpeechHook'
import { termsScreenText } from '../../config'
import { ScrollView, Dimensions, Platform } from 'react-native'

const width = Dimensions.get('window').width

export const TermsScreen = ({ navigation }) => {
  const [page, setPage] = React.useState(0)
  const isNoScrollContent = Platform.Version <= 23
  const numPages = isNoScrollContent ? 11 : 5

  useTextToSpeechHook({ navigation, text: termsScreenText() })

  return (
    <BackgroundTheme>
      <Header
        style={{ paddingLeft: 10, paddingRight: 15 }}
        textStyle={{ textTransform: 'capitalize' }}
        screenTitle="terms"
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ width: numPages * width }}
        horizontal
        onMomentumScrollEnd={event => {
          setPage(Math.round(event.nativeEvent.contentOffset.x / width))
        }}
        scrollEnabled={true}
        pagingEnabled={true}
      >
        {!isNoScrollContent && <NormalContent page={page} />}
        {isNoScrollContent && <NoScrollContent />}
      </ScrollView>
      <Buttons>
        {new Array(numPages).fill(0).map((item, index) => {
          return <Circle key={index} isHighlighted={index === page} />
        })}
      </Buttons>
    </BackgroundTheme>
  )
}

const NormalContent = ({ page }) => {
  return (
    <>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>t_and_c_heading_1</HeadingText>
        <HeadingText>t_and_c_heading_2</HeadingText>

        <HeadingText>t_and_c_heading_3</HeadingText>
        <ContentText>t_and_c_content_1</ContentText>
        <ContentText style={{ paddingBottom: 30 }}>t_and_c_content_2</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>t_and_c_heading_4</HeadingText>
        <ContentText>t_and_c_content_3</ContentText>
        <ContentText style={{ paddingBottom: 30 }}>t_and_c_content_4</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>t_and_c_heading_5</HeadingText>
        <ContentText>t_and_c_content_5</ContentText>

        <HeadingText>t_and_c_heading_6</HeadingText>
        <ContentText>t_and_c_content_6</ContentText>

        <HeadingText>t_and_c_heading_7</HeadingText>
        <ContentText>t_and_c_content_7</ContentText>
        <HeadingText>t_and_c_heading_8</HeadingText>
        <ContentText>t_and_c_content_8</ContentText>

        <HeadingText>t_and_c_heading_9</HeadingText>
        <ContentText style={{ paddingBottom: 30 }}>t_and_c_content_9</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>t_and_c_heading_10</HeadingText>
        <ContentText>t_and_c_content_10</ContentText>
        <ContentText>t_and_c_content_11</ContentText>

        <HeadingText>t_and_c_heading_11</HeadingText>
        <ContentText>t_and_c_content_12</ContentText>
        <HeadingText>t_and_c_heading_12</HeadingText>
        <ContentText>t_and_c_content_13</ContentText>
        <ContentText>t_and_c_content_14</ContentText>
        <ContentText style={{ paddingBottom: 30 }}>t_and_c_content_15</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>t_and_c_heading_13</HeadingText>
        <ContentText>t_and_c_content_17</ContentText>
        <ContentText>t_and_c_content_18</ContentText>

        <HeadingText>t_and_c_heading_14</HeadingText>
        <ContentText>t_and_c_content_19</ContentText>
        <HeadingText>t_and_c_heading_15</HeadingText>
        <ContentText>t_and_c_content_20</ContentText>

        <HeadingText>t_and_c_heading_16</HeadingText>
        <ContentText style={{ paddingBottom: 30 }}>t_and_c_content_21</ContentText>
      </Container>
    </>
  )
}
const NoScrollContent = () => {
  return (
    <>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_1</HeadingText>
        <HeadingText>t_and_c_heading_2</HeadingText>

        <HeadingText>t_and_c_heading_3</HeadingText>
        <ContentText>t_and_c_content_1</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>t_and_c_content_2</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_4</HeadingText>
        <ContentText>t_and_c_content_3</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>t_and_c_content_4</ContentText>
        <HeadingText>t_and_c_heading_5</HeadingText>
        <ContentText>t_and_c_content_5</ContentText>

        <HeadingText>t_and_c_heading_6</HeadingText>
        <ContentText>t_and_c_content_6</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_7</HeadingText>
        <ContentText>t_and_c_content_7</ContentText>
        <HeadingText>t_and_c_heading_8</HeadingText>
        <ContentText>t_and_c_content_8</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_9</HeadingText>
        <ContentText>t_and_c_content_9</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_10</HeadingText>
        <ContentText>t_and_c_content_10</ContentText>
        <ContentText>t_and_c_content_11</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_11</HeadingText>
        <ContentText>t_and_c_content_12</ContentText>
        <HeadingText>t_and_c_heading_12</HeadingText>
        <ContentText>t_and_c_content_13</ContentText>
        <ContentText>t_and_c_content_14</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>t_and_c_content_15</ContentText>
        <HeadingText>t_and_c_heading_13</HeadingText>
        <ContentText>t_and_c_content_17</ContentText>
        <ContentText>t_and_c_content_18</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_14</HeadingText>
        <ContentText>t_and_c_content_19</ContentText>
        <HeadingText>t_and_c_heading_15</HeadingText>
        <ContentText>t_and_c_content_20</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>t_and_c_heading_16</HeadingText>
        <ContentText>t_and_c_content_21</ContentText>
      </NoScrollContainer>
    </>
  )
}

const Container = ({ children, page }) => {
  const scrollRef = React.useRef(null)

  React.useEffect(() => {
    if (scrollRef === null) return
    scrollRef.current.scrollTo({ y: 0 }) // resets the page
  }, [page])

  return (
    <ScrollContainer ref={scrollRef} showsVerticalScrollIndicator={false}>
      <ViewContainer>{children}</ViewContainer>
    </ScrollContainer>
  )
}

const ScrollContainer = styled.ScrollView`
  flex: 1;
  height: 100%;
`
const Buttons = styled.View`
  position: absolute;
  bottom: 20;
  align-self: center;
  flex-direction: row;
`

const Circle = styled.View<{ isHighlighted: boolean }>`
  height: 15;
  width: 15;
  margin-horizontal: 2.5
  border-radius: 10;
  elevation: ${props => (props.isHighlighted ? 5 : 2)};
  background-color: ${props => (props.isHighlighted ? '#f9c7c1' : `#efefef`)};
`
const ViewContainer = styled.View`
  width: 95%;
  border-radius: 10;
  padding-left: 42;
  padding-right: 42;
  background-color: #fff;
  elevation: 2;
  margin-bottom: 30;
  margin-left: auto;
  margin-right: auto;
`

const NoScrollContainer = styled.View`
  width: ${width * 0.95};
  height: 90%;
  border-radius: 10;
  padding-top: 30;
  padding-bottom: 30;
  padding-left: 42;
  padding-right: 42;
  background-color: #fff;
  elevation: 2;
  margin-bottom: 30;
  margin-left: ${width * 0.025};
  margin-right: ${width * 0.025};
`

const ContentText = styled(Text)`
  font-size: 14;
  text-align: justify;
  color: #4d4d4d;
`
const HeadingText = styled(Text)`
  font-size: 16;
  font-family: Roboto-Black;
  text-align: justify;
  color: #4d4d4d;
`
