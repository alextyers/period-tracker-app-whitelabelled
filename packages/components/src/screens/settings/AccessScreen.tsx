import React from 'react'
import { PageContainer } from '../../components/layout/PageContainer'
import { BackgroundTheme } from '../../components/layout/BackgroundTheme'
import styled from 'styled-components/native'
import { ListItem } from './accessScreen/ListItem'
import { Header } from '../../components/common/Header'
import { LangIcon } from '../../components/common/LangIcon'
import { useSelector } from '../../hooks/useSelector'
import * as selectors from '../../redux/selectors'
import * as actions from '../../redux/actions/index'
import { useDispatch } from 'react-redux'
import { navigateAndReset } from '../../services/navigationService'
import { TouchableOpacity } from 'react-native'
import { Text } from '../../components/common/Text'
import Share from 'react-native-share'
import { translate } from '../../i18n'
import { SpinLoader } from '../../components/common/SpinLoader'
import { ConfirmAlert } from '../../components/common/ConfirmAlert'
import { LanguageSelect } from '../../components/common/LanguageSelect'

export function AccessScreen() {
  const locale = useSelector(selectors.currentLocaleSelector)
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)
  const shareLink = () => {
    // @TODO: app event
    dispatch(actions.shareApp())
    const options = {
      url: 'https://www.period-tracker-app.com/',
      message: translate('join_oky_message'),
    }
    Share.open(options)
      .then(res => null)
      .catch(err => null)
  }

  return (
    <BackgroundTheme>
      <PageContainer>
        <Header screenTitle="access_setting" />
        <Container>
          <ListItem
            title="language"
            subtitle="language_subtitle"
            renderControls={() => (
              <LanguageSelect
                onPress={lang => {
                  if (lang !== locale) {
                    setLoading(true)
                    requestAnimationFrame(() => {
                      dispatch(actions.setLocale(lang))
                    })
                  }
                }}
                textStyle={{ fontSize: 16, fontStyle: 'normal', color: '#fff' }}
                style={{
                  height: 55,
                  width: 100,
                  alignSelf: 'center',
                  marginTop: 20,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#a2c72d',
                }}
              />
            )}
          />
          <ListItem
            title="tutorial"
            subtitle="tutorial_subtitle"
            renderControls={() => (
              <ShareButton
                onPress={() => {
                  setLoading(true)
                  requestAnimationFrame(() => {
                    navigateAndReset('TutorialSecondStack', null)
                  })
                }}
              >
                <ShareButtonText>launch</ShareButtonText>
              </ShareButton>
            )}
          />
          <ListItem
            title="share"
            subtitle="share_qr_description"
            style={{ paddingBottom: 10 }}
            innerStyle={{ borderBottomWidth: 0 }}
            renderControls={() => (
              <ShareButton onPress={() => shareLink()}>
                <ShareButtonText>share_setting</ShareButtonText>
              </ShareButton>
            )}
          />
          <Empty />
        </Container>
      </PageContainer>
      <SpinLoader isVisible={loading} setIsVisible={setLoading} />
    </BackgroundTheme>
  )
}

const Container = styled.View`
  border-radius: 10;
  elevation: 3;
  background: #fff;
  margin-horizontal: 2;
  margin-bottom: 30;
`

const Empty = styled.View`
  flex: 1;
`
const TutorialText = styled(Text)`
  width: 70%;
  color: #f49200;
  align-self: center;
  font-size: 20;
  font-family: Roboto-Black;
  top: -30%;
  text-align: center;
`

const ShareButtonText = styled(Text)`
  font-size: 16;
  font-style: normal;
  color: #fff;
`

const ShareButton = styled(TouchableOpacity)`
  height: 55;
  width: 100;
  align-self: center;
  margin-top: 20;
  border-radius: 10;
  align-items: center;
  justify-content: center;
  background-color: #a2c72d;
`
const ErrorText = styled(Text)`
  font-size: 12;
  color: red;
  position: absolute;
  top: -30;
  left: -20;
`
