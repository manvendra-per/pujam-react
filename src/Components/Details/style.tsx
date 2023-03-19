import { StyleSheet } from "react-native";

// config
import { moderateScale, moderateScaleVertical } from "../../config/responsiveSize";
import commonStyles from "../../config/commonStyles";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        marginTop: moderateScale(20),
        paddingHorizontal: moderateScale(20),
    },
    topContainer: {

    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
        ...commonStyles.fontSize24,
        fontWeight: '900',
    },
    rupeeContainer: {
        flexDirection: 'row',
    },
    rupee: {
        width: moderateScale(17),
        height: moderateScale(17),
        tintColor: colors.dark,
        top: 8,
    },
    rupeeText: {
        ...commonStyles.fontSize24,
        fontWeight: '900',
    },
    samagriRupeeText: {
        alignSelf: 'center',
    },
    time: {
        marginTop: moderateScaleVertical(10),
        fontWeight: '700',
    },
    duration: {
        ...commonStyles.fontSize20,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    checkContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScaleVertical(20),
    },
    checkImageStyle: {
        width: moderateScale(25),
        height: moderateScale(25),
        marginRight: moderateScale(15),
    },
    checkTextStyle: {
        ...commonStyles.fontSize24,
        color: colors.grayColor,
        fontWeight: '900',
        textDecorationLine: 'underline',
        textDecorationStyle: "double",
    },

});

export default styles;