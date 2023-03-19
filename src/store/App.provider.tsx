import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// config/types
import { AppContextType } from '../config/types';

const defaultValue = {
    isSecure: false,
    modalVisible: false,
    selectedRadio: null
};

const AppContext = React.createContext<AppContextType>(defaultValue);

export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        isSecure: false,
        modalVisible: false,
        selectedRadio: null
    });

    const { isSecure, modalVisible, selectedRadio } = state;
    const dispatch = useDispatch();

    const updateState = (data) => {
        setState(state => ({ ...state, ...data }));
    }

    return (
        <AppContext.Provider value={ { isSecure, modalVisible, selectedRadio, dispatch, updateState } }>
            { children }
        </AppContext.Provider>
    );
};

export const useAppContext = () => React.useContext(AppContext);