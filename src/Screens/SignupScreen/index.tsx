import React, { useEffect, useRef, useState } from 'react';
import { Animated, Image, Pressable, ScrollView, StatusBar, View } from 'react-native';

// Third party package
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// Reusuable Components
import { AppButton, AppText, AppTextInput, PhoneNumber, Screen } from '../../Components';
// constants
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';
import NavigationStrings from '../../Constants/NavigationStrings';
// config
import colors from '../../config/colors';
import { moderateScale, moderateScaleVertical, width } from '../../config/responsiveSize';
import { SignupScreenTypes } from '../../config/types';
// It's own style
import styles from './styles';

const SignupScreen = ({ navigation }: SignupScreenTypes) => {

    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        referralCode: '',
        isChecked: false,
        isSecure: true,
    });

    const animation = useRef(new Animated.Value(0)).current;

    const updateState = (data) => setState(state => ({ ...state, ...data }));

    const translateOnX = animation.interpolate({
        inputRange: [0, width],
        outputRange: [1, 184],
    })

    const { name, phone, email, password, referralCode, isChecked, isSecure } = state;

    useEffect(() => {
        return updateState({ isChecked });
    }, [isChecked]);

    return (
        <Screen>
            <ScrollView style={ styles.container }>
                <Image source={ imagePath.icUser } style={ styles.userIcon } />
                {/* <View style={ { width: 'auto', height: 'auto' } }>
                    <User width={ 500 } height={ 500 } />
                </View> */}

                <KeyboardAwareScrollView
                    enableAutomaticScroll={ true }
                    enableOnAndroid={ true }
                >
                    <View style={ styles.phoneEmailContainer }>
                        <AppText style={ styles.phoneEmailStyle }>{ strings.PHONE }</AppText>
                        <AppText style={ styles.phoneEmailStyle }>{ strings.EMAIL }</AppText>
                    </View>
                    <Animated.View style={ {
                        width: '50%',
                        backgroundColor: colors.white,
                        height: '.2%',
                        transform: [
                            {
                                translateX: translateOnX,
                            }
                        ]
                    } } />

                    <ScrollView
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={ false }
                        style={ { width: width } }
                        scrollEventThrottle={ 16 }
                        onScroll={ Animated.event(
                            [{ nativeEvent: { contentOffset: { x: animation } } }],
                            { useNativeDriver: false }) }
                    >
                        <View style={ { width: width } }>
                            <PhoneNumber />
                            <AppText style={ styles.phoneText }>{ strings.PHONE_TEXT }</AppText>
                            <View style={ { marginTop: moderateScaleVertical(30) } }>
                                <AppButton onPress={ () => navigation.navigate(NavigationStrings.CONFIRMATION_CODE_SCREEN) } btnStyle={ styles.btnStyle } btnText={ strings.NEXT } />
                            </View>
                        </View>

                        <View style={ { width: width, marginTop: moderateScaleVertical(26) } }>
                            <AppTextInput inputStyle={ styles.inputStyle } placeholder={ strings.NAME } />
                            <AppTextInput inputStyle={ styles.inputStyle } placeholder={ strings.EMAIL } />
                            <AppTextInput inputStyle={ styles.inputStyle } placeholder={ strings.PASSWORD } isSecure={ isSecure } onPressSecure={ () => updateState({ isSecure: !isSecure }) } />
                            <AppTextInput inputStyle={ styles.inputStyle } placeholder={ strings.REFERRAL_CODE } />
                            <Pressable onPress={ () => updateState({ isChecked: !isChecked }) } style={ styles.terms }>
                                {
                                    !!isChecked ?
                                        <Image style={ { width: moderateScale(30), height: moderateScale(30), tintColor: colors.white } } source={ imagePath.icCheck } />
                                        :
                                        <Image style={ { width: moderateScale(30), height: moderateScale(30), tintColor: colors.white } } source={ imagePath.icUnCheck } />
                                }
                                <View style={ { marginLeft: moderateScale(10) } }>
                                    <AppText style={ styles.termsStyle }>{ strings.I_AGREE_TO_THE_PUJAM_PRIVACY_POLICY }</AppText>
                                    <AppText style={ styles.termsStyle }>{ strings.TERMS_AND_CONDITION }</AppText>
                                </View>
                            </Pressable>
                            <View style={ [styles.emailButton, { marginBottom: moderateScaleVertical(50) }] }>
                                <AppButton onPress={ () => navigation.navigate(NavigationStrings.CONFIRMATION_CODE_SCREEN) } btnStyle={ styles.btnStyle } btnText={ strings.NEXT } />
                            </View>

                        </View>
                    </ScrollView>


                    {/* <AppText style={ styles.bookerText }>{ strings.ALREADY_HAVE_A_BOOKER_ACCOUNT }</AppText>
                <Pressable style={ styles.signinBtn } onPress={ () => navigation.navigate(NavigationStrings.LOGIN_SCREEN) }>
                    <AppText style={ styles.signinText }>{ strings.SIGNIN_NOW }</AppText>
            </Pressable> */}
                </KeyboardAwareScrollView>
            </ScrollView>
            <StatusBar backgroundColor={ colors.primaryColor } barStyle={ 'light-content' } />
        </Screen>
    );
};

export default SignupScreen;
