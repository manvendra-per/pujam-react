import React from 'react';
import { Image, View } from 'react-native';
import imagePath from '../../Constants/imagePath';

// It's own style
import { moderateScale } from '../../config/responsiveSize';
import AppText from '../AppText';
import styles from './styles';
// Reusable Component
// constant


const Favorites: React.FC = () => {
    // const { scheduleDetail } = useAppContext();

    // const { title, subTitle } = scheduleDetail;

    return (
        <View style={ styles.container }>
            <Image style={ styles.imageStyle } source={ imagePath.temple } />
            <View style={ styles.textContainer }>
                <AppText style={ styles.title }>title </AppText>
                <AppText style={ styles.subTitle }>subTitle </AppText>
                <View style={ { flexDirection: 'row', marginTop: moderateScale(5) } }>
                    <Image style={ { width: 15, height: 15 } } source={ imagePath.icStar } />
                    <Image style={ { width: 15, height: 15 } } source={ imagePath.icStar } />
                    <Image style={ { width: 15, height: 15 } } source={ imagePath.icStar } />
                    <Image style={ { width: 15, height: 15 } } source={ imagePath.icStar } />
                    <Image style={ { width: 15, height: 15 } } source={ imagePath.icStar } />
                </View>
            </View>
            <Image style={ styles.starImageStyle } source={ imagePath.icStar } />
        </View>
    );
};

export default Favorites;
