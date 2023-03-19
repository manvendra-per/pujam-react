import * as React from 'react';

import TabRoutes from './TabRoutes';
// Screens
import { FavoriteScreen, ProfileScreen, RescheduleSreen, ReviewAndConfirmScreen, UpcomingOrderDetailScreen } from '../Screens';
// constant
import NavigationStrings from '../Constants/NavigationStrings';

export default (Stack) => (
    <>
        <Stack.Screen
            // options={ { headerShown: false } }
            name={ NavigationStrings.HOME }
            component={ TabRoutes }
        />
        <Stack.Screen
            name={ NavigationStrings.UPCOMING_ORDER_DETAIL_SCREEN }
            component={ UpcomingOrderDetailScreen }
            options={ {
                tabBarStyle: { display: 'none' }
            } }
        />
        <Stack.Screen
            name={ NavigationStrings.RESCHEDULE_SCREEN }
            component={ RescheduleSreen }
            options={ {
                tabBarStyle: { display: 'none' }
            } }
        />
        <Stack.Screen
            name={ NavigationStrings.REVIEWANDCONFIRMSCREEN }
            component={ ReviewAndConfirmScreen }
            options={ {
                tabBarStyle: { display: 'none' }
            } }
        />
        <Stack.Screen
            name={ NavigationStrings.FAVORITE_SCREEN }
            component={ FavoriteScreen }
            options={ {
                TabBarStyle: { display: 'none' }
            } }
        />
        <Stack.Screen
            name={ NavigationStrings.PROFILE_SCREEN }
            component={ ProfileScreen }
            options={ {
                TabBarStyle: { display: 'none' }
            } }
        />
    </>
)