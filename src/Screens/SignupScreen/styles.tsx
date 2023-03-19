import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../config/responsiveSize';
import commonStyles from '../../config/commonStyles';
import colors from '../../config/colors';


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(5),
    },
    userIcon: {
        width: moderateScale(200),
        height: moderateScaleVertical(200),
        tintColor: colors.white,
        alignSelf: 'center',
        marginTop: moderateScaleVertical(55),
    },
    phoneEmailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: moderateScale(1.5),
        borderBottomColor: colors.white,
        paddingBottom: moderateScaleVertical(5),
    },
    phoneText: {
        ...commonStyles.fontSize16,
        textAlign: 'center',
        color: colors.white,
        lineHeight: 18,
        width: width - 20,
        marginTop: moderateScaleVertical(18)
    },
    btnStyle: {
        backgroundColor: colors.white,
    },
    inputStyle: {
        width: width - 20,
    },
    phoneEmailStyle: {
        fontSize: textScale(22),
        color: colors.white,
        fontWeight: '500',
        textTransform: 'uppercase',
        opacity: .9,
        marginTop: moderateScaleVertical(50),
    },
    terms: {
        flexDirection: 'row'
    },
    termsStyle: {
        ...commonStyles.fontSize20,
        color: colors.white,
    },
    emailButton: {
        marginVertical: moderateScaleVertical(40),
        marginBottom: 25,
    },
    bookerText: {
        alignSelf: 'center',
        marginTop: moderateScaleVertical(20),
    },
    signinBtn: {
        alignSelf: 'center',
        marginTop: moderateScaleVertical(5),
    },
    signinText: {
        ...commonStyles.fontSize20,
        color: colors.facebookColor,
        fontWeight: '700',
        marginBottom: moderateScaleVertical(5),
    }
});

export default styles;