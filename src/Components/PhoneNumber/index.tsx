import React, { useRef, useState } from "react";
import {
    SafeAreaView,
    StatusBar,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

// It's own style
import styles from "./style";

// constant
import AppText from "../AppText";

const PhoneNumber: React.FC = () => {
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");
    const [valid, setValid] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef<PhoneInput>(null);
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <View style={ styles.container }>
                <SafeAreaView style={ styles.wrapper }>
                    { showMessage && (
                        <View style={ styles.message }>
                            <Text>Value : { value }</Text>
                            <Text>Formatted Value : { formattedValue }</Text>
                            <Text>Valid : { valid ? "true" : "false" }</Text>
                        </View>
                    ) }
                    <PhoneInput
                        ref={ phoneInput }
                        defaultValue={ value }
                        defaultCode="IN"
                        layout="second"
                        onChangeText={ (text) => {
                            setValue(text);
                        } }
                        onChangeFormattedText={ (text) => {
                            setFormattedValue(text);
                        } }
                        disableArrowIcon
                        placeholder="0000000000"
                        containerStyle={ styles.containerStyle }
                        textInputStyle={ styles.textInputStyle }
                        textContainerStyle={ styles.textContainerStyle }
                        countryPickerButtonStyle={ styles.countryPickerButtonStyle }
                    />
                    <AppText style={ styles.countryText }>IN</AppText>
                    <View style={ styles.verticalDivider } />
                    {/* <TouchableOpacity
                        style={ styles.button }
                        onPress={ () => {
                            const checkValid = phoneInput.current?.isValidNumber(value);
                            setShowMessage(true);
                            setValid(checkValid ? checkValid : false);
                        } }
                    >
                        <Text>Check</Text> */}
                    {/* </TouchableOpacity> */ }
                </SafeAreaView>
            </View>
        </>
    );
};

export default PhoneNumber;