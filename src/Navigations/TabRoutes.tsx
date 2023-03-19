import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

// Third party library
import LinearGradient from 'react-native-linear-gradient';
// screens
import { AppointmentScreen, HomeScreen, MapScreen } from '../Screens';
// constant
import NavigationStrings from '../Constants/NavigationStrings';
import imagePath from '../Constants/imagePath';
// config
import colors from '../config/colors';
import { moderateScaleVertical } from '../config/responsiveSize';
// components
import AppModal from '../Components/AppModal';
// Local State
import { useAppContext } from '../store/App.provider';

const BottomTab = createBottomTabNavigator();

const TabRoutes = () => {
    const navigation = useNavigation();
    const { updateState } = useAppContext();

    return (
        <>
            <BottomTab.Navigator
                tabBar={ tabsProps => (
                    <>
                        <BottomTabBar { ...tabsProps } />
                    </>
                ) }
                initialRouteName={ NavigationStrings.HOME_SCREEN }
                screenOptions={ {
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { height: moderateScaleVertical(80) },
                    // tabBarIconStyle: { top: moderateScaleVertical(23) },
                    tabBarBackground: (() => {
                        return <LinearGradient style={ { flex: 1 } } colors={ [colors.primaryColor, colors.secondaryColor] }></LinearGradient>
                    })
                } }

            >
                <BottomTab.Screen
                    name={ NavigationStrings.HOME_SCREEN }
                    component={ HomeScreen }
                    options={ {
                        tabBarIcon: ({ focused, size }) => {
                            return <Image source={ imagePath.icHome } style={ { width: size * 1.5, height: size * 1.5 } } />
                        }
                    } }
                />
                <BottomTab.Screen
                    name={ NavigationStrings.APPOINTMENT_SCREEN }
                    component={ AppointmentScreen }
                    options={ ({ route }) => ({
                        tabBarIcon: ({ focused, size }) => {
                            return <Image source={ imagePath.icAppointment } style={ { width: size * 1.5, height: size * 1.5 } } />
                        },
                        tabBarStyle: { display: 'none' }
                    }) }
                />
                <BottomTab.Screen
                    name={ NavigationStrings.MAP_SCREEN }
                    component={ MapScreen }
                    options={ {
                        tabBarIcon: ({ focused, size }) => {
                            return <Image source={ imagePath.icMap } style={ { width: size * 1.5, height: size * 1.5 } } />
                        }
                    } }
                />
                <BottomTab.Screen
                    name='nothing'
                    listeners={ {
                        tabPress: () => updateState({ modalVisible: true })
                    } }
                    component={ HomeScreen }
                    options={ {
                        tabBarIcon: ({ focused, size }) => {
                            return <Image source={ imagePath.icProfile } style={ { width: size * 1.5, height: size * 1.5 } } />
                        }
                    } }
                />
            </BottomTab.Navigator>

            {/* Modal */ }
            <AppModal navigation={ navigation } />
        </>
    )
}


export default TabRoutes;