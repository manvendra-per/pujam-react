import { StyleSheet } from 'react-native';
import { moderateScale, moderateScaleVertical, textScale } from '../../config/responsiveSize';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: moderateScale(20),
    },
    radio: {
        height: moderateScale(20),
        width: moderateScale(20),
        borderColor: colors.dark,
        borderWidth: 1,
        borderRadius: moderateScale(20),
        margin: moderateScale(10),
        alignItems: 'center',
        justifyContent: 'center'
    },
    radioStyle: {
        backgroundColor: colors.primaryColor,
        width: moderateScale(12),
        height: moderateScale(12),
        borderRadius: moderateScale(5),
    },
    radioText: {
        fontSize: textScale(18),
    }
});

export default styles;