import Modal from 'react-native-modal'
import React from 'react'

export function ThemedModal({
  isVisible,
  setIsVisible,
  children,
  onModalHide = () => null,
  onModalWillShow = () => null,
  animationIn = 'fadeIn',
  animationOut = 'fadeOut',
  onBackdropPress = () => setIsVisible(false),
  backdropOpacity = 0.8,
}) {
  return (
    // @ts-ignore
    <Modal
      isVisible={isVisible}
      backdropOpacity={backdropOpacity}
      // @ts-ignore
      animationIn={animationIn}
      // @ts-ignore
      animationOut={animationOut}
      animationInTiming={600}
      animationOutTiming={600}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      onModalHide={onModalHide}
      onModalWillShow={onModalWillShow}
      onBackdropPress={onBackdropPress}
      useNativeDriver={true}
    >
      {children}
    </Modal>
  )
}
