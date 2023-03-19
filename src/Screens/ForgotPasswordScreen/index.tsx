import React from 'react';
import { StyleSheet, View } from 'react-native';

// Reusable Component
import { AppButton, AppText, AppTextInput, Header, Screen } from '../../Components';
// constant
import strings from '../../Constants/lang';
// config
import colors from '../../config/colors';
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
import commonStyles from '../../config/commonStyles';

const ForgotPasswordScreen = () => {
    return (
        <Screen gradientBackground={ false }>
            <Header headerStyle={ { marginTop: moderateScaleVertical(20) } } iconColor={ colors.dark } iconVisible={ true } />
            <View style={ styles.container }>
                <AppText style={ styles.textStyle1 }>{ strings.PLEASE_ENTER_REGISTERED_EMAIL }</AppText>
                <AppText style={ styles.textStyle2 }>{ strings.SEND_A_VERIFICATON_CODE }</AppText>

                <AppTextInput placeholder={ strings.EMAIL } inputStyle={ styles.inputStyle } />
                <View style={ styles.btnStyle }>
                    <AppButton
                        gradientColors={ [colors.primaryColor, colors.secondaryColor] }
                        btnText={ strings.NEXT }
                        textStyle={ { color: colors.white } }
                    />
                </View>
            </View>
        </Screen>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(10),
        marginTop: moderateScaleVertical(-20),
    },
    textStyle1: {
        width: '70%',
        textAlign: 'center',
        fontWeight: '700',
    },
    textStyle2: {
        ...commonStyles.fontSize16,
        width: '80%',
        textAlign: 'center',
        marginTop: moderateScaleVertical(20),
        fontWeight: '500',
    },
    inputStyle: {
        width: '100%',
        marginTop: moderateScaleVertical(12),
    },
    btnStyle: {
        marginTop: moderateScaleVertical(10),
        borderRadius: moderateScale(5),
        overflow: 'hidden',
    }
})

export default ForgotPasswordScreen;
