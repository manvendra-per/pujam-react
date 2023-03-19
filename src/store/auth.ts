import { createSlice, createSelector } from "@reduxjs/toolkit";
import { apiCallBegan, signoutRequest } from "./api";
import { login } from "../Constants/urls";

const slice = createSlice({
    name: 'auth',
    initialState: {
        userLoginStore: [],
        isLoading: false,
    },
    reducers: {
        // actions handler
        loginRequested: (auth, action) => {
            auth.isLoading = true;
        },
        userLogin: (auth, action) => {
            auth.userLoginStore.splice(0, auth.userLoginStore.length, action.payload);
            auth.isLoading = false;
        },
        loginRequestedFailed: (aut, action) => {
            aut.isLoading = false;
        }
    }
})

const { loginRequested, userLogin, loginRequestedFailed } = slice.actions;
export default slice.reducer;

// Action Creators
export const LoginUser = (email, password) => (dispatch) => {
    const data = {
        email,
        password,
        device_token: null,
    }

    dispatch(
        apiCallBegan({
            url: login,
            method: 'post',
            data,
            onStart: loginRequested.type,
            onSuccess: userLogin.type,
            onError: loginRequestedFailed.type
        })
    );
}

export const signoutUser = () => dispatch => {
    dispatch(signoutRequest());
}

// selector
export const getLoadingState = createSelector(
    state => state.auth,
    auth => auth.isLoading
)

export const getAuthStatus = createSelector(
    state => state.auth,
    auth => auth.userLoginStore[0]?.success,
)

export const getAuthenticationFailedMsg = createSelector(
    state => state.auth,
    auth => auth.userLoginStore[0]?.msg,
)

export const getUserDetails = createSelector(
    state => state.auth,
    auth => auth.userLoginStore[0]?.data,
)
