import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../../config/responsiveSize';
import colors from '../../config/colors';
import commonStyles from '../../config/commonStyles';

const styles = StyleSheet.create({
    container: {
        width: moderateScale(120),
        height: moderateScale(170),
        padding: moderateScale(5),
        backgroundColor: colors.white,
    },
    infoContainer: {
        alignItems: 'center',
        marginTop: moderateScaleVertical(3)
    },
    imageStyle: {
        width: '100%',
        height: moderateScaleVertical(55),
    },
    title: {
        fontSize: textScale(8),
        fontWeight: '600'
    },
    subTitle: {
        fontSize: textScale(8),
        fontWeight: '500',
    },
    about: {
        fontSize: textScale(7),
    },
    starsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScaleVertical(10),
        marginBottom: moderateScaleVertical(5)
    },
    stars: {
        flexDirection: 'row',
    },
    star: {
        width: moderateScale(7),
        height: moderateScale(7),
        marginRight: moderateScale(4),
    },
    starsRating: {
        fontSize: textScale(7)
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: moderateScaleVertical(1)
    },
    iconStyles: {
        width: moderateScale(7),
        height: moderateScale(7),
        tintColor: colors.black,
        marginRight: moderateScale(5),
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: moderateScaleVertical(5)
    }
});

export default styles;