import * as React from 'react';

// Reusable Component
import { InitialScreen, LoginScreen, SignupScreen, ConfirmationCodeScreen, ForgotPasswordScreen } from '../Screens';
// constant
import NavigationStrings from '../Constants/NavigationStrings';

export default (Stack) => (
    <>
        <Stack.Screen
            name={ NavigationStrings.INITTIAL_SCREEN }
            component={ InitialScreen }
        />
        <Stack.Screen
            name={ NavigationStrings.LOGIN_SCREEN }
            component={ LoginScreen }
        />
        <Stack.Screen
            name={ NavigationStrings.SIGNUP_SCREEN }
            component={ SignupScreen }
        />
        <Stack.Screen
            name={ NavigationStrings.CONFIRMATION_CODE_SCREEN }
            component={ ConfirmationCodeScreen }
        />
        <Stack.Screen
            name={ NavigationStrings.FORGOT_PASSWORD_SCREEN }
            component={ ForgotPasswordScreen }
        />
    </>
)