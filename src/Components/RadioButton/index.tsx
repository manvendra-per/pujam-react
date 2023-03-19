import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

// It's own style
import styles from './styles';
// hooks
import { useUpdateState } from '../../hooks/useUpdateState';


const RadioButton: React.FC = ({ onPress, item, selectedRadio }) => {

    return (
        <TouchableOpacity activeOpacity={ .8 } onPress={ onPress }>
            <View style={ styles.radioContainer }>
                <View style={ styles.radio }>
                    {
                        selectedRadio === item.id ?
                            <View style={ styles.radioStyle } />
                            :
                            null
                    }
                </View>
                <Text style={ styles.radioText }>{ item.name }</Text>
            </View>
        </TouchableOpacity>
    )
}

export default RadioButton;