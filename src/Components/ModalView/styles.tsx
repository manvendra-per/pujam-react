import { StyleSheet } from "react-native";

// config
import { height, moderateScale, moderateScaleVertical, width } from "../../config/responsiveSize";
import commonStyles from "../../config/commonStyles";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        marginBottom: moderateScaleVertical(120),
        width: width,
        borderTopLeftRadius: moderateScale(20),
        borderTopRightRadius: moderateScale(20)
    },
    popupButton: {
        width: moderateScale(60),
        height: moderateScaleVertical(17),
        backgroundColor: colors.gray,
        alignSelf: 'center',
        borderRadius: moderateScale(15),
        marginVertical: moderateScaleVertical(15),
    },
    iconContainer: {
        flexDirection: 'row',
        paddingHorizontal: moderateScale(30),
        marginVertical: moderateScaleVertical(10)
    },
    icon: {
        width: moderateScale(25),
        height: moderateScale(25),
        marginRight: moderateScale(15),
    },
    iconText: {
        ...commonStyles.fontSize24,
        fontWeight: '500'
    }
});

export default styles;