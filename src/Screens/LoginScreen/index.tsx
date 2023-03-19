import React, { useEffect } from 'react';
import { Image, ScrollView, View } from 'react-native';

// It's own style
import styles from './style';
// Third party package
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
// Reusuable components
import { AppForm, AppFormField, AppText, DividerWithOr, Header, Loader, SubmitButton } from '../../Components';
// constants
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';
// config
import colors from '../../config/colors';
import { height, moderateScaleVertical } from '../../config/responsiveSize';
// store
import { useAppContext } from '../../store/App.provider';
import { signoutRequest } from '../../store/api';
import { LoginUser, getAuthStatus, getAuthenticationFailedMsg, getLoadingState, getUserDetails } from '../../store/auth';
import { receiveBanner, receiveDetails } from '../../store/details';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = ({ navigation }) => {
    const { isSecure, updateState, dispatch } = useAppContext();

    const isLoading = useSelector(getLoadingState);
    const authStatus = useSelector(getAuthStatus);
    const authFaildMsg = useSelector(getAuthenticationFailedMsg);
    const details = useSelector(getUserDetails);

    const handleFormSubmit = (email, password) => {
        dispatch(LoginUser(email, password));
    };

    useEffect(() => {
        if (details === null) {
            Toast.show({
                type: 'error',
                text1: authFaildMsg
            });
            dispatch(signoutRequest());
        } else {
            dispatch(receiveDetails());
            dispatch(receiveBanner());
        }
    }, [authStatus]);

    return (
        <>
            <LinearGradient
                colors={ [colors.primaryColor, colors.secondaryColor] }
                style={ { height: height * 1.2 } }
                start={ { x: 0, y: 0 } }
                end={ { x: 0, y: .7 } }
            >
                <Loader isLoading={ isLoading } />
                <Header headerStyle={ { marginTop: moderateScaleVertical(20) } } iconVisible />
                <KeyboardAwareScrollView
                    enableOnAndroid={ true }
                    enableAutomaticScroll={ true }
                >
                    <ScrollView style={ { marginVertical: moderateScaleVertical(5) } }>
                        <Image source={ imagePath.icIcon2 } style={ styles.iconStyle } />
                        <AppText style={ styles.iconText }>{ strings.PUJAM }</AppText>
                        <View style={ styles.socialLogin }>
                            <Image source={ imagePath.icGooglef } />
                            <Image source={ imagePath.icFacebookf } style={ { marginLeft: 'auto' } } />
                        </View>

                        <DividerWithOr />

                        <View style={ styles.inputContainer }>
                            <AppForm
                                initialValues={ { email: '', password: '' } }
                                onSubmit={ values => handleFormSubmit(values.email, values.password) }
                                validationSchema={ validationSchema }
                            >
                                <AppFormField
                                    inputStyle={ styles.inputStyle }
                                    autoCapitalize='none'
                                    name='email'
                                    autoCorrect={ false }
                                    keyboardType='email-address'
                                    placeholder={ strings.EMAIL }
                                />
                                <AppFormField
                                    inputStyle={ styles.inputStyle }
                                    autoCapitalize='none'
                                    autoCorrect={ false }
                                    name='password'
                                    placeholder={ strings.PASSWORD }
                                    secureTextEntry={ !isSecure }
                                    onPressSecure={ () => updateState({ isSecure: !isSecure }) }
                                />

                                <SubmitButton title={ strings.LOGIN } />
                            </AppForm>
                        </View>
                    </ScrollView>
                </KeyboardAwareScrollView>
            </LinearGradient >
        </>
    );
};



export default LoginScreen;
