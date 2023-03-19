import React from 'react';
import { Image, SafeAreaView, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
// Reusuable Component
import AppText from '../AppText';
// Constant
import imagePath from '../../Constants/imagePath';
// config
import colors from '../../config/colors';
// It's own style
import styles from './style';

const Header = ({
    linearGradient = false,
    children,
    title,
    iconVisible = false,
    iconColor = colors.white,
    icon = imagePath.icLeftAngle,
    onPress,
    headerStyle,
    headerTextStyle,
}) => {
    const navigation = useNavigation()
    return (
        !linearGradient ?
            <SafeAreaView style={ { ...styles.headerStyle, ...headerStyle } }>
                <AppText style={ { ...styles.headerText, ...headerTextStyle } }>{ children }</AppText>
                <TouchableOpacity
                    style={ styles.iconStyle }
                    onPress={ !!onPress ? () => { } : () => navigation.goBack() }
                >
                    { !!iconVisible ?
                        <Image style={ { tintColor: iconColor } } source={ icon } />
                        :
                        <Image style={ { tintColor: colors.dark } } source={ icon } />
                    }
                </TouchableOpacity>
            </SafeAreaView>
            :
            <LinearGradient
                colors={ [colors.primaryColor, colors.secondaryColor] }
            >
                <SafeAreaView style={ styles.header2 }>
                    <AppText style={ { ...styles.headerText, ...headerTextStyle } }>{ title }</AppText>
                    <TouchableOpacity
                        style={ styles.iconStyle }
                        onPress={ !!onPress ? onPress : () => navigation.goBack() }
                    >
                        { !!iconVisible ?
                            <Image style={ { tintColor: iconColor } } source={ icon } />
                            :
                            <Image style={ { tintColor: colors.dark } } source={ icon } />
                        }
                    </TouchableOpacity>
                </SafeAreaView>
                { children }
            </LinearGradient>

    );
};

export default Header;