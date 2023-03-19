import React from 'react';

// Third party package
import { Formik } from 'formik';

const AppForm: React.FC = ({ initialValues, onSubmit, validationSchema, children }) => {
    return (
        <Formik
            initialValues={ initialValues }
            onSubmit={ onSubmit }
            validationSchema={ validationSchema }
        >
            { () => (
                <>
                    { children }
                </>
            ) }

        </Formik>
    );
};

export default AppForm;
