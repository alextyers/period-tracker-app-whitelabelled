import React from 'react'
import styled from 'styled-components/native'
import { BackgroundTheme } from '../../components/layout/BackgroundTheme'
import { Header } from '../../components/common/Header'
import { Text } from '../../components/common/Text'
import { useTextToSpeechHook } from '../../hooks/useTextToSpeechHook'
import { privacyScreenText } from '../../config'
import { ScrollView, Dimensions, Platform } from 'react-native'

const width = Dimensions.get('window').width
export function PrivacyScreen({ navigation }) {
  const [page, setPage] = React.useState(0)
  const isNoScrollContent = Platform.Version <= 23
  const numPages = isNoScrollContent ? 20 : 6
  useTextToSpeechHook({ navigation, text: privacyScreenText() })

  return (
    <BackgroundTheme>
      <Header screenTitle="privacy_policy" />
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
        <HeadingText style={{ paddingTop: 40 }}>privacy_heading_1</HeadingText>
        <ContentText>privacy_content_1</ContentText>

        <HeadingText>privacy_heading_2</HeadingText>
        <ContentText>privacy_content_2</ContentText>

        <HeadingText>privacy_heading_3</HeadingText>
        <HeadingText>privacy_heading_4</HeadingText>
        <ContentText style={{ paddingBottom: 40 }}>privacy_content_3</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>privacy_heading_5</HeadingText>
        <ContentText>privacy_content_4</ContentText>
        <ContentText>privacy_content_5</ContentText>
        <ContentText>privacy_content_6</ContentText>
        <ContentText>privacy_content_7</ContentText>
        <ContentText>privacy_content_8</ContentText>
        <ContentText>privacy_content_9</ContentText>
        <ContentText style={{ paddingBottom: 40 }}>privacy_content_10</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>privacy_heading_6</HeadingText>
        <ContentText>privacy_content_11</ContentText>
        <ContentText>privacy_content_12</ContentText>
        <ContentText>privacy_content_13</ContentText>

        <HeadingText>privacy_heading_7</HeadingText>
        <ContentText>privacy_content_14</ContentText>
        <ContentText style={{ paddingBottom: 40 }}>privacy_content_15</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>privacy_heading_8</HeadingText>
        <ContentText>privacy_content_16</ContentText>
        <ContentText>privacy_content_17</ContentText>
        <ContentText>privacy_content_18</ContentText>

        <HeadingText>privacy_heading_9</HeadingText>
        <ContentText>privacy_content_19</ContentText>
        <ContentText>privacy_content_20</ContentText>
        <ContentText style={{ paddingBottom: 40 }}>privacy_content_21</ContentText>
      </Container>
      <Container page={page}>
        <HeadingText style={{ paddingTop: 40 }}>privacy_heading_10</HeadingText>
        <ContentText>privacy_content_22</ContentText>
        <HeadingText>privacy_heading_11</HeadingText>
        <ContentText>privacy_content_23</ContentText>
        <ContentText style={{ paddingBottom: 40 }}>privacy_content_24</ContentText>
      </Container>
      <Container page={page}>
        <ContentText style={{ paddingTop: 40 }}>privacy_content_25</ContentText>
        <ContentText>privacy_content_26</ContentText>

        <HeadingText>privacy_heading_12</HeadingText>
        <ContentText>privacy_content_27</ContentText>

        <HeadingText>privacy_heading_13</HeadingText>
        <ContentText>privacy_content_28</ContentText>
        <ContentText style={{ paddingBottom: 40 }}>privacy_content_29</ContentText>
      </Container>
    </>
  )
}
const NoScrollContent = () => {
  return (
    <>
      <NoScrollContainer>
        <HeadingText>privacy_heading_1</HeadingText>
        <ContentText>privacy_content_1</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_1_1</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_2</HeadingText>
        <ContentText>privacy_content_2</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_3</HeadingText>
        <HeadingText>privacy_heading_4</HeadingText>
        <ContentText>privacy_content_3</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_5</HeadingText>
        <ContentText>privacy_content_4</ContentText>
        <ContentText>privacy_content_5</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_6</ContentText>
        <ContentText>privacy_content_7</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_8</ContentText>
        <ContentText>privacy_content_9</ContentText>
        <ContentText>privacy_content_10</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_6</HeadingText>
        <ContentText>privacy_content_11</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_12</ContentText>
        <ContentText>privacy_content_13</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_7</HeadingText>
        <ContentText>privacy_content_14</ContentText>
        <ContentText>privacy_content_15</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_8</HeadingText>
        <ContentText>privacy_content_16</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_17</ContentText>
        <ContentText>privacy_content_18</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_9</HeadingText>
        <ContentText>privacy_content_19</ContentText>
        <ContentText>privacy_content_20</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_21</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_10</HeadingText>
        <ContentText>privacy_content_22</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_11</HeadingText>
        <ContentText>privacy_content_23</ContentText>
        <ContentText>privacy_content_24</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_25</ContentText>
        <ContentText>privacy_content_26</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_12</HeadingText>
        <ContentText>privacy_content_27</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <HeadingText>privacy_heading_13</HeadingText>
        <ContentText>privacy_content_28</ContentText>
      </NoScrollContainer>
      <NoScrollContainer>
        <ContentText>privacy_content_29</ContentText>
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
  width: 90%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  bottom: 20;
  align-self: center;
  flex-direction: row;
`

const Circle = styled.View<{ isHighlighted: boolean }>`
  height: 15;
  width: 15;
  margin-horizontal: 2.5
  margin-bottom: 2.5
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
  color: #4d4d4d;
  text-align: justify;
`
const HeadingText = styled(Text)`
  font-size: 16;
  font-family: Roboto-Black;
  text-align: justify;
  color: #4d4d4d;
`
