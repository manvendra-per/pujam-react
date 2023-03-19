import React from 'react';
import { Image, View } from 'react-native';

// Reusable component
import AppText from '../AppText';
// It's own style
import styles from './style';
// constant
import imagePath from '../../Constants/imagePath';
// store
import { useAppContext } from '../../store/App.provider';


const TempleInfo = ({ image, info }) => {
    const { scheduleDetail } = useAppContext();

    const stars = () => {

        for (let i = 0; i < 5; i++) {
            return <Image style={ { width: 15, height: 15 } } source={ imagePath.icStar } />
        }
    }

    return (
        <>
            <View style={ styles.container }>
                <Image style={ styles.imageStyle } source={ image } />
                <View>
                    <AppText style={ styles.title }>title </AppText>
                    <AppText style={ styles.subTitle }>subTitle</AppText>
                    { stars() }
                </View>
            </View>
            <AppText style={ styles.bottomInfo }>
                <AppText style={ [styles.subTitle, styles.subTitleBook] }>Booked on: </AppText>
                date - <AppText>time </AppText>
            </AppText>
        </>
    );
};

export default TempleInfo;
