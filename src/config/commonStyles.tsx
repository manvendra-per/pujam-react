import { StyleSheet } from 'react-native';
import colors from './colors';
// import fontFamily from './fontFamily';
import { moderateScale, textScale } from './responsiveSize';


export default StyleSheet.create({
    fontSize10: {
        fontSize: textScale(10),
        // fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize12: {
        fontSize: textScale(12),
        // fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize14: {
        fontSize: textScale(14),
        // fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize16: {
        fontSize: textScale(16),
        // fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize20: {
        fontSize: textScale(20),
        // fontFamily:fontFamily.regular,
        color: colors.black
    },
    fontSize22: {
        fontSize: textScale(22),
    },
    fontSize24: {
        fontSize: textScale(24),
        // fontFamily: fontFamily.medium,
    },
    fontSize30: {
        fontSize: textScale(30),
        color: colors.white,
    },
    fontSize40: {
        fontSize: textScale(35),
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: '400',
        letterSpacing: moderateScale(10),
    },

    fontSize60: {
        fontSize: textScale(60),
        color: colors.secondaryColor,
        fontWeight: 'bold',
    }
})