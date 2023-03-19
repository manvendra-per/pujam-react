import { StyleSheet } from "react-native";
import { moderateScale, moderateScaleVertical, width } from "../../config/responsiveSize";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    containerStyle: {
        height: moderateScaleVertical(45),
        width: width - 20,
        borderRadius: moderateScale(5),
        marginTop: moderateScaleVertical(50),
        backgroundColor: colors.inputColor,
    },
    textInputStyle: {
        color: colors.dark,
        height: moderateScaleVertical(45),
    },
    textContainerStyle: {
        borderRadius: moderateScale(5),
        backgroundColor: colors.inputColor
    },
    countryPickerButtonStyle: {

        left: 7,
    },
    countryText: {
        position: 'absolute',
        top: moderateScaleVertical(59.5),
        fontSize: 17,
        fontWeight: '500',
        left: 10,
    },
    verticalDivider: {
        position: 'absolute',
        top: moderateScaleVertical(58),
        height: moderateScaleVertical(30),
        width: moderateScale(1),
        backgroundColor: colors.dark,
        left: moderateScale(75),
    }

});

export default styles;