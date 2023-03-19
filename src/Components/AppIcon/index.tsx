import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
// Reusuable component
import AppText from '../AppText';
// config
import colors from '../../config/colors';
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
import commonStyles from '../../config/commonStyles';
import { AppIconTypes } from '../../config/types';


const AppIcon = ({ iconName, iconStyle, iconText, iconTextStyle }: AppIconTypes) => {
    return (
        <View style={ styles.container }>
            <LinearGradient colors={ [colors.primaryColor, colors.secondaryColor] } style={ styles.linearGradient }>
                <Image style={ { ...styles.imageStyle, ...iconStyle } } source={ iconName } />
            </LinearGradient>
            <AppText style={ { ...styles.iconTextStyle, ...iconTextStyle } }>{ iconText }</AppText>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    linearGradient: {
        width: moderateScale(63),
        height: moderateScale(63),
        borderRadius: moderateScale(50),
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageStyle: {
        width: moderateScale(30),
        height: moderateScale(30),
        tintColor: colors.white
    },
    iconTextStyle: {
        ...commonStyles.fontSize16,
        marginTop: moderateScaleVertical(12),
        fontWeight: '600'
    },
});

export default AppIcon;
