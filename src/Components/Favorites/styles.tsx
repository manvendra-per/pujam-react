import { StyleSheet } from "react-native";

// config
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";
import commonStyles from "../../config/commonStyles";
import colors from "../../config/colors";



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: moderateScaleVertical(10)
    },
    imageStyle: {
        width: moderateScale(90),
        height: moderateScale(90),
        borderRadius: moderateScale(10),
    },
    textContainer: {
        marginLeft: moderateScale(8),
    },
    title: {
        color: colors.blueColor,
        fontWeight: '500',
        fontSize: textScale(20)
    },
    subTitle: {
        ...commonStyles.fontSize16,
    },
    starImageStyle: {
        width: moderateScale(25),
        height: moderateScale(25),
        marginLeft: moderateScale(15),
        tintColor: colors.secondaryColor,
        top: moderateScaleVertical(10)
    }
});

export default styles;