import React, { Children, ReactNode } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
// constants
import colors from '../../config/colors';
// types
import { ScreenTypes } from '../../config/types';


const Screen = ({ children, headerStyle, gradientBackground = true }: ScreenTypes) => {

    const linearColor = [colors.primaryColor, colors.secondaryColor];

    return (

        gradientBackground ?
            <LinearGradient
                colors={ linearColor }
                start={ { x: 0, y: 0 } }
                end={ { x: 0, y: .8 } }
                style={ { ...styles.container, ...headerStyle } }
            >
                <SafeAreaView>
                    { children }
                </SafeAreaView>
            </LinearGradient>
            :
            <SafeAreaView style={ { ...styles.container, ...headerStyle } }>
                { children }
            </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Screen;
