import React from 'react'
import styled from 'styled-components/native'
import { Text, TextWithoutTranslation } from '../../components/common/Text'
import { translate, capitalizeFLetter } from '../../i18n'
import { assets } from '../../assets'
import { Dimensions } from 'react-native'

const width = Dimensions.get('window').width

export const OnboardingCard = ({ image, heading, content }) => {
  return (
    <Container>
      <Card>
        <WelcomeContainer>
          <LaunchContainer>
            <LaunchLogo resizeMode="contain" source={assets.static.launch_icon} />
          </LaunchContainer>
          <WelcomeText>welcome_heading</WelcomeText>
        </WelcomeContainer>
        <ContentContainer>
          <ImageBox source={image} resizeMode="contain" />
          <HeadingText>{capitalizeFLetter(translate(heading))}</HeadingText>
          <ContentText>{content}</ContentText>
        </ContentContainer>
      </Card>
    </Container>
  )
}

const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const HeadingText = styled(TextWithoutTranslation)`
  margin-vertical: 30;
  font-size: 22;
  font-family: Roboto-Black;
  text-align: center;
`

const ContentText = styled(Text)`
  font-size: 16;
  text-align: center;
`

const Card = styled.View`
  height: 420;
  width: ${width * 0.95};
  elevation: 4;
  background-color: #fff;
  padding-horizontal: 20;
  border-radius: 10;
  padding-vertical: 25;
  align-items: center;
  justify-content: center;
`

const ImageBox = styled.Image`
  height: 100;
  width: 100;
`

const WelcomeContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ContentContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: auto;
  margin-bottom: auto;
`

const WelcomeText = styled(Text)`
  font-size: 28;
  text-align: left;
  width: 65%;
  font-family: Roboto-Black;
  color: #e3629b;
`
const LaunchContainer = styled.View`
  width: 30%;
  aspect-ratio: 1;
  background-color: #fff;
  elevation: 5;
  border-radius: 200;
  margin-right: 5%;
  justify-content: center;
  align-items: center;
`
const LaunchLogo = styled.Image`
  height: 85%;
  aspect-ratio: 1;
`
