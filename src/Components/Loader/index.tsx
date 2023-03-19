import React, { memo } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

// Third party package
// config
import { height, moderateScale } from '../../config/responsiveSize';

const Loader = ({ isLoading = false }) => {

    if (isLoading) {
        return (
            isLoading &&
            <View style={ styles.loaderStyle }>
                <ActivityIndicator color="red" size={ moderateScale(40) } />
            </View>
        )
    }
    return null;
};

const styles = StyleSheet.create({
    loaderStyle: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        height: height * 1.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 10
    }
});

export default memo(Loader);