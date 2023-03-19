import React from 'react';
import { TouchableOpacity } from 'react-native';

// Third Party Library
import LinearGradient from 'react-native-linear-gradient';
// Resuable Components
import AppText from '../AppText';
// config
import colors from '../../config/colors';
import { AppButtonTypes } from '../../config/types';
// It's own style
import styles from './style';

const AppButton: React.FC = ({
    btnText,
    gradientColors = [colors.white, colors.white],
    start = { x: 0, y: 0 },
    end = { x: 0, y: 1 },
    onPress,
    btnStyle,
    textStyle,
    isDisabled = false,
    ...restProps
}: AppButtonTypes) => {
    return (
        <LinearGradient
            colors={ gradientColors }
            start={ start }
            end={ end }
            style={ btnStyle }
        >
            <TouchableOpacity
                style={ { ...styles.button, ...btnStyle } }
                disabled={ isDisabled }
                activeOpacity={ 0.8 }
                onPress={ onPress }
                { ...restProps }
            >
                <AppText style={ { ...styles.text, ...textStyle } }>{ btnText }</AppText>
            </TouchableOpacity>
        </LinearGradient>
    );
}
export default AppButton;