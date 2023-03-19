import React from 'react';
import { Text, View, Image, ScrollView, Pressable } from 'react-native';
import DropShadow from "react-native-drop-shadow";

// Reusuable component
import { AppIcon, AppText, Header } from '../../Components';
// constants
import strings from '../../Constants/lang';
import NavigationStrings from '../../Constants/NavigationStrings';
import imagePath from '../../Constants/imagePath';
// It's own style
import styles from './style';
import { height, moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
import colors from '../../config/colors';

const UpcomingOrderDetailScreen = ({ route, navigation }) => {
    const { title, subTitle, date, time } = route.params;

    const shadowOpt = {
        width: 160,
        height: 170,
        color: "#000",
        border: 2,
        radius: 3,
        opacity: 0.2,
        x: 0,
        y: 3,
        style: { marginVertical: 5 }
    }
    return (
        <>
            <Header onPress={ () => navigation.navigate(NavigationStrings.APPOINTMENT_SCREEN) } linearGradient={ true } iconVisible={ true } title={ strings.UPCOMING_ORDER_DETAIL }></Header>
            <ScrollView style={ { height: height * 1.2, backgroundColor: colors.white } }>
                <View style={ styles.container }>
                    <View style={ styles.topContainer }>
                        <Image style={ styles.imageStyle } source={ imagePath.temple } />
                        <View>
                            <AppText style={ styles.title }>{ subTitle }</AppText>
                            <AppText style={ styles.subTitle }>
                                <AppText style={ [styles.subTitle, styles.subTitleBook] }>Booked on: </AppText>
                                { date } - <AppText style={ styles.subTitle }>{ time }</AppText>
                            </AppText>
                        </View>
                    </View>
                    <View style={ styles.iconContainer }>
                        <AppIcon iconText={ strings.DIRECTION } iconName={ imagePath.icLocation } />
                        <Pressable onPress={ () => navigation.navigate(NavigationStrings.RESCHEDULE_SCREEN) }>
                            <AppIcon iconText={ strings.SCHEDULE } iconName={ imagePath.icCalender } />
                        </Pressable>
                        <AppIcon iconText={ strings.CANCLE } iconStyle={ { width: moderateScale(25), height: moderateScale(25) } } iconName={ imagePath.icClose } />
                    </View>

                    <View style={ styles.bookingContainer }>
                        <AppText style={ styles.bookingTopTextStyle }>{ title }</AppText>
                        <AppText style={ styles.bookingTopTextStyle }>{ subTitle }</AppText>
                        <View style={ styles.bottomContainer }>
                            <AppText style={ styles.bookingBottomTextStyle }>{ strings.BOOKING_ID }</AppText>
                            <AppText style={ styles.bookingBottomTextStyle }>bhk-3838427237A</AppText>
                        </View>
                    </View>
                    <View style={ styles.dividerContainer }>
                        <View style={ styles.goldenDividerCircle } />
                        <View style={ styles.golderDivider } />
                        <View style={ styles.goldenDividerCircle } />
                    </View>
                    <View style={ { paddingHorizontal: 20, paddingVertical: 8 } }>
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                            <AppText style={ { color: colors.grayColor } }>Service(Timings)</AppText>
                            <AppText style={ { color: colors.grayColor } }>Price</AppText>
                        </View>
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between' } }>
                            <View style={ { marginTop: 5 } }>
                                <AppText style={ { fontSize: 16 } }>Sri Shakti Ganpati Archana(24-08-2022)</AppText>
                                <AppText style={ { fontSize: 16 } }>Start Time: 06:00 AM</AppText>
                                <AppText style={ { fontSize: 16 } }>End Time: 06:10 AM</AppText>
                            </View>
                            <View style={ { flexDirection: 'row', alignItems: 'flex-end' } }>
                                <Image style={ { width: 15, height: 15 } } source={ imagePath.icRupee } />
                                <AppText>50</AppText>
                            </View>
                        </View>
                        <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 35 } }>
                            <AppText>PoojaSamagriPrice</AppText>
                            <View style={ { flexDirection: 'row', alignItems: 'flex-end' } }>
                                <Image style={ { width: 15, height: 15 } } source={ imagePath.icRupee } />
                                <AppText>50</AppText>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.dividerContainer }>
                        <View style={ styles.goldenDividerCircle } />
                        <View style={ styles.golderDivider } />
                        <View style={ styles.goldenDividerCircle } />
                    </View>
                    <View style={ { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, top: -5 } }>
                        <AppText style={ { fontWeight: '700', fontSize: 20, } }>Total Price: </AppText>
                        <View style={ { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } }>
                            <Image style={ { width: 15, height: 15, top: 1, tintColor: colors.black } } source={ imagePath.icRupee } />
                            <AppText>130</AppText>
                        </View>
                    </View>
                    <View style={ { paddingHorizontal: 20, marginTop: 20 } }>
                        <AppText style={ { color: colors.grayColor } }>Payment Status</AppText>
                        <AppText style={ { fontSize: 18 } }>Pending</AppText>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};
export default UpcomingOrderDetailScreen;
