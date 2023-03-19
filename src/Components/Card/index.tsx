import React from 'react';
import { Text, View, Image } from 'react-native';

// It's own styl
import styles from './styles';
import AppText from '../AppText';
import imagePath from '../../Constants/imagePath';
import { moderateScale } from '../../config/responsiveSize';
import AppButton2 from '../AppButton2';
import strings from '../../Constants/lang';

const Card: React.FC = ({ image, title, subTitle, address, startTime, endTime }) => {
    return (
        <View style={ styles.container }>
            <Image style={ styles.imageStyle } source={ { uri: image } } />
            <View style={ styles.infoContainer }>
                <AppText style={ styles.title }>{ title }</AppText>
                <AppText style={ styles.subTitle }>{ subTitle }</AppText>
                <View style={ styles.starsContainer }>
                    <View style={ styles.stars }>
                        <Image style={ styles.star } source={ imagePath.icFillStar } />
                        <Image style={ styles.star } source={ imagePath.icFillStar } />
                        <Image style={ styles.star } source={ imagePath.icFillStar } />
                        <Image style={ styles.star } source={ imagePath.icFillStar } />
                        <Image style={ styles.star } source={ imagePath.icFillStar } />
                    </View>
                    <AppText style={ styles.starsRating }>(17)</AppText>
                </View>
                <View style={ styles.icons }>
                    <Image style={ styles.iconStyles } source={ imagePath.icLocation } />
                    <AppText style={ styles.about }>{ address }</AppText>
                </View>
                <View style={ styles.icons }>
                    <Image style={ styles.iconStyles } source={ imagePath.icClock } />
                    <AppText style={ styles.about }>{ startTime } - { endTime }</AppText>
                </View>
                <View style={ styles.icons }>
                    <Image style={ styles.iconStyles } source={ imagePath.icMoney } />
                    <AppText style={ styles.about }>2000 - 6000</AppText>
                    <Image style={ { ...styles.iconStyles, marginLeft: moderateScale(5) } } source={ imagePath.icMoney } />
                </View>
                <View style={ styles.btnContainer }>
                    <AppButton2 btnStyle={ { marginRight: 5 } } title={ strings.VIEW_PROFILE } />
                    <AppButton2 title={ strings.BOOK_NOW } />
                </View>
            </View>
        </View>
    );
};

export default Card;
