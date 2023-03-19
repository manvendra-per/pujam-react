import React from 'react';

// Third party package
import Modal from 'react-native-modal';
// component
import ModalView from '../ModalView';
// config
import { height } from '../../config/responsiveSize';
import { useAppContext } from '../../store/App.provider';

const AppModal = ({ navigation }) => {
    const { modalVisible, updateState } = useAppContext();
    return (
        <Modal
            isVisible={ modalVisible }
            statusBarTranslucent={ true }
            style={ { marginTop: height / 1.5, alignItems: 'center' } }
            onBackdropPress={ () => updateState({ modalVisible: false }) }
            backdropTransitionOutTiming={ 0 }
            backdropOpacity={ .35 }
        >
            <ModalView navigation={ navigation } />
        </Modal>
    );
};

export default AppModal;
