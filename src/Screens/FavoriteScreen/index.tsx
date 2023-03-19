import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// Reusuable component
import { Favorites, Header } from '../../Components';
// constant
import strings from '../../Constants/lang';
// config
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';

const FavoriteScreen: React.FC = () => {
    return (
        <>
            <Header title={ strings.MY_FAVORITES } linearGradient={ true } headerTextStyle={ { textTransform: 'capitalize' } } iconVisible={ true } />
            <ScrollView>
                <View style={ styles.container }>
                    <Favorites />
                    <Favorites />
                    <Favorites />
                    <Favorites />
                    <Favorites />
                    <Favorites />
                    <Favorites />
                    <Favorites />
                    <Favorites />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: moderateScaleVertical(20),
        paddingHorizontal: moderateScale(15)
    },
});

export default FavoriteScreen;
