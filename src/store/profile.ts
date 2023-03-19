import { createSelector, createSlice } from "@reduxjs/toolkit";
import { profile, profile_update } from './../Constants/urls';
import { apiCallBegan } from "./api";


const slice = createSlice({
    name: 'profile',
    initialState: {
        profileDetails: [],
        status: null
    },
    reducers: {
        // actions handler
        profileReceive: (profile, action) => {
            profile.profileDetails.splice(0, profile.profileDetails.length, action.payload);
        },
        updateStatus: (profile, action) => {
            profile.status = action.payload;
        },
        reset: (profile) => {
            profile.status = null
        }
    }
})

const { profileReceive, updateStatus, reset } = slice.actions;
export default slice.reducer;

// Action Creators
export const receiveProfile = (token) => (dispatch) => {
    dispatch(
        apiCallBegan({
            url: profile,
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            onSuccess: profileReceive.type,
            onError: profileReceive.type
        })
    );
}

export const updateProfile = (data, token) => dispatch => {
    dispatch(
        apiCallBegan({
            url: profile_update,
            method: 'post',
            data,
            headers: {
                'Accept': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            onSuccess: updateStatus.type,
            onError: updateStatus.type,
        })
    );
}

export const resetStatus = () => dispatch => {
    dispatch(reset());
}

// selector
export const getProfile = createSelector(
    state => state.entities.profiles,
    profiles => profiles.profileDetails,
)

export const getUpdateProfileStatus = createSelector(
    state => state.entities.profiles,
    profiles => profiles.status,
)