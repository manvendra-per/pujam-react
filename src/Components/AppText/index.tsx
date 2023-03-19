import React, { ReactNode } from 'react';
import { Text } from 'react-native';

import styles from './style';

type AppTextTypes = {
    children: ReactNode;
    style?: {},
}

const AppText = ({ children, style }: AppTextTypes) => {
    return (
        <Text style={ [styles.text, style] }>
            { children }
        </Text>
    );
}

export default AppText;