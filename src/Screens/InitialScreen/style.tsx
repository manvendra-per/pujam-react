import { StyleSheet } from 'react-native';
import colors from '../../config/colors';

// config
import { moderateScale, moderateScaleVertical, textScale } from '../../config/responsiveSize';
import commonStyles from '../../config/commonStyles';
import { moderateVerticalScale } from 'react-native-size-matters';

const styles = StyleSheet.create({
    iconStyle: {
        width: moderateScale(145),
        height: moderateScale(145),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(90)
    },
    iconText: {
        ...commonStyles.fontSize40,
        alignSelf: 'center',
        marginTop: moderateScaleVertical(28),
        opacity: .8,
    },
    or: {
        textAlign: 'center',
        color: colors.secondaryColor,
        fontWeight: 'bold',
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10),
    },
    btnStyle: {
        backgroundColor: colors.white,
    },
    bottomText: {
        color: colors.white,
        fontWeight: '500',
        fontSize: textScale(20),
        letterSpacing: textScale(.5),
    }

});

export default styles;