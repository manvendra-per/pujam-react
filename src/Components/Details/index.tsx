import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';

// Reusable component
import AppText from '../AppText';
// constant
import imagePath from '../../Constants/imagePath';
// config
import { moderateScaleVertical } from '../../config/responsiveSize';
// It's own style
import styles from './style';
import strings from '../../Constants/lang';

const Details: React.FC = ({ info, onPress }) => {
    return (
        <View style={ styles.container }>
            <View style={ styles.topContainer }>
                <View style={ styles.titleContainer }>
                    <AppText style={ styles.title }>{ info.title }</AppText>
                    <View style={ styles.rupeeContainer }>
                        <Image style={ styles.rupee } source={ imagePath.icRupee } />
                        <AppText style={ styles.rupeeText }>{ info.price }</AppText>
                    </View>
                </View>
                <AppText style={ styles.time }>{ strings.START_TIME }: { info.time }</AppText>
                <AppText style={ styles.duration }>{ strings.DURATION }: { info.duration } { strings.MINS }</AppText>

            </View>
            <View style={ styles.bottomContainer }>
                <Pressable onPress={ onPress } style={ styles.checkContainer }>
                    <Image style={ styles.checkImageStyle } source={ info.selected ? imagePath.icCheck : imagePath.icUnCheck } />
                    <AppText style={ styles.checkTextStyle }>{ strings.ADD_POOJA_SAMAGRI }</AppText>
                </Pressable>
                <View style={ styles.rupeeContainer }>
                    <Image style={ [styles.rupee, { top: moderateScaleVertical(17) }] } source={ imagePath.icRupee } />
                    <AppText style={ [styles.samagriRupeeText, { top: moderateScaleVertical(10) }] }>{ info.addPoojaSamagri }</AppText>
                </View>
            </View>
        </View>
    );
}

export default Details;
