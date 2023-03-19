import React from 'react';

// Third party package
import { useFormikContext } from 'formik';
// components
import AppTextInput from '../../AppTextInput';
import ErrorMessage from '../ErrorMessage';

type AppFormFieldType = {
    name: string;
    otherProps: {},
}

const AppFormField: React.FC<AppFormFieldType> = ({ name, ...otherProps }) => {
    const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
    return (
        <>
            <AppTextInput
                onBlur={ () => setFieldTouched(name) }
                onChangeText={ handleChange(name) }
                { ...otherProps }
            />

            <ErrorMessage error={ errors[name] } visible={ touched[name] } />
        </>
    );
};


export default AppFormField;
