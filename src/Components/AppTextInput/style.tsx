import { StyleSheet } from 'react-native';

import commonStyles from '../../config/commonStyles';
// import fontFamily from '../styles/fontFamily';
import colors from '../../config/colors';
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';

const styles = StyleSheet.create({
    inputStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: moderateScale(5),
        backgroundColor: colors.inputColor,
        paddingHorizontal: moderateScale(10),
        height: moderateScaleVertical(45),
    },
    labelStyle: {
        ...commonStyles.fontSize20,
        fontWeight: 'bold',
        // fontFamily: fontFamily.medium,
        color: colors.dark,
        marginBottom: moderateScaleVertical(0)
    },
    textStyle: {
        // ...commonStyles.fontSize16,
        fontSize: 17,
        flex: 1,
        lineHeight: 0
    }
});

export default styles;