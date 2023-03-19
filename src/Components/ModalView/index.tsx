import React from 'react';
import { Image, Pressable, View } from 'react-native';

// Third party package
import { useDispatch } from 'react-redux';
// Reusuable Component
import AppText from '../AppText';
// It's own style
import styles from './styles';
// constant
import NavigationStrings from '../../Constants/NavigationStrings';
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';
// store
import { moderateScaleVertical } from '../../config/responsiveSize';
import { signoutUser } from '../../store/auth';
import { useAppContext } from '../../store/App.provider';

type ModalViewTypes = {
    navigation: any,
}

const ModalView = ({ navigation }: ModalViewTypes) => {
    const dispatch = useDispatch();
    const { updateState, modalVisible } = useAppContext();

    const handlePress = (screen: string) => {
        updateState({ modalView: !modalVisible })
        navigation.navigate(screen)
    }

    return (
        <View style={ styles.container }>
            <View style={ styles.popupButton } />
            <Pressable onPress={ () => handlePress(NavigationStrings.PROFILE_SCREEN) } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icTickMark } />
                <AppText style={ styles.iconText }>{ strings.MY_PROFILE }</AppText>
            </Pressable>
            <Pressable onPress={ () => handlePress(NavigationStrings.APPOINTMENT_SCREEN) } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icTickMark } />
                <AppText style={ styles.iconText }>{ strings.MY_APPOINTMENT }</AppText>
            </Pressable>
            <Pressable onPress={ () => handlePress(NavigationStrings.FAVORITE_SCREEN) } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icStar } />
                <AppText style={ styles.iconText }>{ strings.MY_FAVORITES }</AppText>
            </Pressable>
            <Pressable onPress={ () => console.log('Modal') } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icWallet } />
                <AppText style={ styles.iconText }>{ strings.PUJAM_WALLET }</AppText>
            </Pressable>
            <Pressable onPress={ () => console.log('Modal') } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icLanguage } />
                <AppText style={ styles.iconText }>{ strings.LANGUAGE }</AppText>
            </Pressable>
            <Pressable onPress={ () => console.log('Modal') } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icTickMark } />
                <AppText style={ styles.iconText }>{ strings.CUSTOMER_SUPPORT }</AppText>
            </Pressable>
            <Pressable onPress={ () => console.log('Modal') } style={ styles.iconContainer }>
                <Image style={ styles.icon } source={ imagePath.icLanguage } />
                <AppText style={ styles.iconText }>{ strings.PRIVACY_POLICY }</AppText>
            </Pressable>
            <Pressable onPress={ () => dispatch(signoutUser()) } style={ { ...styles.iconContainer, marginBottom: moderateScaleVertical(60) } }>
                <Image style={ styles.icon } source={ imagePath.icSetting } />
                <AppText style={ styles.iconText }>{ strings.SETTINGS }</AppText>
            </Pressable>
        </View>
    );
};

export default ModalView;
