import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

// Third party packge
import DatePicker from 'react-native-date-picker';
import LinearGradient from 'react-native-linear-gradient';
// Reusuable Component
import { AppButton, AppText, Header } from '../../Components';
// config
import colors from '../../config/colors';
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
// constant
import strings from '../../Constants/lang';
import NavigationStrings from '../../Constants/NavigationStrings';

const RescheduleSreen = ({ navigation }) => {
    const [state, setState] = useState({
        date: new Date(),
    });

    const { date } = state;

    const updateState = data => setState(state => ({ ...state, ...data }));

    let monthInNumber = date.getUTCMonth();

    let month = '';

    switch (monthInNumber) {
        case 0:
            month = 'Jan'
            break;
        case 1:
            month = 'Feb'
            break;
        case 2:
            month = 'Mar'
            break;
        case 3:
            month = 'Apr'
            break;
        case 4:
            month = 'May'
            break;
        case 5:
            month = 'Jun'
            break;
        case 6:
            month = 'Jul'
            break;
        case 7:
            month = 'Aug'
            break;
        case 8:
            month = 'Sep'
            break;
        case 9:
            month = 'Oct'
            break;
        case 10:
            month = 'Nov'
            break;
        case 11:
            month = 'Dec'
            break;
    }


    return (
        <>
            <Header
                iconVisible={ true }
                title={ strings.RESCHEDULE }
                headerTextStyle={ { textTransform: 'capitalize' } }
                linearGradient={ true }
            />

            <View style={ styles.container }>
                <LinearGradient
                    colors={ [colors.primaryColor, colors.secondaryColor] }
                    start={ { x: -.5, y: 0 } }
                    end={ { x: 1, y: 0 } }
                    style={ {
                        width: '100%',
                        zIndex: 2,
                        height: moderateScaleVertical(45),
                        borderRadius: moderateScale(5),
                        alignItems: 'center',
                        justifyContent: 'center',
                    } }>
                    <AppText style={ { color: colors.white, fontWeight: '700' } }>{ month }</AppText>
                </LinearGradient>
                <DatePicker
                    date={ date }
                    style={ { backgroundColor: colors.white, transform: [{ scale: 1.2 }] } }
                    mode='date'
                    onDateChange={ (date) => updateState({ date: date }) }
                    androidVariant='iosClone'
                />

                <View style={ { paddingVertical: moderateScaleVertical(20) } }>
                    <AppButton
                        btnStyle={ styles.btnStyle }
                        btnText={ strings.NEXT }
                        textStyle={ styles.textStyle }
                        onPress={ () => navigation.navigate(NavigationStrings.REVIEWANDCONFIRMSCREEN) }
                    />
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.white,
        paddingHorizontal: 20,
    },
    btnStyle: {
        backgroundColor: colors.dark,
        height: moderateScaleVertical(45),
    },
    textStyle: {
        color: colors.white,
    }
});

export default RescheduleSreen;
