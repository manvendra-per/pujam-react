import { StyleSheet } from 'react-native';

// config
import { moderateScale } from '../../config/responsiveSize';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    headerStyle: {
        minHeight: moderateScale(48),
    },
    headerText: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: colors.white,
        textTransform: 'uppercase',
        fontWeight: '600'
    },
    iconStyle: {
        width: 50,
        height: 50,
    },
    header2: {
        flexDirection: 'row',
        paddingVertical: moderateScale(15),
    }
})

export default styles;