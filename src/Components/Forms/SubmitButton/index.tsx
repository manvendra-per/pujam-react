import React from 'react';
import { StyleSheet, View } from 'react-native';

// Third party Library
import { useFormikContext } from 'formik';
// components
import AppButton from '../../AppButton';
// config
import { moderateScaleVertical } from '../../../config/responsiveSize';

const SubmitButton: React.FC = ({ title, btnStyle, gradientColors, ...otherProps }) => {
    const { handleSubmit } = useFormikContext();
    return (
        <View style={ { ...styles.btnStyle, ...btnStyle } }>
            <AppButton gradientColors={ gradientColors } btnText={ title } onPress={ handleSubmit } { ...otherProps } />
        </View>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        marginTop: moderateScaleVertical(20)
    },
});

export default SubmitButton;
