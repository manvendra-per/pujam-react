import { StyleSheet } from "react-native";

// config
import colors from "../../config/colors";
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";
import commonStyles from "../../config/commonStyles";

const styles = StyleSheet.create({
    container: {
        padding: moderateScale(15),
        paddingHorizontal: moderateScale(10),
        backgroundColor: colors.white,
        flex: 1,
    },
    topContainer: {
        flexDirection: 'row',
        borderWidth: moderateScale(1),
        borderColor: colors.dark,
        borderRadius: moderateScale(8),
        padding: moderateScale(20),
        paddingHorizontal: moderateScale(20),
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: moderateScaleVertical(55),
    },
    imageStyle: {
        width: moderateScale(60),
        height: moderateScale(60),
        borderRadius: 50,
        marginRight: moderateScale(10),
    },
    title: {
        fontWeight: '600',
    },
    subTitle: {
        fontSize: textScale(18),
        fontWeight: '600'
    },
    subTitleBook: {
        fontWeight: '800',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(20),
        top: moderateScaleVertical(-40),
    },
    bookingContainer: {
        borderWidth: .5,
        borderColor: colors.gray,
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScaleVertical(20),
        paddingBottom: moderateScaleVertical(30)
    },
    bookingTopTextStyle: {
        ...commonStyles.fontSize24,
        fontWeight: '700',
        color: colors.grayColor,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 4,

    },
    bookingBottomTextStyle: {
        color: colors.golderColor,
        fontWeight: '700',
        marginTop: moderateScaleVertical(2),
        marginBottom: moderateScaleVertical(4),
    },
    dividerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        top: -10,
    },
    golderDivider: {
        borderWidth: 2,
        borderColor: colors.golderColor,
        borderStyle: 'dashed',
        width: '90%'
    },
    goldenDividerCircle: {
        width: moderateScale(20),
        height: moderateScale(20),
        borderRadius: 20,
        backgroundColor: colors.white,
        elevation: 2,
    },
    boxShadow: {
        shadowColor: "#000",
        shadowOpacity: .5,
        shadowRadius: 2,
    }
});

export default styles;