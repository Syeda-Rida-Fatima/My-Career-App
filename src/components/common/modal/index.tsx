import React from 'react';
import {Modal, ModalProps} from 'react-native';

type Props = {
  isVisible: boolean;
};

type IProps = Props & ModalProps;

export const AppModal = (props: IProps): JSX.Element => {
  const {isVisible, children} = props;

  return (
    <Modal
      {...props}
      transparent={false}
      animationType="none"
      visible={isVisible}>
      {children}
    </Modal>
  );
};
