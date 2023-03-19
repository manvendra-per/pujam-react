import React, { useEffect } from 'react';
import { Image, Pressable, ScrollView, View } from 'react-native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
// Reusuable component
import { AppText, AppTextInput, Card, Header2, Slider, AppModal } from '../../Components';
// constant
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';
// config
import colors from '../../config/colors';
// It's own style
import { moderateScaleVertical } from '../../config/responsiveSize';
import styles from './style';
// store
import { getUserDetails } from '../../store/auth';
import { getBannerDetails, getFeatured, getWorship } from '../../store/details';
import { getUpdateProfileStatus, receiveProfile, resetStatus } from '../../store/profile';
import { useAppContext } from '../../store/App.provider';

const HomeScreen = ({ navigation }) => {
    const { updateState, modalVisible, dispatch } = useAppContext();

    const worship = useSelector(getWorship);
    const featured = useSelector(getFeatured);
    const banner = useSelector(getBannerDetails);
    const details = useSelector(getUserDetails);
    const profileStatus = useSelector(getUpdateProfileStatus);

    useEffect(() => {
        if (profileStatus?.success) {
            Toast.show({
                type: 'success',
                text1: profileStatus?.msg
            });
            dispatch(resetStatus());
        }
        dispatch(receiveProfile(details?.token));
    }, [details, profileStatus]);

    return (
        <>
            <View style={ { backgroundColor: colors.inputColor } }>
                <Header2>
                    <View style={ styles.iconBox }>
                        <Image style={ { ...styles.icon, ...styles.iconLeft } } source={ imagePath.icHomeLogo } />
                        <Image style={ { ...styles.icon, ...styles.iconMiddle } } source={ imagePath.icLocation } />
                        <Pressable onPress={ () => updateState({ modalVisible: !modalVisible }) }>
                            <Image style={ styles.icon } source={ imagePath.icHamburger } />
                        </Pressable>
                    </View>
                    <View style={ styles.infoContainer }>
                        <AppText style={ styles.title }>{ strings.WELCOME_TO_PUJAM }</AppText>
                        <AppText style={ styles.subTitle }>{ strings.SEARCH_TEMPLE }</AppText>
                        <View style={ { width: '100%' } }>
                            <View style={ styles.searchIconBox }>
                                <Image style={ styles.iconSearch } source={ imagePath.icSearch } />
                                <Image style={ styles.iconMic } source={ imagePath.icMic } />
                            </View>
                            <AppTextInput inputStyle={ styles.inputStyle } />
                        </View>

                        <AppText
                            style={ styles.bottomText }>
                            { strings.TEMPLE }
                            <AppText style={ { ...styles.bottomText, ...styles.pujariText } }>
                                { strings.PUJARIS }
                            </AppText>
                        </AppText>
                    </View>
                </Header2 >
                <ScrollView>
                    <View style={ { backgroundColor: colors.inputColor } }>
                        <AppText style={ styles.sliderTitle }>{ strings.EXPLORE_BY_CITIES }</AppText>
                        <Slider sliderStyle={ styles.sliderStyle }>
                            {
                                worship.map((item, index) => (
                                    <View key={ index } style={ styles.iconContainer }>
                                        <LinearGradient style={ styles.imageContainer } colors={ [colors.primaryColor, colors.secondaryColor] }>
                                            <Image style={ styles.cityIcon } source={ { uri: item.imageUri } } />
                                        </LinearGradient>
                                        <AppText style={ styles.iconText }>{ strings.MUMBAI }</AppText>
                                    </View>
                                ))
                            }
                        </Slider>
                    </View>
                    <View style={ { backgroundColor: colors.inputColor, top: moderateScaleVertical(20) } }>
                        <AppText style={ styles.sliderTitle }>{ strings.BOOK_YOUR_PUJARI }</AppText>
                        <Slider sliderStyle={ styles.sliderStyle }>
                            {
                                featured.map((item, index) => (
                                    <View key={ index } style={ styles.cardContainer }>
                                        <Card
                                            title={ item.name }
                                            subTitle={ item.tag }
                                            image={ item.imageUri[0] }
                                            address={ item.address }
                                            startTime={ item.start_time }
                                            endTime={ item.end_time }
                                        />
                                    </View>
                                ))
                            }
                        </Slider>
                    </View>
                    <View style={ { marginTop: moderateScaleVertical(10), marginBottom: moderateScaleVertical(70) } }>
                        <AppText style={ styles.sliderTitle }>{ strings.SPONSOR_ADS }</AppText>
                        <Slider sliderStyle={ styles.sliderStyle }>
                            {
                                banner.map((item, index) => (
                                    <View key={ index } style={ [styles.iconContainer, styles.sponsor] }>
                                        <Image style={ styles.iconSponsor } source={ { uri: item.imageUri } } />
                                    </View>
                                ))
                            }
                        </Slider>
                    </View>
                </ScrollView>
            </View >

            {/* Modal */ }
            <AppModal navigation={ navigation } />
        </>
    );
};

export default HomeScreen;
