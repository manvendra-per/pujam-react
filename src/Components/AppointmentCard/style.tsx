import { StyleSheet } from "react-native";

// config
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";
import colors from "../../config/colors";
import commonStyles from "../../config/commonStyles";

const styles = StyleSheet.create({
    gradientContainer: {
        width: '90%',
        alignSelf: 'center',
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20),
        marginTop: moderateScaleVertical(10),
    },
    container: {
        paddingTop: moderateScaleVertical(5),
        width: '100%',
        color: colors.white,
    },
    innerContainer: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        paddingTop: moderateScaleVertical(20),
        paddingHorizontal: moderateScale(20),
        borderTopLeftRadius: moderateScale(15),
        borderTopRightRadius: moderateScale(15),
        borderBottomWidth: moderateScale(2),
    },
    imageStyle: {
        width: 80,
        height: 90,
        borderRadius: 5
    },
    cardHeading: {
        fontSize: textScale(19),
        fontWeight: '500',
        color: colors.white,
        opacity: .9,
        textTransform: 'uppercase',
        paddingTop: moderateScale(7),
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    infoContainer: {
        marginLeft: moderateScale(15),
        paddingBottom: moderateScaleVertical(20),
    },
    title: {
        fontSize: textScale(21),
        color: colors.blueColor,
        fontWeight: '700',
    },
    subTitle: {
        fontSize: textScale(17),
        fontWeight: '500',
        marginTop: moderateScaleVertical(4),
    },
    bottomInfo: {
        marginTop: moderateScaleVertical(8),
        flexDirection: 'row',
        marginBottom: moderateScaleVertical(15),
    },
    dateAndTime: {
        fontSize: textScale(17),
        fontWeight: '500',
    },
    bottomLeftText: {
        color: colors.blueColor,
        fontWeight: '600',
    },
    viewTextBox: {
        marginLeft: 'auto',
        right: moderateScale(50),
    },
    viewText: {
        color: colors.primaryColor3,
        fontWeight: '500',
    }

});

export default styles;