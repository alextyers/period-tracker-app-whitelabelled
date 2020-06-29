import React from 'react'
import styled from 'styled-components/native'
import { BackgroundTheme } from '../../components/layout/BackgroundTheme'
import { Text } from '../../components/common/Text'
import { Header } from '../../components/common/Header'
import { Icon } from '../../components/common/Icon'
import { assets } from '../../assets/index'
import { useSelector } from '../../hooks/useSelector'
import * as selectors from '../../redux/selectors'
import { useTextToSpeechHook } from '../../hooks/useTextToSpeechHook'
import { aboutScreenText } from '../../config'

export const AboutScreen = ({ navigation }) => {
  const locale = useSelector(selectors.currentLocaleSelector)

  useTextToSpeechHook({ navigation, text: aboutScreenText() })

  return (
    <BackgroundTheme>
      <PageContainer showsVerticalScrollIndicator={false}>
        <Header style={{ paddingLeft: 10, paddingRight: 15 }} screenTitle="about" />
        <Container>
          <TextStyle style={{ paddingTop: 20 }}>about_content_1</TextStyle>
          <HeadingText>about_heading_1</HeadingText>
          <TextStyle>about_content_2</TextStyle>
          <HeadingText>about_heading_2</HeadingText>
          <TextStyle>about_content_3</TextStyle>
          <TextStyle>about_content_4</TextStyle>
          <TextStyle>about_content_5</TextStyle>
          <HeadingText>about_heading_3</HeadingText>
          <TextStyle>about_content_6</TextStyle>
          <HeadingText>about_heading_4</HeadingText>
          <TextStyle>about_content_7</TextStyle>
          <HeadingText>about_heading_5</HeadingText>
          <TextStyle>about_content_8</TextStyle>
          <TextStyle style={{ paddingBottom: 30 }}>about_content_9</TextStyle>
        </Container>
      </PageContainer>
    </BackgroundTheme>
  )
}

const Container = styled.View`
  border-radius: 10;
  elevation: 2;
  flex: 1;
  margin-bottom: 30;
  margin-horizontal: 10;
  flex-direction: column;
  overflow: hidden;
`

const HeadingText = styled(Text)`
  padding-left: 42;
  padding-right: 42;
  font-size: 16;
  font-family: Roboto-Black;
  text-align: justify;
  color: #4d4d4d;
  background-color: #fff;
`
const TextStyle = styled(Text)`
  padding-left: 42;
  padding-right: 42;
  font-size: 16;
  text-align: justify;
  color: #4d4d4d;
  background-color: #fff;
`

const ImagesContainer = styled.View`
  align-items: flex-end;
  padding-top: 30;
  padding-right: 25;
  background-color: #fff;
`

const PageContainer = styled.ScrollView``
