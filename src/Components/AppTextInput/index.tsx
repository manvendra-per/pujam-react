import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

// Constant
import imagePath from '../../Constants/imagePath';
import colors from '../../config/colors';
// Config
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
import { AppTextInputTypes } from '../../config/types';

// Its own style
import styles from './style';
import { useAppContext } from '../../store/App.provider';

const AppTextInput = ({
    label,
    value,
    placeholder,
    inputStyle,
    textStyle,
    onPressSecure,
    ...props
}: AppTextInputTypes) => {
    const { isSecure } = useAppContext();
    return (
        <View style={ { marginBottom: moderateScaleVertical(16) } } >
            <Text style={ styles.labelStyle }>{ label }</Text>
            <View style={ { ...styles.inputStyle, ...inputStyle } }>
                <TextInput
                    value={ value }
                    placeholder={ placeholder }
                    placeholderTextColor={ colors.black }
                    style={ { ...styles.textStyle, ...textStyle } }
                    secureTextEntry={ isSecure }
                    { ...props }
                />
                { !!onPressSecure && (
                    <TouchableOpacity onPress={ onPressSecure } style={ { marginLeft: moderateScale(5), marginTop: moderateScaleVertical(12.5) } }>
                        <Image style={ { width: 20, height: 20 } } source={ isSecure ? imagePath.icvisible : imagePath.icHide } />
                    </TouchableOpacity>) }
            </View>
        </View>
    );
};

export default AppTextInput;