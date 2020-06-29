import React from 'react'
import { PageContainer } from '../components/layout/PageContainer'
import { BackgroundTheme } from '../components/layout/BackgroundTheme'
import styled from 'styled-components/native'
import { ListItem } from '../components/common/ListItem'
import { Header } from '../components/common/Header'
import { PrimaryButton } from '../components/common/buttons/PrimaryButton'
import { Switcher } from './settings/Switcher'
import { navigate } from '../services/navigationService'
import { useDispatch } from 'react-redux'
import * as actions from '../redux/actions'
import { ConfirmAlert } from '../components/common/ConfirmAlert'
import { useSelector } from '../hooks/useSelector'
import * as selectors from '../redux/selectors'
import { translate } from '../i18n/index'
import { SpinLoader } from '../components/common/SpinLoader'
import { settingsScreenText } from '../config'
import { useTextToSpeechHook } from '../hooks/useTextToSpeechHook'
import { closeOutTTs } from '../services/textToSpeech'

export function SettingsScreen({ navigation }) {
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false)

  const currentUser = useSelector(selectors.currentUserSelector)
  const hasPasswordRequestOn = useSelector(selectors.isLoginPasswordActiveSelector)
  const hasTtsActive = useSelector(selectors.isTtsActiveSelector)

  useTextToSpeechHook({ navigation, text: settingsScreenText() })

  return (
    <BackgroundTheme>
      <ScrollContainer>
        <Header showGoBackButton={false} screenTitle="settings" />
        <Container>
          <NavigationLink onPress={() => navigate('AboutScreen', null)}>
            <ListItem title="about" description="about_info" />
          </NavigationLink>
          <NavigationLink onPress={() => navigate('TermsScreen', null)}>
            <ListItem title="t_and_c" description="t_and_c_info" />
          </NavigationLink>
          <NavigationLink onPress={() => navigate('PrivacyScreen', null)}>
            <ListItem title="privacy_policy" description="privacy_info" />
          </NavigationLink>
          <NavigationLink onPress={() => navigate('AccessScreen', null)}>
            <ListItem title="access_setting" description="settings_info" />
          </NavigationLink>
          <ListItem
            title="text_to_speech"
            description="text_to_speech_info"
            renderControls={() => (
              <Switcher
                value={hasTtsActive}
                onSwitch={val => {
                  closeOutTTs()
                  dispatch(actions.setTtsActive(val))
                }}
              />
            )}
          />
          <ListItem
            title="password_request"
            renderControls={() => (
              <Switcher
                value={hasPasswordRequestOn}
                onSwitch={val => {
                  dispatch(actions.setLoginPassword(val))
                }}
              />
            )}
            description="password_request_info"
            style={{ borderBottomWidth: 0 }}
          />
        </Container>
        <Row style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
          <PrimaryButton
            textStyle={{ color: 'white' }}
            style={{ flex: 1, backgroundColor: '#f49200', marginRight: 5 }}
            onPress={() =>
              ConfirmAlert(
                translate('are_you_sure'),
                translate('logout_account_description'),
                () => {
                  setLoading(true)
                  setTimeout(() => {
                    dispatch(actions.logoutRequest())
                  }, 100)
                },
              )
            }
          >
            logout
          </PrimaryButton>
          <PrimaryButton
            style={{ flex: 1, backgroundColor: '#EFEFEF' }}
            onPress={() => {
              ConfirmAlert(
                translate('are_you_sure'),
                translate('delete_account_description'),
                () => {
                  setTimeout(() => {
                    dispatch(
                      actions.deleteAccountRequest({
                        name: currentUser.name,
                        password: currentUser.password,
                        setLoading,
                      }),
                    )
                  }, 100)
                },
              )
            }}
          >
            delete_account_button
          </PrimaryButton>
          <PrimaryButton
            style={{ flex: 1, marginLeft: 5, backgroundColor: '#a2c72d' }}
            textStyle={{ color: 'white' }}
            onPress={() => navigate('ContactUsScreen', null)}
          >
            contact_us
          </PrimaryButton>
        </Row>
      </ScrollContainer>
      <SpinLoader isVisible={loading} setIsVisible={setLoading} />
    </BackgroundTheme>
  )
}

const ScrollContainer = styled.View`
  height: 100%;
  width: 100%;
  padding-horizontal: 10;
`

const Container = styled.View`
  height: 75%;
  border-radius: 10;
  elevation: 3;
  background: #fff;
  margin-horizontal: 2;
`

const Row = styled.View`
  flex-direction: row;
`

const NavigationLink = styled.TouchableOpacity`
  flex: 1;
`

const Overlay = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`
