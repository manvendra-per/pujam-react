import { StyleSheet } from "react-native";

// config
import colors from "../../config/colors";
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";

const styles = StyleSheet.create({
    topTab: {
        flexDirection: 'row',
        marginTop: moderateScaleVertical(20),
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(32),
    },
    headerTabText: {
        fontSize: textScale(18),
        color: colors.white,
        fontWeight: '600',
        top: moderateScaleVertical(5),
        paddingBottom: moderateScaleVertical(15),
    }
});

export default styles;