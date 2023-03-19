import React, { ReactNode } from 'react';

// Third party package
import LinearGradient from 'react-native-linear-gradient';
// It's own style
import colors from '../../config/colors';
import styles from './style';

type Header2Types = {
    children: ReactNode;
}

const Header2 = ({ children }: Header2Types) => {
    return (
        <LinearGradient
            colors={ [colors.primaryColor, colors.secondaryColor] }
            start={ { x: 0, y: 0 } }
            end={ { x: 0, y: .8 } }
            style={ styles.container }>
            { children }
        </LinearGradient>
    );
};
export default Header2;
