import { StyleSheet } from "react-native";

// config
import colors from "../../config/colors";
import { moderateScale, moderateScaleVertical, textScale } from "../../config/responsiveSize";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScaleVertical(33),
    },
    imageStyle: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: 50,
        marginRight: moderateScale(10),
    },
    title: {
        fontSize: textScale(23),
        fontWeight: '700',
    },
    subTitle: {
        fontSize: textScale(19),
        fontWeight: '600',
    },
    bottomInfo: {
        fontSize: textScale(22),
        fontWeight: '700',
        marginLeft: moderateScale(15),
        marginTop: moderateScaleVertical(20),
    },
    subTitleBook: {
        fontSize: textScale(22),
        color: colors.blueColor,
        fontWeight: '900',
    },
});

export default styles;
