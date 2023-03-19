import { StyleSheet } from 'react-native';
import colors from '../../config/colors';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../config/responsiveSize';

import commonStyles from '../../config/commonStyles';

const styles = StyleSheet.create({
    iconStyle: {
        width: moderateScale(145),
        height: moderateScale(145),
        alignSelf: 'center',
        marginTop: moderateScaleVertical(35),
    },
    iconText: {
        ...commonStyles.fontSize40,
        alignSelf: 'center',
        marginTop: moderateScaleVertical(28),
        opacity: .8,
    },
    socialLogin: {
        flexDirection: 'row', width: moderateScale(95),
        justifyContent: 'center',
        alignSelf: "center",
        marginTop: moderateScaleVertical(40),
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
        paddingHorizontal: 10,
        marginTop: moderateScaleVertical(50),
    },
    inputStyle: {
        width: '100%',
    },
    forgotPasswordText: {
        ...commonStyles.fontSize20,
        top: -10,
        color: colors.white,
    },
    btnStyle: {
        backgroundColor: colors.white
    },
    signupText: {
        ...commonStyles.fontSize20,
        marginTop: moderateScaleVertical(5),
        color: colors.primaryColor,
        fontWeight: '700',
    }

});

export default styles;