
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

// Reusuable component
import { Header, AppText, AppointmentCard } from '../../Components';
// It's own style
import styles from './styles';
// config
import colors from '../../config/colors';
// constant
import strings from '../../Constants/lang';


const AppointmentScreen = () => {
    return (
        <View style={ { flex: 1, backgroundColor: colors.white } }>
            <Header linearGradient={ true } iconVisible={ true } title={ strings.MY_APPOINTMENT }>
                <View style={ styles.topTab }>
                    <AppText style={ styles.headerTabText }>{ strings.TEMPLE }</AppText>
                    <AppText style={ styles.headerTabText }>{ strings.PUJARIS }</AppText>
                </View>
            </Header>
            <ScrollView>
                <View style={ { marginVertical: 40 } }>
                    <AppointmentCard />
                    <AppointmentCard />
                    <AppointmentCard />
                </View>
            </ScrollView>
        </View>
    );
};
export default AppointmentScreen;
