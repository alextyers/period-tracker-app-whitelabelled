import React from 'react'
import styled from 'styled-components/native'
import { LangIcon } from './LangIcon'
import { useSelector } from '../../hooks/useSelector'
import * as selectors from '../../redux/selectors'
import * as actions from '../../redux/actions/index'
import { useDispatch } from 'react-redux'
import { ConfirmAlert } from './ConfirmAlert'
import { translate } from '../../i18n'
import { PrimaryButton } from './buttons/PrimaryButton'
import { ThemedModal } from './ThemedModal'
import { Text } from './Text'

export const LanguageSelect = ({ style = null, textStyle = null, onPress = null }) => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const [lang, setLang] = React.useState('')
  const locale = useSelector(selectors.currentLocaleSelector)
  const dispatch = useDispatch()
  return (
    <>
      <PrimaryButton textStyle={textStyle} style={style} onPress={() => setModalVisible(true)}>
        en
      </PrimaryButton>
      <ThemedModal
        onBackdropPress={() => {
          setLang('')
          setModalVisible(false)
        }}
        onModalHide={() => {
          if (lang === '') return
          if (lang === 'id') {
            ConfirmAlert(translate('are_you_sure'), translate('penal_code_warning'), () => {
              dispatch(actions.setLocale(lang))
            })
            return
          }
          if (onPress !== null) {
            onPress(lang)
            return
          }
          dispatch(actions.setLocale(lang))
        }}
        setIsVisible={setModalVisible}
        isVisible={modalVisible}
      >
        <Container>
          {['en', 'mn', 'id'].map((langItem, index) => {
            return (
              <Column
                key={index}
                onPress={() => {
                  setLang(langItem)
                  setModalVisible(false)
                }}
              >
                <LangText isActive={locale === langItem}>{langItem}</LangText>
              </Column>
            )
          })}
        </Container>
      </ThemedModal>
    </>
  )
}

const Container = styled.View`
  align-self: center;
`

const Column = styled.TouchableOpacity`
  align-items: center;
  margin-bottom: 20;
`

const LangText = styled(Text)<{ isActive: boolean }>`
  color: ${props => (props.isActive ? `#f49200` : `#fff`)};
  font-family: Roboto-Black;
  font-size: 28;
`
