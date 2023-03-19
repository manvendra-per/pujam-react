import React from 'react';
import { StyleSheet } from 'react-native';

// components
import AppText from '../../AppText';
import colors from '../../../config/colors';
import { moderateScaleVertical } from '../../../config/responsiveSize';

type ErrorMessageType = {
    error: string;
    visible: boolean
}

const ErrorMessage: React.FC<ErrorMessageType> = ({ error, visible }) => {
    if (!error || !visible) return null;
    return (
        <AppText style={ styles.error }>{ error }</AppText>
    );
};

const styles = StyleSheet.create({
    error: {
        color: colors.secondaryColor,
        alignSelf: 'flex-start',
        marginTop: moderateScaleVertical(-10)
    },
});

export default ErrorMessage;
