import { StyleSheet } from "react-native";

// config
import { moderateScaleVertical, moderateScale, textScale, width } from "../../config/responsiveSize";
import commonStyles from "../../config/commonStyles";
import colors from "../../config/colors";

const styles = StyleSheet.create({
    iconBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: moderateScale(20),
        paddingTop: moderateScaleVertical(15),
    },
    icon: {
        width: moderateScale(32),
        height: moderateScale(26),
    },
    title: {
        ...commonStyles.fontSize30,
        letterSpacing: moderateScale(1),
        marginTop: moderateScaleVertical(8),
        opacity: .9,
    },
    subTitle: {
        ...commonStyles.fontSize16,
        color: colors.white,
        opacity: .9,
        marginTop: moderateScaleVertical(10),
    },
    iconLeft: {
        width: moderateScale(63),
        height: moderateScale(63),
    },
    iconMiddle: {
        width: moderateScale(27),
        height: moderateScale(29),
        marginLeft: 'auto',
        marginRight: moderateScale(15),
        tintColor: colors.white
    },
    searchIconBox: {
        width: '75%',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 20,
        alignItems: 'center',
        top: 10,
        left: 50,
    },
    iconSearch: {
        width: 15,
        height: 15,
        tintColor: colors.lightGrey
    },
    iconMic: {
        width: 20,
        height: 20,
        tintColor: colors.lightGrey,
        marginLeft: 'auto'
    },
    inputStyle: {
        borderRadius: moderateScale(20),
        height: moderateScaleVertical(25),
        width: moderateScale(78) + '%',
        alignSelf: 'center',
        backgroundColor: colors.white,
    },
    infoContainer: {
        alignItems: 'center',
    },
    bottomText: {
        ...commonStyles.fontSize12,
        color: colors.white,
        fontWeight: '400',
        opacity: .9,
        marginTop: moderateScaleVertical(-10),
        marginBottom: moderateScaleVertical(9),
    },
    pujariText: {
        fontWeight: '700',
        opacity: 1,
    },
    sliderTitle: {
        ...commonStyles.fontSize20,
        paddingHorizontal: moderateScale(20),
        marginTop: moderateScaleVertical(20),
        fontWeight: '500',
    },
    sliderStyle: {
        marginTop: moderateScaleVertical(10),
        paddingHorizontal: moderateScale(10),
    },
    iconContainer: {
        marginRight: moderateScale(15)
    },
    cardContainer: {
        marginRight: moderateScale(10)
    },
    imageContainer: {
        width: moderateScale(87),
        height: moderateScale(87),
        borderRadius: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center',
    },
    cityIcon: {
        width: moderateScale(80),
        height: moderateScale(80),
        borderRadius: moderateScale(40),
    },
    iconText: {
        ...commonStyles.fontSize14,
        fontWeight: '500',
        textAlign: 'center',
        marginTop: moderateScaleVertical(7),
    },
    iconPujari: {
        width: moderateScale(120),
        height: moderateScale(180),
    },
    sponsor: {
        marginBottom: moderateScaleVertical(188),
    },
    iconSponsor: {
        width: moderateScale(180),
        height: moderateScale(180),
        borderRadius: moderateScale(20),
    }
});

export default styles;