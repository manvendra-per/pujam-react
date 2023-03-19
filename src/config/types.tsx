import { ReactNode } from "react";

export type ScreenTypes = {̦
    children: ReactNode;
    headerStyle?: {};
    gradientBackground?: boolean;
}

export type AppTextInputTypes = {
    label: string;
    value: any;
    placeholder: string;
    onChangeText: (args: string) => void;
    inputStyle: {};
    textStyle: {};
    onBlur: (event: any) => void;
    onPressSecure: () => void;
}

export type AppButtonTypes = {
    btnText: string;
    onPress: () => void;
    btnStyle: {};
    textStyle: {};
    isDisabled: boolean;
    gradientColors: [string, string];
    start: { x: number, y: number };
    end: { x: number, y: number };
}

export type PropsAndChildren = {
    children: ReactNode;
    numberOfCheckBox: number;
}

export type SignupScreenTypes = {
    navigation: any,
    translateOnX: number
}

export type AppIconTypes = {
    iconName: string,
    iconStyle: {},
    iconText: string,
    iconTextStyle: {},
}

export type ApiCallBeganTypes = {
    type: string;
    payload: {
        url: string,
        method: string,
        data: {},
        headers: {},
        onStart: string,
        onSuccess: string,
        onError: string
    }
}

export type AppContextType = {
    isSecure: boolean,
    modalVisible: boolean,
    selectedRadio: null,
    updateState: Function,
    dispatch: Function
};