import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";
import colors from "../../config/colors";


const styles = StyleSheet.create({
    inputLabel: {
        color: colors.black,
        top: moderateScale(20),
        fontSize: textScale(16)
    },
    radioLabel: {
        fontSize: textScale(16),
        color: colors.black,
        marginBottom: moderateScaleVertical(10)
    },
    radioContainer: {
        flexDirection: 'row',
        borderBottomColor: colors.blackOpacity20,
        borderBottomWidth: 1,
        width: '85%',
        marginBottom: moderateScaleVertical(10),
    },
})

export default styles;
