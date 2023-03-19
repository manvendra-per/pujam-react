import React from 'react';
import { StyleSheet, Pressable, View } from 'react-native';

// components
import AppText from '../AppText';
// config
import { moderateScale, moderateScaleVertical, textScale } from '../../config/responsiveSize';
import colors from '../../config/colors';


const ApButton2: React.FC = ({ onPress, title, btnStyle }) => {
    return (
        <View style={ [styles.container, btnStyle] }>
            <Pressable onPress={ onPress }>
                <AppText style={ styles.title }>{ title }</AppText>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: moderateScale(50),
        height: moderateScaleVertical(15),
        borderWidth: moderateScale(1),
        borderColor: colors.secondaryColor,
        alignItems: 'center',

    },
    title: {
        fontSize: textScale(7),
    }
});

export default ApButton2;
