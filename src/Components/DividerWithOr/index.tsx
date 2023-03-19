//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Reusable component
import AppText from '../AppText';

// constants
import strings from '../../Constants/lang';

// config
import colors from '../../config/colors';
import { moderateScaleVertical, textScale } from '../../config/responsiveSize';

// create a component
const DividerWithOr = () => {
    return (
        <View style={ styles.dividerContainer }>
            <View style={ styles.divider } />
            <AppText style={ styles.orText }>{ strings.OR }</AppText>
            <View style={ styles.divider } />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '97%',
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: moderateScaleVertical(30),
    },
    divider: {
        backgroundColor: colors.white,
        height: moderateScaleVertical(1.6),
        width: '43%',
        opacity: .8
    },
    orText: {
        fontSize: textScale(30),
        textTransform: 'uppercase',
        color: colors.white,
        opacity: .9,
    },
});

//make this component available to the app
export default DividerWithOr;
