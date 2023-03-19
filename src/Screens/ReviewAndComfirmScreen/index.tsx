import React, { useState } from 'react';
import { View, Image, Pressable } from 'react-native';

// It's own style
import styles from './style';
// Reusuable component
import { AppButton, Header, TempleInfo, AppText, Details } from '../../Components';
// constant
import imagePath from '../../Constants/imagePath';
import strings from '../../Constants/lang';
// config
import colors from '../../config/colors';
// store
import { useAppContext } from '../../store/App.provider';

const ReviewAndConfirmScreen = () => {
    const [list, setList] = useState([
        {
            id: 1,
            price: 500,
            title: 'SG Homan',
            time: '2023-1-27 3:30 pm',
            duration: 60,
            addPoojaSamagri: 45,
            selected: false,
        },
        {
            id: 2,
            price: 1016,
            title: 'Maa Durga Homan',
            time: '2023-1-27 3:30 pm',
            duration: 60,
            addPoojaSamagri: 145,
            selected: false,
        },
    ]);

    const { scheduleDetail } = useAppContext();

    const handleCheck = (id) => {
        const newList = list.map(item => item.id === id ? { ...item, selected: !item.selected } : item);

        setList(newList);
    }


    return (
        <>
            <Header iconVisible={ true } linearGradient={ true } title={ strings.REVIEWANDCONFIRM } />
            <TempleInfo image={ imagePath.temple } info={ scheduleDetail } />
            <View style={ styles.container }>
                <AppButton
                    btnText={ strings.SELECTED_SERVICES }
                    gradientColors={ [colors.primaryColor, colors.secondaryColor] }
                    start={ { x: 0, y: 0 } }
                    end={ { x: .5, y: 0 } }
                    btnStyle={ styles.btnStyle }
                    textStyle={ styles.textStyle }
                />
            </View>
            {
                list.map((item, index) => (
                    <Details
                        key={ index + 1 }
                        onPress={ () => handleCheck(index + 1) }
                        info={ item }
                    />

                ))
            }

            <View style={ styles.bottomContainer }>
                <AppText style={ styles.bottomText }>{ strings.ENTER_CUSTOMER_DETAILS }</AppText>
                <Pressable onPress={ () => console.log('add btn clicked') } style={ styles.addBtn }>
                    <AppText style={ styles.addBtnText }>+</AppText>
                </Pressable>
            </View>
        </>
    );
};

export default ReviewAndConfirmScreen;
