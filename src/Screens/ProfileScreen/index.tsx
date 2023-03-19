import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect } from 'react';
import { BackHandler, ScrollView, View } from 'react-native';

// Third party package
import dateformat from 'dateformat';
import { FormikContext } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
// components
import { AppForm, AppFormField, AppText, Header, RadioButton, Screen, SubmitButton } from '../../Components';
// store
import { getUserDetails } from '../../store/auth';
import { getProfile, getUpdateProfileStatus, updateProfile } from '../../store/profile';
// Local State
import { moderateScale, moderateScaleVertical } from '../../config/responsiveSize';
// constant
import strings from '../../Constants/lang';
// config
import colors from '../../config/colors';
// It's own style
import NavigationStrings from '../../Constants/NavigationStrings';
import { useAppContext } from '../../store/App.provider';
import styles from './styles';

const validationSchema = Yup.object().shape({
    name: Yup.string().label('Name'),
    phone: Yup.string().min(10).max(10).label('Phone'),
    email: Yup.string().email().label('Email'),
    pob: Yup.string().label('POB'),
    goutram: Yup.string().label('Goutram'),
    nakshatra: Yup.string().label('Nakshatra')
});

const ProfileScreen = () => {
    const navigation = useNavigation();
    const formik = useContext(FormikContext);
    const { selectedRadio, updateState, dispatch } = useAppContext();
    const details = useSelector(getUserDetails);
    const profileStatus = useSelector(getUpdateProfileStatus);

    const profile = useSelector(getProfile)[0];
    const d = new Date(profile?.date_of_birth);

    useEffect(() => {
        const backAction = () => {
            return updateState({ modalVisible: false });
        }
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction(),
        );

        return backHandler.remove();
    }, []);

    const gender = [
        {
            id: 0,
            name: 'Male'
        },
        {
            id: 1,
            name: 'Female'
        },
        {
            id: 2,
            name: 'Other'
        }
    ]

    const initialValues = {
        name: '',
        phone: '',
        email: '',
        pob: '',
        sunSign: '',
        goutram: '',
        nakshatra: '',
    }

    const handleSubmit = (values) => {
        const data = {
            "id": profile.id,
            "name": values.name !== '' ? values.name : profile.name,
            "gender": selectedRadio !== null ? selectedRadio : profile.gender,
            "date_of_birth": profile.date_of_birth,
            "place_of_birth": values.pob !== '' ? values.pob : profile.place_of_birth,
            "email": values.email !== '' ? values.email : profile.email,
            "phone_no": values.phone !== '' ? values.phone : profile.phone_no,
            "image": "default.png",
            "sun_sign": values.sunSign !== '' ? values.sunSign : profile.sun_sign,
            "goutram": values.goutram !== '' ? values.goutram : profile.goutram,
            "nakshatra": values.nakshatra !== '' ? values.nakshatra : profile.nakshatra,
        }
        if (values.name !== '' || values.phone !== '' || values.email !== '' || values.pob !== '' || values.sunSign !== '' || values.goutram !== '' || values.nakshatra !== '') {
            dispatch(updateProfile(data, details.token));

            formik.resetForm({ values: initialValues });
        }
    };

    useEffect(() => {
        if (profileStatus?.success) {
            navigation.navigate(NavigationStrings.HOME_SCREEN)
        }
    }, [profileStatus])

    return (
        <Screen gradientBackground={ false }>
            <Header
                iconColor={ colors.dark }
                iconVisible={ true }
                headerStyle={ { marginTop: moderateScale(10) } }
            />

            <ScrollView
                showsVerticalScrollIndicator={ false }
                style={ { paddingHorizontal: moderateScale(10), paddingBottom: 100 } }
            >
                <AppForm
                    initialValues={ initialValues }
                    onSubmit={ values => handleSubmit(values) }
                    validationSchema={ validationSchema }
                >
                    <View>
                        <AppText style={ styles.inputLabel }>{ strings.NAME }</AppText>
                        <AppFormField
                            inputStyle={ { width: '100%' } }
                            autoCapitalize='none'
                            name='name'
                            autoCorrect={ false }
                            keyboardType='default'
                            placeholder={ profile?.name }
                        />
                    </View>
                    <View style={ { marginTop: moderateScaleVertical(-10) } }>
                        <AppText style={ styles.inputLabel }>{ strings.PHONE }</AppText>
                        <AppFormField
                            inputStyle={ { width: '100%' } }
                            autoCapitalize='none'
                            name='phone'
                            autoCorrect={ false }
                            keyboardType='phone-pad'
                            placeholder={ profile?.phone_no }
                        />
                    </View>

                    <View>
                        <AppText style={ styles.radioLabel }>Gender</AppText>
                        <View style={ styles.radioContainer }>
                            {
                                gender.map((item, index) => (
                                    <RadioButton
                                        item={ item }
                                        selectedRadio={ selectedRadio }
                                        key={ index }
                                        onPress={ () => updateState({ selectedRadio: index }) }
                                    />
                                ))
                            }
                        </View>
                    </View>

                    <View style={ { marginTop: moderateScaleVertical(-10) } }>
                        <AppText style={ styles.inputLabel }>{ strings.EMAIL }</AppText>
                        <AppFormField
                            inputStyle={ { width: '100%' } }
                            autoCapitalize='none'
                            name='email'
                            autoCorrect={ false }
                            keyboardType='email-address'
                            placeholder={ profile?.email }
                        />
                    </View>
                    <View>
                        <AppText style={ styles.radioLabel }>{ strings.DOB }</AppText>
                        <AppText style={ { fontSize: 18, left: 20 } }>{ dateformat(d, 'mmmm dd, yyyy') }</AppText>
                    </View>
                    <View style={ { marginTop: moderateScaleVertical(-10) } }>
                        <AppText style={ styles.inputLabel }>{ strings.POB }</AppText>
                        <AppFormField
                            inputStyle={ { width: '100%' } }
                            autoCapitalize='none'
                            name='pob'
                            autoCorrect={ false }
                            keyboardType='default'
                            placeholder={ profile?.place_of_birth }
                        />
                    </View>
                    <View style={ { marginTop: moderateScaleVertical(-10) } }>
                        <AppText style={ styles.inputLabel }>{ strings.GOUTRAM }</AppText>
                        <AppFormField
                            inputStyle={ { width: '100%' } }
                            autoCapitalize='none'
                            name='goutram'
                            autoCorrect={ false }
                            keyboardType='default'
                            placeholder={ profile?.goutram }
                        />
                    </View>
                    <View style={ { marginTop: moderateScaleVertical(-10) } }>
                        <AppText style={ styles.inputLabel }>{ strings.NAKSHATRA }</AppText>
                        <AppFormField
                            inputStyle={ { width: '100%' } }
                            autoCapitalize='none'
                            name='natshatra'
                            autoCorrect={ false }
                            keyboardType='default'
                            placeholder={ profile?.nakshatra }
                        />
                    </View>
                    <SubmitButton
                        gradientColors={ [colors.primaryColor, colors.secondaryColor] }
                        btnStyle={ { marginBottom: moderateScaleVertical(100) } }
                        title={ strings.SAVE }
                        textStyle={ { color: colors.white } }
                    />
                </AppForm>
            </ScrollView>
        </Screen>
    );
};

export default ProfileScreen;
