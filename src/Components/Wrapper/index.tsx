import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';

import colors from '../../config/colors';
import Loader from '../Loader';
import styles from './style';

const Wrapper = ({
    barStyle = "dark-content",
    statusBarColor = colors.white,
    children,
    isLoading = false,
    style = {},
}) => {
    return (
        <View style={ { ...styles.container, ...style } }>
            <StatusBar barStyle={ barStyle } backgroundColor={ statusBarColor } />
            <SafeAreaView style={ { flex: 1 } }>
                { children }
            </SafeAreaView>
            <Loader isLoading={ isLoading } />
        </View>
    );
};

export default Wrapper;