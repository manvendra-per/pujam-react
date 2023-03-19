import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

// Third party package
import { useSelector } from 'react-redux';

// store
import { getAuthStatus } from '../store/auth';
// Stacks
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const Stack = createNativeStackNavigator();

const Routes = () => {
    const isAuthenticated = useSelector(getAuthStatus);

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={ {
                    headerShown: false,
                    animation: 'fade_from_bottom',
                    headerTransparent: true,
                } }>
                {
                    isAuthenticated ?

                        MainStack(Stack)
                        :
                        AuthStack(Stack)

                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;