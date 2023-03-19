import { StyleSheet } from "react-native";

// config
import colors from "../../config/colors";
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";

const styles = StyleSheet.create({
    container: {
        marginTop: moderateScaleVertical(35),
    },
    btnStyle: {
        width: '90%',
        borderRadius: 8,
        alignSelf: 'center'
    },
    textStyle: {
        color: colors.white,
        fontSize: textScale(25),
        lineHeight: moderateScale(25),
        opacity: .8,
    },
    bottomContainer: {
        marginLeft: moderateScale(20),
    },
    bottomText: {
        color: colors.grayColor,
        fontWeight: '700',
        marginTop: moderateScaleVertical(20),
    },
    addBtn: {
        backgroundColor: colors.dark,
        width: moderateScale(30),
        height: moderateScale(30),
        borderRadius: moderateScale(15),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScaleVertical(15),
    },
    addBtnText: {
        color: colors.white,
        fontSize: textScale(28),
        lineHeight: moderateScale(28),
    }
});

export default styles;