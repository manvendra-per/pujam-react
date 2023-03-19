import React from 'react';
import { Text, View, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
// Reusuable component
import AppText from '../AppText';
// config
import colors from '../../config/colors';
// constant
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';
import NavigationStrings from '../../Constants/NavigationStrings';
// It's own style
import styles from './style';
import { moderateScaleVertical } from '../../config/responsiveSize';

const AppointmentCard = () => {
    const navigation = useNavigation();

    const scheduleDetail = {
        title: 'Shi Shakti Ganpati Temple',
        subTitle: 'Remokte, Hydrabad, Telngana',
        date: '25 August, 2022',
        time: '8:48 PM',
    }

    return (
        <>
            <LinearGradient
                colors={ [colors.primaryColor, colors.secondaryColor] }
                start={ { x: 0, y: 0 } }
                end={ { x: .6, y: 0 } }
                style={ styles.gradientContainer }
            >
                <AppText style={ styles.cardHeading }>{ strings.PENDING }</AppText>
                <View style={ styles.container }>
                    <View style={ styles.innerContainer }>
                        <Image style={ styles.imageStyle } source={ imagePath.temple } />
                        <View style={ styles.infoContainer }>
                            <AppText style={ styles.title }>{ scheduleDetail.title }</AppText>
                            <AppText style={ styles.subTitle }>{ scheduleDetail.subTitle }</AppText>
                            <AppText style={ styles.dateAndTime }>
                                { scheduleDetail.date } -
                                <AppText style={ styles.dateAndTime }>
                                    { scheduleDetail.time }
                                </AppText>
                            </AppText>
                            <View style={ { flexDirection: 'row', marginTop: moderateScaleVertical(10) } }>
                                <Image source={ imagePath.icStar } style={ { width: 15, height: 15, tintColor: colors.secondaryColor } } />
                                <Image source={ imagePath.icStar } style={ { width: 15, height: 15, tintColor: colors.secondaryColor } } />
                                <Image source={ imagePath.icStar } style={ { width: 15, height: 15, tintColor: colors.secondaryColor } } />
                                <Image source={ imagePath.icStar } style={ { width: 15, height: 15, tintColor: colors.secondaryColor } } />
                                <Image source={ imagePath.icStar } style={ { width: 15, height: 15, tintColor: colors.secondaryColor } } />
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
            <View style={ styles.bottomInfo }>
                <View style={ { flexDirection: 'row', alignItems: 'center', paddingHorizontal: moderateScaleVertical(45) } }>
                    <AppText style={ styles.bottomLeftText }>Total</AppText>
                    <Image source={ imagePath.icRupee } style={ { width: 20, height: 20, marginTop: 8 } } />
                    <AppText style={ styles.bottomLeftText }>130</AppText>
                </View>
                <Pressable onPress={ () => navigation.navigate(NavigationStrings.UPCOMING_ORDER_DETAIL_SCREEN, scheduleDetail) } style={ styles.viewTextBox }>
                    <AppText style={ styles.viewText }>{ strings.VIEW }</AppText>
                </Pressable>
            </View>
        </>
    );
};

export default AppointmentCard;
