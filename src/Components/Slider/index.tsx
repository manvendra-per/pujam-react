import React, { ReactNode } from 'react';
import { StyleSheet, ScrollView } from 'react-native';

type SliderTypes = {
    children: ReactNode,
    sliderStyle: {},
}

const Slider = ({ children, sliderStyle }: SliderTypes) => (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={ false }
        style={ sliderStyle }
    >
        { children }
    </ScrollView>
)

export default Slider;