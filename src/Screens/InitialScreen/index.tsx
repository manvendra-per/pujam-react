import React, { useEffect } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

// It's own style
import styles from './style';

// Reusuable components
import { AppButton, AppText, DividerWithOr, Screen } from '../../Components';
// config
import { moderateScaleVertical } from '../../config/responsiveSize';
// constants
import NavigationStrings from '../../Constants/NavigationStrings';
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';

const InitialScreen = ({ navigation }) => {

    return (
        <>
            <Screen>
                <ScrollView style={ { marginVertical: moderateScaleVertical(5), marginTop: moderateScaleVertical(20) } }>
                    <Image source={ imagePath.icIcon2 } style={ styles.iconStyle } />
                    <AppText style={ styles.iconText }>{ strings.PUJAM }</AppText>

                    <View style={ styles.inputContainer }>
                        <View style={ { marginTop: moderateScaleVertical(68) } }>
                            <AppButton
                                onPress={ () => navigation.navigate(NavigationStrings.LOGIN_SCREEN) }
                                btnText={ strings.CONTINUE_AS_LOGIN }
                                btnStyle={ styles.btnStyle }
                            />
                        </View>

                        <DividerWithOr />

                        <Pressable onPress={ () => navigation.navigate(NavigationStrings.SIGNUP_SCREEN) } style={ { marginTop: moderateScaleVertical(50) } }>
                            <AppText style={ styles.bottomText }>{ strings.SIGNUP_WITH_EMAIL_OR_PHONE }</AppText>
                        </Pressable>
                    </View>
                </ScrollView>
            </Screen>
        </>
    );
};



export default InitialScreen;
