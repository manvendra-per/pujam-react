//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

// Reusuable component
import { AppButton, AppText, AppTextInput } from '../../Components';
// config
import colors from '../../config/colors';
import commonStyles from '../../config/commonStyles';
import { moderateScale, moderateScaleVertical, width } from '../../config/responsiveSize';
// constant
import strings from '../../Constants/lang';

// create a component
const ConfirmationCodeScreen = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <AppText style={ styles.title }>{ strings.ENTER_CONFIRMATION_CODE }</AppText>
            <AppText style={ styles.textStyle }>{ strings.ABOUT_CONFIRMATION }<AppText style={ { ...styles.textStyle, fontWeight: 'bold' } }>{ strings.REQUEST_A_NEW_ONE }</AppText></AppText>
            <AppTextInput inputStyle={ styles.inputTextStyle } placeholder={ strings.CONFIRMATION_CODE } />
            <StatusBar backgroundColor={ colors.white } barStyle={ 'dark-content' } />
        </SafeAreaView >
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: moderateScale(20),
    },
    title: {
        ...commonStyles.fontSize22,
        textTransform: 'uppercase',
        fontWeight: '700',
        color: colors.black,
        marginTop: moderateScaleVertical(110),
    },
    textStyle: {
        ...commonStyles.fontSize20,
        marginTop: moderateScaleVertical(20)
    },
    inputTextStyle: {
        width: width - 40,
        borderWidth: .5,
        borderColor: colors.gray,
        marginTop: moderateScaleVertical(22),
    }
});

//make this component available to the app
export default ConfirmationCodeScreen;
