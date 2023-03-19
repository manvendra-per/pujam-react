import { StyleSheet } from 'react-native';

// constant
import { moderateScaleVertical, moderateScale, verticalScale, textScale, width } from '../../config/responsiveSize';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: verticalScale(8),
        borderRadius: moderateScale(5),
        flexDirection: 'row',
        justifyContent: 'center',
        width: width - 20,
        height: moderateScaleVertical(40),
    },
    text: {
        verticalAlign: 'middle',
        fontWeight: '500',
        color: colors.black,
        fontSize: textScale(22),
        lineHeight: textScale(22),
    }
});

export default styles;